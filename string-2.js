// ### Task-2: 
// Count how many times a string has the letter `a` or `A`


const str= "Apples and Bananas";
let count=0;

for (let i = 0 ; i <str.length; i++){
    if(str[i]==="a" || str[i]==="A"){
        count++
    }
}
console.log(`the letter "a" or "A" appears ${count} times in the string.`);