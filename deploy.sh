#!/bin/bash
set -ev

OPWD=$PWD
NAME=entry


qtdeploy -docker build windows_64_static && rm -rf rcc* moc* vendor && git clean -f && git reset --hard && docker rmi therecipe/qt:windows_64_static
cd $OPWD/deploy/windows && zip -q -9 -r ../${NAME}_windows_amd64.zip * && cd $OPWD && rm -rf $OPWD/deploy/windows 

qtdeploy -docker build linux_static && rm -rf rcc* moc* vendor && git clean -f && git reset --hard && docker rmi therecipe/qt:linux_static
cd $OPWD/deploy/linux && zip -q -9 -r ../${NAME}_linux_amd64.zip * && cd $OPWD && rm -rf $OPWD/deploy/linux

cd $(go env GOPATH)/src/github.com/therecipe/qt/internal/docker/darwin && ./build_static.sh && cd $OPWD
qtdeploy -docker build darwin_static && rm -rf rcc* moc* vendor && git clean -f && git reset --hard && docker rmi therecipe/qt:darwin_static
cd $OPWD/deploy/darwin && zip -q -9 -r ../${NAME}_darwin_amd64.zip * && cd $OPWD && rm -rf $OPWD/deploy/darwin

rm $OPWD/qml/*.qml && qtdeploy -docker -tags=xp build windows_32_shared_xp && rm -rf rcc* moc* vendor && git clean -f && git reset --hard && docker rmi therecipe/qt:windows_32_shared_xp
cd $OPWD/deploy/windows && zip -q -9 -r ../${NAME}_windows_386_xp.zip * && cd $OPWD && rm -rf $OPWD/deploy/windows 

rm $OPWD/qml/*.qml && qtdeploy -docker build js && rm -rf rcc* moc* vendor && git clean -f && git reset --hard && docker rmi therecipe/qt:js
cd $OPWD/deploy/js && zip -q -9 -r ../${NAME}_js.zip * && cd $OPWD && rm -rf $OPWD/deploy/js 


mkdir $OPWD/deploy/darwin && cp $OPWD/deploy/*_amd64*.* $OPWD/deploy/darwin
cd $OPWD/deploy/darwin && find . -name "*.zip" -exec unzip {} \; && mv ${NAME} linux && mv ${NAME}.exe windows && zip -q -9 -r payload.zip linux windows
SRC=./${NAME}.app/Contents/MacOS/${NAME} && cat $SRC payload.zip > ${SRC}_new && zip -A ${SRC}_new && rm $SRC && bbe -e 's/_PLACEH_/'$(stat -f "%z" payload.zip)'/g' ${SRC}_new > $SRC && rm ${SRC}_new && chmod +x $SRC
ZNAME=$(ls *darwin*) && rm -r linux windows *.zip && zip -q -9 -r $ZNAME ${NAME}.app && rm -r ${NAME}.app

mkdir $OPWD/deploy/linux && cp $OPWD/deploy/*_amd64*.* $OPWD/deploy/linux
cd $OPWD/deploy/linux && find . -name "*.zip" -exec unzip {} \; && mv ${NAME}.exe windows && mv ${NAME}.app/Contents/MacOS/${NAME} darwin && zip -q -9 -r payload.zip windows darwin
SRC=./${NAME} && cat $SRC payload.zip > ${SRC}_new && zip -A ${SRC}_new && rm $SRC && bbe -e 's/_PLACEH_/'$(stat -f "%z" payload.zip)'/g' ${SRC}_new > $SRC && rm ${SRC}_new && chmod +x $SRC
ZNAME=$(ls *linux*) && rm -r windows darwin *.app *.zip && zip -q -9 -r $ZNAME ${NAME} && rm -r ${NAME}

mkdir $OPWD/deploy/windows && cp $OPWD/deploy/*_amd64*.* $OPWD/deploy/windows
cd $OPWD/deploy/windows && find . -name "*.zip" -exec unzip {} \; && mv ${NAME} linux && mv ${NAME}.app/Contents/MacOS/${NAME} darwin && zip -q -9 -r payload.zip linux darwin
SRC=./${NAME}.exe && cat $SRC payload.zip > ${SRC}_new && zip -A ${SRC}_new && rm $SRC && bbe -e 's/_PLACEH_/'$(stat -f "%z" payload.zip)'/g' ${SRC}_new > $SRC && rm ${SRC}_new && chmod +x $SRC
ZNAME=$(ls *windows*) && rm -r linux darwin *.app *.zip && zip -q -9 -r $ZNAME ${NAME}.exe && rm -r ${NAME}.exe


mkdir $OPWD/deploy/js && cp $OPWD/deploy/*.zip $OPWD/deploy/js
cd $OPWD/deploy/js && mv *darwin_amd64* darwin.zip && mv *linux_amd64* linux.zip && mv *windows_amd64* windows.zip && mv *windows_386* windowsxp.zip && mv *js* wasm.zip && unzip wasm.zip && zip -q -9 -r ${NAME}_wasm.zip * && mv ${NAME}_wasm.zip $OPWD/deploy/${NAME}_wasm.zip

cd $OPWD && rm -rf $OPWD/deploy/js $OPWD/deploy/${NAME}_js.zip $OPWD/deploy/*_amd64* && find $OPWD/deploy -name "*_amd64*" -exec mv {} $OPWD/deploy \;