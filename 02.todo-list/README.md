# TODO LIST APP

UI Framework: [MATERIAL-UI](https://material-ui.com/)

## 创建项目 TODO LIST

使用 `create-react-app todo-list` 创建新的React项目

## 安装Material-UI

### 使用 `yarn add @material-ui/core` 安装核心库

在App中添加引用，并添加 `Hello World` 按钮

``` jsx
import React from 'react';
import { Button } from '@material-ui/core';

......

function App() {
    ......
    <Button variant="contained" color="primary">
        Hello World
    </Button>
}

......

```

![hello-world-button](https://github.com/leedaihung/react-notes/blob/main/01.todo-list/screen-capture/00.hello-world-button.png)

### 使用 `yarn add fontsource-roboto` 安装 Roboto 字体

Material-UI是基于 Roboto 字体设置的，官方推荐使用改字体达到最佳效果  
在App中添加引用

``` jsx
......

import 'fontsource-roboto';

......
```

### 使用 `yarn add @material-ui/icons` 和 `yarn add material-design-icons` 安装 [Material Icon](https://fonts.google.com/icons?selected=Material+Icons)

在App中添加引用，并把Face Icon添加到sample页面中

``` jsx
......

import Icon from '@material-ui/core/Icon';
import 'material-design-icons/iconfont/material-icons.css'

......

function App() {
    ......

    <Button variant="contained" color="primary">
        <Icon>face</Icon>
        Hello World
    </Button>

    ......

}

......
```

![icon-sample](https://github.com/leedaihung/react-notes/blob/main/01.todo-list/screen-capture/01.icon-sample.png)
