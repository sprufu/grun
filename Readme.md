生成器运行器
============

类似于[co](https://github.com/tj/co), 但是去除复杂的数据类型, 只支持常用的Promise

## 示例
```javascript
var run = require('../index'),
    fs = require('c2p/fs');

run(function * () {
    var files = yield fs.readdir('..');
    for(var file of files) {
        file = '../' + file;
        console.error(file);
        var stat = yield fs.stat(file);
        if (stat.isFile()) {
            var content = yield fs.readFile(file);
            console.log(content + '');
        }
    }
}).catch(function(err) {
    console.error(err);
});
```

## License

  MIT