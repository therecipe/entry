// +build !js wasm

package main

import (
	"bytes"
	"flag"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"unsafe"

	"github.com/therecipe/qt/core"
	"github.com/therecipe/qt/gui"
	"github.com/therecipe/qt/qml"
	"github.com/therecipe/qt/widgets"
)

func main() {
	isDev = len(mainPayload) == maxPayloadLen || wasDev

	if !parsedFlags && !isInsideBrowser && !isTesting {
		flag.CommandLine = flag.NewFlagSet(os.Args[0], flag.ContinueOnError)

		isDevRef := flag.Bool("edit", len(mainPayload) == maxPayloadLen, "enable dev console")

		saveBoot := flagAsBoolOrString("save-boot", "save the boot payload to boot.js or the path specified")
		loadBoot := flagAsBoolOrString("load-boot", "load the boot payload from boot.js or the path specified")
		patchBoot := flagAsBoolOrString("patch-boot", "patch the boot payload from boot.js or the path specified")

		resetBoot := flag.Bool("reset-boot", false, "resets the boot payload to a safe default")
		defaultBoot := flag.Bool("default-boot", false, "start the application with the default boot payload")
		skipBootRef := flag.Bool("skip-boot", false, "skip the boot payload and load the main payload instead (works only with *.js files atm)")

		savePayload := flagAsBoolOrString("save-payload", "save the payload to payload.js, payload.qml or the path specified")
		loadPayload := flagAsBoolOrString("load-payload", "load the payload from payload.js, payload.qml or the path specified")
		patchPayload := flagAsBoolOrString("patch-payload", "patch the payload from payload.js, payload.qml or the path specified")

		watchBoot := flagAsBoolOrString("watch-boot", "watch boot.js or the path specified for changes")
		watchPayload := flagAsBoolOrString("watch-payload", "watch payload.js, payload.qml or the path specified for changes")

		errHelp := flag.CommandLine.Parse(os.Args[1:])
		if errHelp != nil {
			if runtime.GOOS == "windows" {
				flag.PrintDefaults()

				widgets.NewQApplication(len(os.Args), os.Args)
				bb := new(bytes.Buffer)
				flag.CommandLine.SetOutput(bb)
				flag.PrintDefaults()

				help := bb.String()
				help = strings.Replace(help, "\n    \t", "\n", -1)
				help = strings.Replace(help, "  -", "\n-", -1)
				help = fmt.Sprintf("Usage of %s:\n", flag.CommandLine.Name()) + help

				if errHelp != flag.ErrHelp {
					help = errHelp.Error() + "\n\n" + strings.Repeat("-", 43) + "\n\n" + help
				}

				widgets.QMessageBox_Information(nil, "OK", help, widgets.QMessageBox__Ok, 0)
			}

			os.Exit(2)
		}

		isDev = *isDevRef
		skipBoot = *skipBootRef

		if flag.NArg() > 0 {
			fp := flag.Arg(0)
			out, err := ioutil.ReadFile(fp)
			if err != nil {
				println("failed to load the main payload " + err.Error())
			} else {
				softMainPayload = string(out)
				if strings.HasPrefix(softMainPayload, "#") {
					softMainPayload = "//" + softMainPayload
					os.Args = append(os.Args, "-watch-payload")
					watchPayload = &fp
				}
			}
		}

		if hasFlag("save-boot") {
			if len(bootPayload) != maxPayloadLen {
				out, err := unpackPayload(bootPayload)
				if err != nil {
					println("failed to decode the boot payload", err.Error())
				} else {
					fp := filepath.Join(filepath.Dir(os.Args[0]), "boot.js")
					if f := *saveBoot; f != "" {
						fp = f
					}
					err := ioutil.WriteFile(fp, out, 0644)
					if err != nil {
						println("failed to save the boot payload " + err.Error())
					}
				}
			} else {
				println("no boot payload found to be saved")
			}
		}

		if hasFlag("load-boot") || hasFlag("patch-boot") || hasFlag("watch-boot") {

			fp := filepath.Join(filepath.Dir(os.Args[0]), "boot.js")
			if f := *loadBoot; f != "" {
				fp = f
			} else if f = *patchBoot; f != "" {
				fp = f
			} else if f = *watchBoot; f != "" {
				fp = f
			}

			out, err := ioutil.ReadFile(fp)
			if err != nil {
				println("failed to load the boot payload " + err.Error())
			} else {
				softBootPayload = string(out)

				if hasFlag("patch-boot") {
					patchSelf(softBootPayload, true, true)
				}
			}
		}

		if *defaultBoot || *resetBoot {
			if file := NewQFile(":/qml/main.js"); file.Open(core.QIODevice__ReadOnly) {
				softBootPayload = file.ReadAll().ConstData()
				file.Close()
				file.DestroyQFile()

				if *resetBoot {
					patchSelf(softBootPayload, true, true)
				}
			}
		}

		if hasFlag("save-payload") {
			if len(mainPayload) != maxPayloadLen {
				out, err := unpackPayload(mainPayload)
				if err != nil {
					println("failed to decode the main payload", err.Error())
				} else {
					end := "js"
					if bytes.Contains(out, []byte("import QtQuick")) {
						end = "qml"
					}

					fp := filepath.Join(filepath.Dir(os.Args[0]), "payload."+end)
					if f := *savePayload; f != "" {
						fp = f
					}

					if !bytes.HasPrefix(out, []byte("//#!")) {
						abs, _ := filepath.Abs(os.Args[0])
						out = append([]byte("#!"+abs+"\n"), out...)
					}

					err := ioutil.WriteFile(fp, out, 0755)
					if err != nil {
						println("failed to save the main payload " + err.Error())
					}
				}
			} else {
				println("no main payload found to be saved")
			}
		}

		if hasFlag("load-payload") || hasFlag("patch-payload") || hasFlag("watch-payload") {
			end := "js"
			if _, err := os.Stat(filepath.Join(filepath.Dir(os.Args[0]), "payload."+end)); err != nil {
				end = "qml"
			}

			fp := filepath.Join(filepath.Dir(os.Args[0]), "payload."+end)
			if f := *loadPayload; f != "" {
				fp = f
			} else if f = *patchPayload; f != "" {
				fp = f
			} else if f = *watchPayload; f != "" {
				fp = f
			}

			out, err := ioutil.ReadFile(fp)
			if err != nil {
				println("failed to load the main payload " + err.Error())
			} else {
				softMainPayload = string(out)
				if strings.HasPrefix(softMainPayload, "#") {
					softMainPayload = "//" + softMainPayload
				}

				if hasFlag("patch-payload") {
					patchSelf(softMainPayload, true, false)
				}
			}
		}

		if !isDev && !(hasFlag("skip-boot") && skipBoot == false) {
			//TODO: support non bootloaded qml applications
			var payload []byte
			if softMainPayload != "" {
				payload = []byte(softMainPayload)
			} else {
				out, _ := unpackPayload(mainPayload)
				payload = out
			}
			skipBoot = !(bytes.Contains(payload, []byte("mport QtQuick")) && !bytes.Contains(payload, []byte("includes(\"mport QtQuick\")")))
		}

		if skipBoot {
			if softMainPayload != "" {
				softBootPayload = softMainPayload
			} else {
				out, _ := unpackPayload(mainPayload)
				softBootPayload = string(out)
			}
		}

		if hasFlag("watch-boot") {
			watchBootFunc(*watchBoot)
		}

		if hasFlag("watch-payload") {
			watchPayloadFunc(*watchPayload)
		}

		if hasFlag("save-boot") || hasFlag("save-payload") ||
			hasFlag("patch-boot") || hasFlag("patch-payload") ||
			*resetBoot {
			return
		}
	}
	parsedFlags = true
	if isDev {
		wasDev = true
	}

	//

	if !isTesting {
		app = widgets.NewQApplication(len(os.Args), os.Args)
	}
	mainThreadHelperInstance = NewMainThreadHelper(app)

	engine := qml.NewQJSEngine()
	engine.InstallExtensions(qml.QJSEngine__AllExtensions, engine.GlobalObject())
	engine.GlobalObject().SetProperty("isMain", engine.NewGoType(!isInsideBrowser))
	engine.GlobalObject().SetProperty("bootPayload", engine.NewGoType(""))
	engine.GlobalObject().SetProperty("bootPayloadDirty", engine.NewGoType(""))
	engine.GlobalObject().SetProperty("mainPayload", engine.NewGoType(""))
	engine.GlobalObject().SetProperty("isDev", engine.NewGoType(isDev))
	engine.GlobalObject().SetProperty("isInsideBrowser", engine.NewGoType(isInsideBrowser))
	engine.GlobalObject().SetProperty("isBrowserJSEngine", engine.NewGoType(isBrowserJSEngine))
	engine.GlobalObject().SetProperty("isWinXP", engine.NewGoType(isWinXP))
	engine.GlobalObject().SetProperty("isDeployed", engine.NewGoType(len(mainPayload) != maxPayloadLen || softMainPayload != ""))
	engine.GlobalObject().SetProperty("recursionCounter", engine.NewGoType(0))
	engine.GlobalObject().SetProperty("isTesting", engine.NewGoType(isTesting))
	engine.GlobalObject().SetProperty("isTestingVisible", engine.NewGoType(isTestingVisible))

	engine.NewGoType("qt.runSync", runSync)
	engine.NewGoType("qt.runAsync", runAsync)
	engine.NewGoType("qt.setInterval", setInterval)
	engine.NewGoType("qt.inspect", inspect)
	engine.NewGoType("qt.sleep", sleep)

	engine.NewGoType("main.restart", restart)
	engine.NewGoType("main.watchBoot", watchBootFunc)
	engine.NewGoType("main.watchPayload", watchPayloadFunc)
	engine.NewGoType("main.updateEngineReference", updateEngineReference)
	engine.NewGoType("main.deploy", deploy)
	engine.NewGoType("main.patchSelf", patchSelf)

	if len(mainPayload) != maxPayloadLen || softMainPayload != "" {
		if softMainPayload != "" {
			engine.GlobalObject().SetProperty("mainPayload", engine.NewGoType(softMainPayload))
		} else {
			out, _ := unpackPayload(mainPayload)
			engine.GlobalObject().SetProperty("mainPayload", engine.NewGoType(string(out)))
		}
	}

	var window *widgets.QMainWindow
	if file := NewQFile(":/qml/main.js"); file.Open(core.QIODevice__ReadOnly) {
		var e *qml.QJSValue
		if len(bootPayload) != maxPayloadLen || softBootPayload != "" {
			if softBootPayload != "" {
				engine.GlobalObject().SetProperty("bootPayload", engine.NewGoType(softBootPayload))
				e = engine.Evaluate(softBootPayload, "main.js", 0)
			} else {
				out, _ := unpackPayload(bootPayload)
				engine.GlobalObject().SetProperty("bootPayload", engine.NewGoType(string(out)))
				e = engine.Evaluate(string(out), "main.js", 0)
			}
		} else {
			e = engine.Evaluate(file.ReadAll().ConstData(), "main.js", 0)
		}
		if e.IsError() {
			if isInsideBrowser {
				println("QJSEngine error:", e.ToString())
			} else {
				widgets.QMessageBox_Critical(nil, "OK", e.ToString()+"\nFalling back to the default boot payload", widgets.QMessageBox__Ok, 0)
			}
			if softBootPayloadBackup != "" {
				engine.GlobalObject().SetProperty("bootPayload", engine.NewGoType(softBootPayloadBackup))
				engine.GlobalObject().SetProperty("bootPayloadDirty", engine.NewGoType(softBootPayload))
				softBootPayload = ""
				e = engine.Evaluate(softBootPayloadBackup, "main.js", 0)
			} else {
				engine.GlobalObject().SetProperty("bootPayload", engine.NewGoType(""))
				engine.GlobalObject().SetProperty("bootPayloadDirty", engine.NewGoType(softBootPayload))
				softBootPayload = ""
				e = engine.Evaluate(file.ReadAll().ConstData(), "main.js", 0)
			}
		} else {
			window = widgets.NewQMainWindowFromPointer(unsafe.Pointer(uintptr(e.ToVariant().ToULongLong(nil))))
		}
		file.Close()
		file.DestroyQFile()
	}

	if lastWindowGeo != nil {
		window.SetGeometry2(lastWindowGeo[0], lastWindowGeo[1], lastWindowGeo[2], lastWindowGeo[3])
	}

	window.ConnectMoveEvent(func(event *gui.QMoveEvent) {
		window.MoveEventDefault(event)
		lastWindowGeo = []int{window.Geometry().X(), window.Geometry().Y(), window.Geometry().Width(), window.Geometry().Height()}
	})

	window.ConnectResizeEvent(func(event *gui.QResizeEvent) {
		window.ResizeEventDefault(event)
		lastWindowGeo = []int{window.Geometry().X(), window.Geometry().Y(), window.Geometry().Width(), window.Geometry().Height()}
	})

	if skipBoot {
		window.Show()
	}

	if isTesting {
		for {
			select {
			case <-restartChan:
				goto broke
			default:
				core.QCoreApplication_ProcessEvents(core.QEventLoop__AllEvents)
			}
		}
	broke:
	} else {
		var doRestart bool
		go func() {
			<-restartChan
			doRestart = true
			app.Exit(0)
		}()

		ret := widgets.QApplication_Exec()
		if !doRestart {
			os.Exit(ret)
		}
	}

	window.DestroyQMainWindow()
	engine.CollectGarbage()
	engine.DestroyQJSEngine()

	if !isTesting {
		app.DestroyQApplication()
		runtime.GC()
		main()
	}
}
