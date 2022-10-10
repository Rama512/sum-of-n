/*function extactValue(str){
let str1="the book cost of java script is $12o";
let reg=/\d+g/;
let result=str.match(reg);
return result;
}
console.log(extactValue(str1));*/


// index of an array

/*function indexOfArray(){

const a = [53,5,35,3564,45,4,8];


let index = a.indexOf(8);

console.log(index)
}

indexOfArray()*/


//Given an array write a function that returns the index of smallest element of the array.



function smallestElement(array){

let n = array.length;

let s = array[0]


for(let i=0; i<n; i++){
    
if( array[i]  <= s){
  s = array[i];
}

}
for(i=0;i<=n;i++){
    if(s==array[i]){
        console.log(i)
    }

}

}

smallestElement([1,2,3,-5,2,-15,3,-4454545])














