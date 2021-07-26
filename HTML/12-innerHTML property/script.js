function loadTodoList() {
  var todo = ["Di choi", "Di tam", "DI an"];
  var content = todo.map(function (item) {
    return "<li>" + item + "</li>";
  });
  console.log(content.join(''));
  document.getElementById('todoList').innerHTML = content.join('');
}