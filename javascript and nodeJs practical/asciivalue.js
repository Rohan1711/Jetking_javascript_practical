const prompt =require("prompt-sync")({sigint:true})

const string= prompt("enter your character: ");

const result =string.charCodeAt(0);

console.log(`the ascii value is: ${result}`);