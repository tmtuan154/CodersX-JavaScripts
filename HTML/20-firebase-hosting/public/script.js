var todoList = [
    'Giat do', 
    'nau com',
    'Rua chen'
];

const storageKey = 'todo-list';

function loadData1(){
    var todoListStorage = JSON.parse(localStorage.getItem(storageKey));
    var todoRender = [];
    if(todoListStorage !== null){
        todoRender = todoListStorage;
    }
    else{
        todoRender = todoList;
    }
    render(todoRender);
}

function render(todoList){
    const content = todoList.map(function(todo){
        return '<li>'+todo+'</li>';
    })
    var todoListTag = document.getElementById('todo-list');
    todoListTag.innerHTML = content.join('');
}

function addNewTodo1(){
    const todoInputTag = document.getElementById('txtTodo');
    const value = todoInputTag.value;
    var liTag = document.createElement('li');
    var liTextContent = document.createTextNode(value);
    liTag.appendChild(liTextContent);
    todoList.push(value);
    var todoListTag = document.getElementById('todo-list');
    todoListTag.appendChild(liTag);
    localStorage.setItem(storageKey, JSON.stringify(todoList));
    todoList1 = JSON.parse(localStorage.getItem(storageKey));
}