## 一个将md文件转换成html文件的webpack插件
### 用法
```javascript
  plugins:[
    new MdToHtmlPlugin({
      template:resolve(__dirname,'test.md'),   //源md文件
      filename:'test.html'                     //生成的html文件
    })
  ]
```

