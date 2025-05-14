const todoList = [];

renderTodoList ();

function renderTodoList (){



let todoListHTML = '';

todoList.forEach(function(todoObject, index){
  
   const { name, dueDate  } = todoObject;
   

   const html = `
   <div class="js-name"> &nbsp;&nbsp;${name}</div>
   <div  class="js-due"> &nbsp;&nbsp; ${ dueDate}</div> 
   <button 
   " class="delete-todo-button js-delete-todo-button" >Delete</button>
    `;
   todoListHTML += html;
});


/*
for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate  } = todoObject;
    

    const html = `
    <div class="js-name"> &nbsp;&nbsp;${name}</div>
    <div  class="js-due"> &nbsp;&nbsp; ${ dueDate}</div> 
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="delete-todo-button" >Delete</button>
     `;
    todoListHTML += html;
}
*/

document.querySelector('.js-todo-list')
   .innerHTML = todoListHTML;
   document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', ()=> {
         todoList.splice(index, 1);
         renderTodoList();
      })
   }

    );
}

document.querySelector('.js-add-todo-button').addEventListener(
   'click', ()=> {
      addTodo();
   }
)

function addTodo(){
   const inputElement = document.querySelector('.js-name-input')
   const name = inputElement.value
   
const dateInputElement = document.querySelector(
   '.js-due-date-input');

   const dueDate = dateInputElement.value;


   todoList.push({
      //name: name,
   //  duteDate: dueDate
      name,
      dueDate

});

 

   inputElement.value = ''; 

   renderTodoList ();

}