[DEMO LINK](https://therecipe.github.io/entry)

[BINARIES](https://github.com/therecipe/entry/releases/tag/v0.0.0)

---

Introduction
------------

`entry` is an application created to allow rapid develop- and deployments of Qt based JavaScript applications, by leveraging the Qt binding for JavaScript/Go provided by [therecipe/qt](https://github.com/therecipe/qt). It also acts as a showcase for these technologies and is the successor of the [widgets_playground](https://github.com/therecipe/widgets_playground), which showcased the browser engine based Qt binding for JavaScript, as well as the "js" and "wasm" targets in general. This showcase now builds upon the `widgets_playground` showcase and extends it about the third binding for Qt provided by `therecipe/qt`, namely the `QJSEngine` based one which is now available for all targets supported by `therecipe/qt` if the used Qt version is >= 5.6

`entry` is also meant to lower the barrier to entry into the Qt ecosystem and was created to provide a more performant and traditional alternative to the current web based desktop/mobile development solutions in general. To lower the barrier to entry, the application develop- and deployments processes where simplified and it's now possible to instantly deploy to Windows, macOS and Linux with just the click of a button. (The web version also supports deployments to various additional targets). The development process was in so far simplified, that you can let `entry` live reload your application after source code changes. (This feature currently only supports state-less and local reloads, but it should be possible to extend it to state-full and remote reloads in the future as well). Beside the live reload feature, there are also TypeScript definition files provided, which can be used to type check your JavaScript code. The [tsd_full](https://github.com/therecipe/entry/tree/master/tsd_full) dir contains the full JavaScript API available if you build `entry` yourself, while the [tsd_minimal](https://github.com/therecipe/entry/tree/master/tsd_minimal) dir contains only the API that is available for the pre-built binaries at runtime.

`entry` itself is written mainly in JavaScript, but certain parts are still written in Go to showcase the interoperability between Go and JavaScript and how to fallback into Go code from JavaScript when using `therecipe/qt`. The JavaScript API of the Qt binding used by `entry` was modeled to match the Qt Go API of `therecipe/qt` as close as possible, which opens up the possibility to gradually move Qt JavaScript code to Qt Go code without much hassle.

On desktop/mobile systems, the `QJSEngine` is used to evaluate the JavaScript code, while on the web the JavaScript engine of your browser is used.

Some smaller standalone examples making use the of new desktop/mobile JavaScript binding, can also be found [here](https://github.com/therecipe/examples/tree/master/js).

To build this application, follow the general installation instructions for `therecipe/qt` which can be found [here](https://github.com/therecipe/qt/wiki/Installation) and also install [bbe](https://linux.die.net/man/1/bbe). Then either run qtdeploy as usual, or run the `deploy.sh` script to build `entry` for various targets.

Status
------

Almost all Qt functions and classes are accessible from JavaScript and you should be able to find everything you need to build fully featured Qt applications in JavaScript, the feature-set shown in the in-build examples (and that is available at runtime) therefor only shows a small portion of all the features available. The same is true for the target platforms shown, since every target provided by `therecipe/qt` that supports Qt >= 5.6 should be supported, all of the targets listed [here](https://github.com/therecipe/qt#deployment-targets) and all of the docker target images listed [here](https://hub.docker.com/r/therecipe/qt/tags) should be supported as well. Which for example includes the Windows XP, Raspberry Pi (and similar "embedded" targets), as well as various Linux target variants and also the Android, iOS and SailfishOS target variants.

Some of the features used in this showcase will also find their way back into `therecipe/qt` in the future, such as the JS/QML live reloading feature. Another feature which was planned, but couldn't be finished in a timely manner was a declarative Qt Widgets module for QML, which will be added in the future as well.

Beside the general ported examples, there were also 5 of the [7GUIs](https://eugenkiss.github.io/7guis/) tasks implemented and can be found [here](https://github.com/therecipe/entry/tree/master/qml/7guis), the two missing tasks might be added in the future as well.

Info
----

For general information about `therecipe/qt`, checkout: https://github.com/therecipe/qt

The Qt API Docs can be found here: https://doc.qt.io/qt-5/classes.html

If you have questions, join our Slack channel [#qt-binding](https://gophers.slack.com/messages/qt-binding/details) ([invite yourself here](https://invite.slack.golangbridge.org)\)

Usage
-----

`entry` recognizes the following flags

```
  -default-boot
    	start the application with the default boot payload
  -edit
    	enable dev console (default true)
  -load-boot string
    	load the boot payload from boot.js or the path specified
  -load-payload string
    	load the payload from payload.js, payload.qml or the path specified
  -patch-boot string
    	patch the boot payload from boot.js or the path specified
  -patch-payload string
    	patch the payload from payload.js, payload.qml or the path specified
  -reset-boot
    	resets the boot payload to a safe default
  -save-boot string
    	save the boot payload to boot.js or the path specified
  -save-payload string
    	save the payload to payload.js, payload.qml or the path specified
  -skip-boot
    	skip the boot payload and load the main payload instead (works only with *.js files atm)
  -watch-boot string
    	watch boot.js or the path specified for changes
  -watch-payload string
    	watch payload.js, payload.qml or the path specified for changes
```

How do I change the icon of my application?
-------------------------------------------

For Windows applications use [ResEdit](http://www.resedit.net) or the [Resource Hacker](http://www.angusj.com/resourcehacker/). For macOS applications create an `*.icns` in the `Contents/Resources` dir of your `*.app` and edit the `Info.plist` similar to how it's explained [here](https://github.com/therecipe/qt/wiki/Setting-the-Application-Icon#macos). For Linux applications take a look [here](https://wiki.archlinux.org/index.php/Desktop_entries).

(This will be improved in the future)
