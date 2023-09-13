const prompt =require("prompt-sync")({sigint:true})

function sum(num){
    if(num>0){
        return num+sum(num-1);
    }
    else
    {
        return num;
    }
}

const number=parseInt(prompt("enter positive number : "));
const result=sum(number);

console.log(`the sum is ${result}`);