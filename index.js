function btnClicked () {
    const todoInput = document.getElementById('todoInput');
    const list = document.getElementById('list');
    const inputValue = todoInput.value;

    const newTodo = document.createElement('Li');
    const newContent = document.createTextNode(inputValue);

    console.log(newTodo);
    console.log(newContent);

    newTodo.appendChild(newContent);
    list.appendChild(newTodo);
    
}