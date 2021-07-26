// npm initial -y : tạo ra file cấu hình cho project node

var readlineSync = require('readline-sync');

var id = readlineSync.question('Tai khoan: ');
var pass = readlineSync.question('Mat khau: ', {hideEchoBack: true});
var tuoi = readlineSync.question('Ban bao nhieu tuoi: ');

var info = {
    id: id,
    pass: pass,
    tuoi: parseInt(tuoi)
}

console.log(info);