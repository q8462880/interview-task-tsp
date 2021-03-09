# 面试任务 - tsp

## 要求

1、只能使用 react hook 方式

2、使用 svg，不可以对 svg 使用 ref，不可以用 js 操作 svg，例如：

```javascript
import {memo} from "react";

const BlueBlock = memo(() => {
    return (
        <svg>
            <rect className="rect" width="200" height="200" fill="red" />
            <text y={15}>This is a red block</text>
        </svg>
    );
})
```


## 问题背景

旅行商问题（最短路径问题）（英语：travelling salesman problem, TSP）是这样一个问题：给定一系列城市和每对城市之间的距离，求解访问每一座城市一次并回到起始城市的最短回路。它是组合优化中的一个NP困难问题，在运筹学和理论计算机科学中非常重要。

[维基百科](https://zh.wikipedia.org/wiki/%E6%97%85%E8%A1%8C%E6%8E%A8%E9%94%80%E5%91%98%E9%97%AE%E9%A2%98)

## UI（参考）

![](https://upload.wikimedia.org/wikipedia/commons/2/2b/Bruteforce.gif)

(样式不必与此图一模一样，内容相同即可)

## 任务描述

1. 有两个面板
2. 左边面板可以使用鼠标设置城市
3. 点击开始运算按钮后，左边面板会显示每次计算的方案，右边面板会显示已知最优方案
4. 左边面板上方会显示这个是第几个方案，和这个方案的路程总长度
5. 右边面板上方会显示当前最优方案的路程总长度

## 加分项(可做可不做)

编写多种算法来实现这个功能，而且可以让使用者选择使用哪个算法进行运算，ui 可以使用 radio。
