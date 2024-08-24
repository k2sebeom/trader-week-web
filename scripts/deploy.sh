#!/bin/bash
set -e

REMOTE_TARGET=$1
BUILD_DIR=dist
TAR_FILE="trader_web.tar.gz"

# Build Artifacts
rm -r $BUILD_DIR
yarn build
tar cvzf $TAR_FILE $BUILD_DIR

scp $TAR_FILE $REMOTE_TARGET:.
rm $TAR_FILE

ssh $REMOTE_TARGET << EOF
    tar xvzf $TAR_FILE
    sudo rm -rf /usr/share/nginx/html
    sudo mv dist /usr/share/nginx/html
    rm $TAR_FILE
EOF
