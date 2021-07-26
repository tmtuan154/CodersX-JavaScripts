/* 
    Cách sử dụng module có sẳn trong node js
    Lên trang node.js vào doc đọc
    Các sử dụng var fs = requỉe('fs');
 */

var fs = require('fs');

var path = './bai30-node-build-in-module/note.txt';

// Ra dạng byte stream
var text = fs.readFileSync(path);
console.log(text);

// Muốn ra text ta truyền thêm vào tham số thứ hai: encoding
console.log('------Text-------');
var text = fs.readFileSync(path, {encoding: 'utf-8'});
console.log(text);

fs.writeFileSync(path, 'Xin chao minh tuan');

text = fs.readFileSync(path, {encoding: 'utf-8'});
console.log(text);