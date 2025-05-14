/*
const buttonElement = document.querySelector('.js-button');

const eventListener =()=> {
    console.log('Hi, my name is Muaadh Alsway.')
}

buttonElement.addEventListener('click', 
eventListener
 )
buttonElement.removeEventListener('click',
    eventListener
)

buttonElement.addEventListener('click', ()=> {
    console.log('I have a good family')
})
/*
function greeting(){
    console.log('hello');
}

greeting();

const num = 2;

const function1= function greeting(){
    console.log('hello2')
};


console.log(typeof function1);
function1();

const function2 = function(){
        console.log('hello2')
    };


const object1 = {
    num: 2,
    //fun: function greeting(){
        fun:function(){
        console.log('hello3');
    }
};

object1.fun();

function dispaly(param){
    console.log(param)
}

dispaly(2);

function run(param){

}
run(function(){
    console.log()
})


setTimeout(function(){
    console.log('timeOut')
    console.log('because this reason Iam out')
    console.log('I do not like you');
}, 1000)

console.log('next line')


[
    'make dinner',
    'wash dishes',
    'watch yutuobe'
].forEach(function(value, index) {
    if (value=== 'wash dishes'){
        return
    }
    console.log(index)
    console.log(value);
});


const regularFunction = function (param){
    console.log('hello');
};


const arrowFunction = (param) => {
    console.log('Hi, I am muaadh alsway')
}

arrowFunction();

const oneParam = param => {
console.log(param + 2)
}

oneParam(3);

const oneLine = () => 2 + 3;

console.log(oneLine());

const object2 = {

}
*/


console.log([1,-3,5].filter((value,index ) => {
    return true;
}));

console.log([1,-3,5].filter((value,index ) => {
    if(value >= 0) {
        return true;
    }else {
        return false;
    }
  }));
  //shorthand for above this code //
  console.log([1,-3,5].filter((value,index ) => {
 return value >= 0;
  })); 
console.log([1,-3,5].filter((value,index ) => {
   
    return false ;
}));


console.log([1,1,3].map((value, index) => {
    return value + 10;
}))
console.log([1,1,3].map((value, index) => {
    return  10;
}))
console.log([1,1,3].map((value, index) => {
    return value*2;
}))
console.log([1,1,3].map (value =>  value*2));