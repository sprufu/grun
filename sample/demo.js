/**
 * Created by jcode on 2015-09-02.
 */
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
