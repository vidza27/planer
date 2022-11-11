inputEL = document.getElementById('input')
todosUL = document.getElementById('todos')

loadTodos()

function loadTodos(){
    todos = JSON.parse(loadTodos.getItem('todos'))
    if(todos !=undefined){
        todos.forEach(todo => AddTodo(todo.txt,todo.isCompleted))
    }
}
inputEL.addEventListener("keyup",function (event){
    if(event.code == 'Enter'){
        AddTodo(inputEL.value,false)
    }
})
function AddTodo(todoText,isCompleted){
    todoEl = document.createElement('li')
    todoEl.innerText = todoText
    if(isCompleted){
        todoEl.classList.add('completed')
    }
    todoEl.addEventListener('clikc', (e)=> {
        clickedElement = e.target
        clickedElement.classList.toggel('completed')
        //updateLocalStorage()
    })
    todoEl.addEventListener('contexmenu', (e)=> {
        e.preventDefult()
        clickedElement = e.target
        clickedElement.remove()
        //updateLocalStorage()
    })
    todosUl.appendChild(todoEL)
    inputEL.value = ''
    //updateLocalStorage()
}