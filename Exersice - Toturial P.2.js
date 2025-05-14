/*
for (let i = 0; i <= 8; ){
   
     i = i + 2 
    console.log(i);
}

//*
for (let i  = 0; i<= 10; i+= 2 ){
    console.log(i)
}

for (let i = 5; i >=0  ;i-- ){

console.log(i)
}

let i = 0

while (i <= 8){
    console.log(i)
    i = i + 2
}

let nums = 6;

while ( nums >=0){
    nums = nums - 1
    console.log(nums)
   
}

 
const myArray = [1,2,3];
const numsDumbled = [];

for (let i = 0; i <= myArray.length; i++){
const MyOwn = myArray[i]
numsDumbled.push(MyOwn + 1)
    

}
console.log(myArray)
console.log(numsDumbled)

const myArrays = [-2,-1,0,99];
const numsDumbleds = [];

for (let i = 0; i <= myArrays.length; i++){
const MyOwns = myArrays[i]
numsDumbleds.push(MyOwns + 1)
    

}
console.log(myArrays)
console.log(numsDumbleds)




const num=[]

   const array = [1,2,3]

for(let i = 0; i <= array.length; i++){
    const myOwn = array[i]
    num.push(myOwn + 1 )
}
console.log(num)
    


function addNum(array, num){
    const result = [];
    
    for (let i = 0; i < array.length; i++){
        result.push(array[i] + num)
    }
    return result;
}

console.log(addNum([1,2,3] , 2))
console.log(addNum([1,2,3],3))
console.log(addNum(-2,-1,0,99), 2)


*/
/*
function addNum(array, num){
    const result = [];
    
    for (let i = 0; i < array.length; i++){
        result.push(array[i] + num)
    }
    return result;
}

console.log(addNum([1,2,3] , 2))
console.log(addNum([1,2,3],3))
console.log(addNum(-2,-1,0,99), 2)

*/

/*
function addArrays(array1, array2){
    const result = [];
    
    for (let i = 0; i < array1.length; i++){
        result.push(array1[i] + array2[2])
    }
    return result;
}

console.log(addArrays([1,1,2],[1,1,3]))
console.log(addArrays([1,2,3],[4,5,6]))

*/

function countPositive(nums){
    let result = 0;
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > 0){
            result++;
        } 
        return result;
    }}
console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));
