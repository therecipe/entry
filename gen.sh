#!/bin/bash

set -ev

go install -v -tags=no_env github.com/therecipe/qt/cmd/...
export QT_GEN_TSD=true
$(go env GOPATH)/bin/qtsetup generate

find ../qt -name "*d.ts" ! -name "android*" -exec mv {} ./tsd_full \;

qtminimal
find ../qt -name "*d.ts" ! -name "android*" -exec cp {} ./tsd_minimal \;
