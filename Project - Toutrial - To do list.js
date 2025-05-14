const todoList = [
  


];

renderTodoList ();

function renderTodoList (){



let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate, select ,  } = todoObject;
    

    const html = `
    <div class="js-name"> &nbsp;&nbsp;${name}</div>
    <div class="js-due"> &nbsp;&nbsp; ${ dueDate}</div> 
   <div class="js-seelect" >  &nbsp;&nbsp;${select} </div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="delete-todo-button" >Delete</button>
     `;
    todoListHTML += html;
}



document.querySelector('.js-todo-list')
   .innerHTML = todoListHTML;
}


function addTodo(){
   const inputElement = document.querySelector('.js-name-input')
   const name = inputElement.value
   
const dateInputElement = document.querySelector(
   '.js-due-date-input');

   const dueDate = dateInputElement.value;

 

  

const selectInputElement = document.querySelector('.js-select');
const select = selectInputElement.value;


  

   todoList.push({
      //name: name,
   //  duteDate: dueDate
      name: name,
      dueDate:dueDate,
      select: select,
     

      });

 

   inputElement.value = ''; 

   renderTodoList ();

   
}


