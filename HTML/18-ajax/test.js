var axios = require('axios')
const fs = require('fs');

var path = './db.json';
var dataInit = [
    {id: 1, content: 'Giat do'},
    {id: 2, content: 'Rua chen'},
    {id: 3, content: 'Nau com'},
];

function writaData(path, dataInit){
    console.log(dataInit);
    fs.writeFileSync(path, JSON.stringify(dataInit), {encoding: 'utf-8'})
    console.log('write sussec');
}

//writaData(path, dataInit);
const url = 'http://localhost:3000/todos';

console.log(axios.get(url).then(function(respone){
    console.log(respone.data);
}));