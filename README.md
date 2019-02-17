# 概述

* 本项目开发环境采用 [NodeJS](http://nodejs.org) 搭建，你的电脑上必须先要安装 NodeJS。
* [NPM](https://www.npmjs.org/) 是 NodeJS 的模块管理系统，本项目所有依赖的第三方模块都通过 NPM 来进行安装。

# 安装开发环境

1. 安装 NodeJS

* MAC

方法1: 推荐通过 `brew install node` 命令来安装

方法2: 下载 [NodeJS 的 Mac 安装包](https://nodejs.org/dist/v8.9.3/node-v8.9.3.pkg)

* Windows

64 位: https://nodejs.org/dist/v8.9.3/node-v8.9.3-x86.msi

32 位: https://nodejs.org/dist/v8.9.3/node-v8.9.3-x64.msi

* Linux

Linux 下的安装方法有待补充。

* 通常安装完 NodeJS 就意味着已经安装了 NPM。

2. 准备开发环境

* 在源代码目录执行以下命令

`npm install`

将会自动安装所有依赖的第三方开发包。注意只有首次运行这份源代码时才需要执行这个命令。

# 运行

要构建项目，首先需要执行下列命令

`npm start`

该命令会自动打包项目，每当监测到文件发生变化时。

注意 webpack -w 命令的输出结果，如果是一片绿色，则说明所有文件都已经被正确生成了。


# 开发

(待完善)

* 修改源代码
* 观察 webpack -w 界面是否正确生成了更新的文件
* 用浏览器查看运行效果，调试你的代码

# 效果

![image](http://qiniu.sevenyuan.cn/show.gif)
