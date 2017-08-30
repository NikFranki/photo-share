#! /bin/bash
echo STEP-0: 拉取子模块
git submodule init
git submodule update --remote

echo STEP-1: 安装依赖模块...
mkdir -p ~/.gitlab-ci/npm/node_modules
ln -s ~/.gitlab-ci/npm/node_modules
npm install

echo STEP-2: 编译，生成 js 文件
webpack --optimize-minimize
