#!/bin/bash

set -ev

qtrcc && qtmoc && qtminimal
go build -ldflags="-w" -tags=minimal -o entry && ./entry