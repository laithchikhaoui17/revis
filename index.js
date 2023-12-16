
/*****************************  1  ***********************/ Write a JavaScript function that will iterate from 0 to n. For each iteration,
 it will check if the current number is odd or even, and display a message on the screen.
 iterateAndLog(3); =>
 Sample Output :
 "0 is even"
 "1 is odd"
 "2 is even"
 
 function iterateAndLogWithFor(n){
    for (let i = 0; i <= n; i++) {
        if(n%2===0)
        return n+'iseven'
        
        
    }
    return n+'isodd'
}

function iterateAndLogWithWhile(n){
    let i = 0;
    while( i<=n ){
        i++;
    
    if (n%2===0)
        return n+'iseven'
    }


    return n+'isodd'
}
/*****************************  5  ***********************/
Using a for loop THEN a while loop
 Create a function that calculates the sum of a number as follows:
 factorial(3); => 3+2+1 = 6
 factorial(5); => 5+4+3+2+1 = 15

 function sumWithWhile(number){
    var x = 0
    for ( var i=1 ; i<=number ;i++){
        x=x+i
    }
    return x

}
/*****************************  6  ***********************/

 Using recursion
 Create a function that calculates the factorial of a number
 factorial(3); => 3*2*1 = 6
 factorial(5); => 5*4*3*2*1 = 120

  function factorialRecursively(number){
    var x = 1
    for ( var i=1 ; i<=number ;i++){
        x=x*i
    }
    return x

}