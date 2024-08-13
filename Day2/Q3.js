let num = 8;

let fact = 1;

if(num == 0 || num == 1 ) {
    fact=1;
}
else{
    for (var i=2; i<=num; i++) {
        fact *= i;
    }
}
console.log ("Factorial of "+num+" is: "+fact);