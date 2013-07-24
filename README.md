JSON
====

为不支持JSON解析的早期浏览器提供解析/反解析json字符串的javascript组件

stringify方法支持深度转换

## 使用方法
```javascript
//直接按照标准的JSON操作来就行

JSON.parse(str); //解析json字串

JSON.stringify(obj); //将变量转为json字串
JSON.stringify({arr:[1,2,true,null,undefined,NaN,{deep:{a:'b',b:'c','c':[4,5,6]}}]});
//上面将输出 '{"arr":[1,2,true,null,null,null,{"deep":{"a":"b","b":"c","c":[4,5,6]}}]}'
````
