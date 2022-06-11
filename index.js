const todoInput = document.getElementById('todoInput');

todoInput.addEventListener('keyup', onTextEnter);

function onTextEnter (event) {
  if (event.key != 'Enter' || event.keyCode != 13 || todoInput.value.trim() === "") {
    return;
  }

  const list = document.getElementById('list');
  const inputValue = todoInput.value;

  const newTodo = document.createElement('li');
  
  newTodo.setAttribute('class', 'row');

  const newContent = document.createTextNode(inputValue);

  newTodo.appendChild(newContent);
  list.appendChild(newTodo);
}