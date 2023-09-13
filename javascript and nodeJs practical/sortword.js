const prompt =require("prompt-sync")({sigint:true})

const string= prompt("enter your sentence: ");
const word =string.split(' ');

word.sort();

console.log("the sorted word are: ");
for(const element of word){
    console.log(element);
}