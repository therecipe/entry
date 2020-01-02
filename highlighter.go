//source: https://github.com/5k3105/GolangHighlighter

package main

import (
	"strings"

	"github.com/therecipe/qt/core"
	"github.com/therecipe/qt/gui"
)

type GolangHighlighter struct {
	gui.QSyntaxHighlighter
	allWords                []string
	highlightingRules       []HighlightingRule
	regexpQuotesAndComment  *core.QRegExp
	keywordFormat           *gui.QTextCharFormat
	identFormat             *gui.QTextCharFormat
	functionFormat          *gui.QTextCharFormat
	numberFormat            *gui.QTextCharFormat
	quotesFormat            *gui.QTextCharFormat
	singleLineCommentFormat *gui.QTextCharFormat
	multiLineCommentFormat  *gui.QTextCharFormat

	_ func() `constructor:"init"`
}

type HighlightingRule struct {
	pattern *core.QRegExp
	format  *gui.QTextCharFormat
}

const (
	STATE_BACKQUOTES         = 0x04
	STATE_SINGLELINE_COMMENT = 0x08
	STATE_MULTILINE_COMMENT  = 0x10
)

func (gh *GolangHighlighter) init() {

	gh.keywordFormat = gui.NewQTextCharFormat()
	gh.identFormat = gui.NewQTextCharFormat()
	gh.functionFormat = gui.NewQTextCharFormat()
	gh.numberFormat = gui.NewQTextCharFormat()
	gh.quotesFormat = gui.NewQTextCharFormat()
	gh.singleLineCommentFormat = gui.NewQTextCharFormat()
	gh.multiLineCommentFormat = gui.NewQTextCharFormat()

	gh.keywordFormat.SetForeground(gui.NewQBrush4(core.Qt__darkBlue, core.Qt__SolidPattern))
	gh.keywordFormat.SetFontWeight(int(gui.QFont__Bold))
	gh.identFormat.SetForeground(gui.NewQBrush4(core.Qt__darkBlue, core.Qt__SolidPattern))
	gh.functionFormat.SetForeground(gui.NewQBrush4(core.Qt__blue, core.Qt__SolidPattern))
	gh.numberFormat.SetForeground(gui.NewQBrush4(core.Qt__darkMagenta, core.Qt__SolidPattern))
	gh.quotesFormat.SetForeground(gui.NewQBrush4(core.Qt__darkGreen, core.Qt__SolidPattern))
	gh.singleLineCommentFormat.SetForeground(gui.NewQBrush4(core.Qt__darkCyan, core.Qt__SolidPattern))
	gh.multiLineCommentFormat.SetForeground(gui.NewQBrush4(core.Qt__darkCyan, core.Qt__SolidPattern))

	var words []string
	rule := HighlightingRule{}
	highlightingRules := []HighlightingRule{}

	//number
	rule.pattern = core.NewQRegExp2(`(\b|\.)([0-9]+|0[xX][0-9a-fA-F]+|0[0-7]+)(\.[0-9]+)?([eE][+-]?[0-9]+i?)?\b`, core.Qt__CaseSensitive, core.QRegExp__RegExp)
	rule.format = gh.numberFormat
	highlightingRules = append(highlightingRules, rule)

	//function
	rule.pattern = core.NewQRegExp2(`\b[a-zA-Z_][a-zA-Z0-9_]+\s*(?=\()`, core.Qt__CaseSensitive, core.QRegExp__RegExp)
	rule.format = gh.functionFormat
	highlightingRules = append(highlightingRules, rule)

	//indent
	indent := `bool|byte|complex64|complex128|float32|float64|int8|int16|int32|int64|string|uint8|uint16|uint32|uint64|` +
		`int|uint|uintptr|true|false|iota|nil|append|cap|close|closed|complex|copy|imag|len|make|new|panic|print|println|` +
		`real|recover`
	rule.pattern = core.NewQRegExp2(`\b(`+indent+`)\b`, core.Qt__CaseSensitive, core.QRegExp__RegExp)
	rule.format = gh.identFormat
	highlightingRules = append(highlightingRules, rule)

	words = strings.Split(indent, `|`)
	gh.allWords = append(gh.allWords, words...)

	//keyword
	keyword := `break|default|function|interface|select|case|defer|go|map|struct|chan|else|goto|package|switch|` +
		`const|fallthrough|if|range|type|continue|for|import|return|var`
	rule.pattern = core.NewQRegExp2(`\b(`+keyword+`)\b`, core.Qt__CaseSensitive, core.QRegExp__RegExp)
	rule.format = gh.keywordFormat
	highlightingRules = append(highlightingRules, rule)

	words = strings.Split(keyword, `|`)
	gh.allWords = append(gh.allWords, words...)

	gh.highlightingRules = highlightingRules

	//quotes and comment
	gh.regexpQuotesAndComment = core.NewQRegExp2("//|\\\"|'|`|/\\*", core.Qt__CaseSensitive, core.QRegExp__RegExp)

	gh.ConnectHighlightBlock(gh.highlightBlock)
}

func (gh *GolangHighlighter) highlightBlock(stext string) {

	text := core.NewQStringRef3(stext)
	startPos := 0
	endPos := text.Length()
	gh.SetCurrentBlockState(0)

	startPos, endPos, cont := gh.highlightPreBlock(text, startPos, endPos)

	if cont {
		return
	}

	//keyword and func
	for _, rule := range gh.highlightingRules {
		expression := core.NewQRegExp3(rule.pattern)
		index := expression.IndexIn(text.String(), startPos, core.QRegExp__CaretAtZero)
		for index >= 0 {
			length := expression.MatchedLength()
			gh.SetFormat2(index, length, rule.format.Foreground().Color()) //BUG?: SetFormat
			gh.allWords = append(gh.allWords, text.Mid(index, length).String())
			index = expression.IndexIn(text.String(), startPos+index+length, core.QRegExp__CaretAtZero)
		}
	}

	//quote and comment
	for true {
		startPos = gh.regexpQuotesAndComment.IndexIn(text.String(), startPos, core.QRegExp__CaretAtZero)

		if startPos == -1 {
			break
		}

		cap := gh.regexpQuotesAndComment.Cap(0)
		if (cap == "\"") || (cap == "'") || (cap == "`") {
			endPos = gh.findQuotesEndPos(text, startPos+1, cap)

			if endPos == -1 {
				//multiline
				gh.SetFormat2(startPos, text.Length()-startPos, gh.quotesFormat.Foreground().Color()) //BUG?: SetFormat
				if cap == "`" {
					gh.SetCurrentBlockState(STATE_BACKQUOTES)
				}
				return
			} else {
				endPos += 1
				gh.SetFormat2(startPos, endPos-startPos, gh.quotesFormat.Foreground().Color()) //BUG?: SetFormat
				startPos = endPos
			}
		} else if cap == "//" {
			gh.SetFormat2(startPos, text.Length()-startPos, gh.singleLineCommentFormat.Foreground().Color()) //BUG?: SetFormat
			if text.EndsWith("\\", core.Qt__CaseSensitive) {
				gh.SetCurrentBlockState(STATE_SINGLELINE_COMMENT)
			}
			return
		} else if cap == "/*" {
			endPos = text.IndexOf("*/", startPos+2, core.Qt__CaseSensitive)
			if endPos == -1 {
				//multiline
				gh.SetFormat2(startPos, text.Length()-startPos, gh.multiLineCommentFormat.Foreground().Color()) //BUG?: SetFormat
				gh.SetCurrentBlockState(STATE_MULTILINE_COMMENT)
				return
			} else {
				endPos += 2
				gh.SetFormat2(startPos, endPos-startPos, gh.multiLineCommentFormat.Foreground().Color()) //BUG?: SetFormat
				startPos = endPos
			}
		}
	}
}

func (gh *GolangHighlighter) highlightPreBlock(text *core.QStringRef, startPos int, endPos int) (int, int, bool) {

	state := gh.PreviousBlockState()

	if state == -1 {
		state = 0
	}

	if state == STATE_BACKQUOTES {
		endPos = gh.findQuotesEndPos(text, startPos, "`")

		if endPos == -1 {
			gh.SetFormat2(0, text.Length(), gh.quotesFormat.Foreground().Color()) //BUG?: SetFormat
			gh.SetCurrentBlockState(STATE_BACKQUOTES)
			return startPos, endPos, true
		} else {
			endPos += 1
			gh.SetFormat2(0, endPos-startPos, gh.quotesFormat.Foreground().Color()) //BUG?: SetFormat
			startPos = endPos
		}
	} else if state == STATE_MULTILINE_COMMENT {
		endPos = text.IndexOf("*/", startPos, core.Qt__CaseSensitive)
		if endPos == -1 {
			gh.SetFormat2(0, text.Length(), gh.multiLineCommentFormat.Foreground().Color()) //BUG?: SetFormat
			gh.SetCurrentBlockState(gh.PreviousBlockState())
			return startPos, endPos, true
		} else {
			endPos += 2
			gh.SetFormat2(0, endPos-startPos, gh.multiLineCommentFormat.Foreground().Color()) //BUG?: SetFormat
			startPos = endPos
		}
	} else if state == STATE_SINGLELINE_COMMENT {
		gh.SetFormat2(0, text.Length(), gh.singleLineCommentFormat.Foreground().Color()) //BUG?: SetFormat
		if text.EndsWith("\\", core.Qt__CaseSensitive) {
			gh.SetCurrentBlockState(STATE_SINGLELINE_COMMENT)
		}
		return startPos, endPos, true
	}
	return startPos, endPos, false
}

func (gh *GolangHighlighter) findQuotesEndPos(text *core.QStringRef, startPos int, endChar string) int {

	stext := text.String()

	for pos := startPos; pos < len(stext); pos++ {
		if string(stext[pos]) == endChar {
			return pos
		} else if string(stext[pos]) == `\` && endChar != "`" { /// ?
			pos++
		}
	}
	return -1
}
