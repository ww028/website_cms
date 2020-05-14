react 后台管理系统模板
### `cd ./website_cms`
### `npm i`
### `npm start`
### `访问 http://localhost:3000/`

## [Step 1](https://github.com/ww028/website_cms/tree/step_1)
首先安装了 sass-loader, 可以使用sass, scss。
然后稍微修改一下项目结构
现在我们只关心src 目录就可以了
+ pages 页面
    + App.js 入口页面
+ style 样式文件
    + base.scss
+ temp 页面模板，仅用于开发时复制、粘贴
+ index.js 入口配置文件

## [Step 2](https://github.com/ww028/website_cms/tree/step_2)
实现页面的路由切换
+ components 组件
    + MyHeader 页面头部组件
+ router 路由配置文件
    + index.js 路由入口
+ store redux 状态管理工具
    + index.js redux 入口文件
