/*function frontBack(str){
    let n = str.slice(str.length-1) + str.substring(str.length-1,1) + str.slice(0,1)
    if(n == 1){
        c
    }
    
}
console.log(frontBack("sachin"))*/


//given a number n return the sum of all the consiqutive numbers till n



function consiqutiveSum(n){
    let sum = 0;
    for(let i = 0; i<=n; i++){
    
   sum += i;
    }
   



console.log("sum of n numbers",sum)

}
consiqutiveSum(100)

/*function consiqutiveSum(n){
   
    let sum=0;
    let start=0;
    let end =n;
    while(start<end){  //to control number of statements

        for(let i=start;i<=end;i++){
            sum = sum+i;
        
        if(sum == n){
            for(let j=start; j<=i; j++){ // to add next consecutive num so used i
                console.log(j );
            }
        }
        if(sum > n)
        {
            return false;
        }
        sum = 0;
        start++;

    }
    }
}
let n = 10;
consiqutiveSum(n)*/

