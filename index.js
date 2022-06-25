const todoInput = document.getElementById('todoInput');
const list = document.getElementById('list');

todoInput.addEventListener('keyup', onTextEnter);

function onTextEnter (event) {
  if (event.key != 'Enter' || event.keyCode != 13 || todoInput.value.trim() === "") {
    return;
  }

  const newContent = document.createTextNode(todoInput.value);

  // Label Creation
  const newLabel = document.createElement('label');
  newLabel.appendChild(newContent);

  // Checkbox creation
  const newCheckBox = document.createElement('input');
  newCheckBox.setAttribute('class', 'toggle');
  newCheckBox.setAttribute('type', 'checkbox');
  newCheckBox.addEventListener('change', onCompleteTodo);

  // Todo line creation
  const newTodo = document.createElement('li');
  newTodo.setAttribute('class', 'row');

  newTodo.appendChild(newCheckBox);
  newTodo.appendChild(newLabel);

  list.appendChild(newTodo);

  todoInput.value = '';
}

function onCompleteTodo(event) {
  if (event.srcElement.parentElement.classList.value.includes('completed')) {
    event.srcElement.parentElement.classList.remove('completed');
  } else {
    event.srcElement.parentElement.classList.add('completed');
  }
}

function toggleAll() {
  const listChildren = list.childNodes;
  const completedItems = [];

  for (let i = 0; i < listChildren.length; i++) {
    const completedItem = listChildren[i];

    if (completedItem.classList.value.includes('completed')) {
      completedItems.push(completedItem);
    }
  }

  if (completedItems.length === 0) {
    for (let i = 0; i < listChildren.length; i++) {
      listChildren[i].classList.add('completed');
      listChildren[i].childNodes[0].setAttribute('checked', true);
    }
  }
  else if (listChildren.length === completedItems.length) {
    for (let i = 0; i < listChildren.length; i++) {
      listChildren[i].classList.remove('completed');
      listChildren[i].childNodes[0].setAttribute('checked', false);
    }
  }
  else {
    for (let i = 0; i < listChildren.length; i++) {
      if (!listChildren[i].classList.value.includes('completed')) {
        listChildren[i].classList.add('completed');
        listChildren[i].childNodes[0].setAttribute('checked', true);
      }
    }
  }
}