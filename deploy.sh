#!/bin/bash

DEPLOY_CODE=$1

if [ "$DEPLOY_CODE" = "" ]; then
    echo "missing deploy code, build stopped!"
    exit 1
fi

SED="sed -i"
if [ `uname` == "Darwin" ]; then
    SED='sed -i ""'
fi

# import env
source "./deploy/${DEPLOY_CODE}/env.sh"

# 打包node-canvas
npm install -g node-gyp

cd lib/node-canvas

npm install

#npm run prebenchmark

cd ../../

# 部署项目
ENV_NAME=$ENV_NAME ACCESSKEYID=$ACCESSKEYID SECRETACCESSKEY=$SECRETACCESSKEY REGION=$REGION BUCKET=$BUCKET npm run deploy