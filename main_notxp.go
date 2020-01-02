// +build !xp

package main

import "github.com/therecipe/qt/core"

const isWinXP = false

func NewQFile(name string) *core.QFile { return core.NewQFile2(name) }
