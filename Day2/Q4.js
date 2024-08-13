function calculator(num1,num2,operator){
    let res;
    switch(operator){
        case '+':
            res=num1+num2;
            break;
        case '-':
            res=num1-num2;
            break;
        case '*':
            res=num1*num2;
            break;
        case '/':
            res=num1/num2;
            break;
        case '%':
            res=num1%num2;
            break;
        default:
            res="Invalid Operator";
    }
    return res;
}
let n1 = 8;
let n2 = 5;
let operator = '+';
let result = calculator(n1,n2,operator);
console.log ("Sum: " +result);
operator='-';
result = calculator (n1,n2,operator);
console.log ("Subtraction: "+result);
operator = '*';
result=calculator (n1,n2,operator);
console.log ("Multiplication: "+result);
operator = '/';
result = calculator (n1,n2,operator);
console.log ("Division: "+result);
operator  = '%';
result = calculator (n1,n2,operator);
console.log ("Remainder: "+result);