var todoList = [
    'Giat do', 
    'nau com',
    'Rua chen'
];

var todoList1 = [];

const storageKey = 'todo-list';

/*
    Trường hợp localStoảge không tồn lại sẽ lấy biến todoList bỏ lên
 */
function loadData(){
    var todoListStorage = JSON.parse(localStorage.getItem(storageKey));
    console.log(typeof(todoListStorage));
    console.log(todoListStorage);
    if(todoListStorage.length !==0){
        todoList = todoListStorage;
        return render(todoList);
    }
    render(todoList);
}

/*
    Trường hợp localStorage không tồn tại thì mảng todo là rỗng
 */
function loadData1(){
    var todoListStorage = JSON.parse(localStorage.getItem(storageKey));
    var todoRender = [];
    if(todoListStorage !== null){
        todoRender = todoListStorage;
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

function addNewTodo(){
    const todoInputTag = document.getElementById('txtTodo');
    const value = todoInputTag.value;
    var liTag = document.createElement('li');
    var liTextContent = document.createTextNode(value);
    liTag.appendChild(liTextContent);
    todoList.push(value);
    var todoListTag = document.getElementById('todo-list');
    todoListTag.appendChild(liTag);
    localStorage.setItem(storageKey, JSON.stringify(todoList));
    todoList = JSON.parse(localStorage.getItem(storageKey));
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
    localStorage.setItem(storageKey, JSON.stringify(todoList1));
    todoList1 = JSON.parse(localStorage.getItem(storageKey));
}