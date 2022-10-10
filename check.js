/*function checkSpam(str){
 const str1="viagra";
 const str2="xxx";
 
 if(str1=="viagra"){
    return true
 }

if(str2=="xxx"){
    return true;
}

else
    return false;

}
console.log(  checkSpam("str2"));*/


//function for returing sum of all even elements of an array

function summOfEven(array){

    let sum = 0;
     let even = array[0];

    for (let i=0;i <array.length; i++){
        if(array[i] % 2 == 0){
            even = array[i];
            sum = sum + even;
           
        }
    }
    console.log(sum)
}
summOfEven([2,4,6,5,9,2,4,6,8,1,6,4,6,4,8,8])
