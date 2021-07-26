var readlineSync = require('readline-sync');
var fs = require('fs')


function btap(){
    var path = './data.json';
    var data = readlineSync.readlineSync(path);
    console.log(data);
}

btap()