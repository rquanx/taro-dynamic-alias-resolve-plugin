## 作用

```js
new DynamicAliasResolvePlugin({
  alias, // 要处理的alias关键字 
  dynamic, // 函数，接收当前路径，和alias，返回目标路径
  pattern // 要处理的文件正则校验
})
```

## 起因

针对monorepo下各项目使用'src/xx/xx'等路径import时，构建无法分别指向到各个子项目的src下
