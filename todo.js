let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
let filterTodos
const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

let ol = document.getElementById("todo-list")
const populateTodos = () => {
    //get element to put todos in
    //loop through array of todos
    for (let index = 0; index < arrayOfTodos.length; index++) {
        const element = arrayOfTodos[index];
        let li = document.createElement("li")
        let text = document.createTextNode(arrayOfTodos[index].title)
        li.appendChild(text)
        ol.appendChild(li)

    }

}

const filteredTodos = () => {
    let userIdElement = document.getElementById("userId")
    let userIdvalue = userIdElement.value
    console.log('userIdElement', (userIdElement))
    console.log('userIdvalue', (userIdvalue))

    ol.innerHTML = null
    filterTodos = arrayOfTodos.filter((todo) => {
        console.log(todo)
        return todo.userId == userIdvalue
    })
    console.log('filteredtodos' , filterTodos)

    for (let index = 0; index < filterTodos.length; index++) {
        const element = filterTodos[index];
        let li = document.createElement("li")
        let text = document.createTextNode(filterTodos[index].title)
        li.appendChild(text)
        ol.appendChild(li)

    }

}






