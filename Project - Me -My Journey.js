const myJourney = [];

renderTodoList();


function renderTodoList(){


    let todoListHTML = '';

    for(let i = 0; i < myJourney.length; i++){
        const todo = myJourney[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;

    }

    console.log(todoListHTML);

document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}


function createIt (){
const outPut  = document.querySelector('.js-input')
const name = outPut.value

myJourney.push(name)

console.log(myJourney)

outPut.value = '';

renderTodoList();

}

