# x-react-tooltip组件


## 简介

x-react-tooltip组件是基于react封装的，用于所有需要tooltip场景的使用

特点：
- 可以进行简单的tooltip使用
- header和body彻底分离，可以高度定制化，可以任意放入任何内容

## 安装

```
npm install --save-dev x-react-tooltip
```

## 使用

```
import {Tooltip} from 'x-react-tooltip'
```

```html
<Tooltip position="right">
    <Tooltip.Header>头部内容</Tooltip.Header>
    <Tooltip.Body>
        <div>需要hover展现的内容</div>
    </Tooltip.Body>
</Tooltip>
```

## 参数

- Tooltip

| 参数 | 类型 | 值 | 含义 |
| ------ | ------ | ------ | ------ |
| className | string | 无默认值 | 样式class |
| position | string | 'top','bottom','right','left'四个值中的一个，默认为'bottom' | tooltip内容展现的位置 |
| style | object | 无默认值 | 行内样式 |
| disabled | bool | 默认为false | 是否禁用 |
| arrow | bool | 默认为true | 是否展示箭头 |
| distance | number | 默认为15px | 表示header与body之间的距离(单位:px) |
| onMouseIn | function | 无默认值 | tooltip鼠标移入时的callback |
| onMouseOut | function | 无默认值 | tooltip鼠标移出时的callback |

- Tooltip.Header

| 参数 | 类型 | 值 | 含义 |
| ------ | ------ | ------ | ------ |
| style | object | 无默认值 | 行内样式 |


- Tooltip.Body

| 参数 | 类型 | 值 | 含义 |
| ------ | ------ | ------ | ------ |
| style | object | 无默认值 | 行内样式 |


## 开发

```
npm start
```

项目启动后直接访问 localhost:9001 即可看到展示页面

## 打包发布

```
npm run build

npm publish
```

## 版本信息

- v1.0.10
    
    功能：
    
    1.tooltip基本功能
    
    缺陷
    
    1.没有加上页面滚动后，自动重新定位body内容的功能，下一个版本迭代加上