function render(){
    var todoList = document.getElementById('todoList');

}

function addNewItem(){
    var item = document.getElementById('todo');
    console.log(item);
    var text = item.value;
    console.log(text);
    if (text.length === 0){
        return alert('Vui long nhap todo');
    }
    var li = document.createElement('li');
    var node = document.createTextNode(text);
    li.appendChild(node);
    var todoList = document.getElementById('todoList');
    todoList.append(li);
    console.log(todoList);
    item.value = '';
}