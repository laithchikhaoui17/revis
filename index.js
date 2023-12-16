
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