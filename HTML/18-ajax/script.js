var axios = require('axios');

const url = 'http://localhost:3000/todos';

function loadData(){
    axios.get(url).then(function(res){
        //render(res.data);
        console.log(res.data);
    })
}

function render(data){
    const content = data.map(function(item){
        return '<li>'+item.content+'</li>';
    })
    var todoListTag = document.getElementById('todo-list');
    todoListTag.innerHTML = content.join('');
}

console.log(axios.get(url).then(function(respone){
    console.log(respone.data);
}));