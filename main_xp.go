// +build xp

package main

import "github.com/therecipe/qt/core"

const isWinXP = true

func NewQFile(name string) *core.QFile { return core.NewQFile(name) }
