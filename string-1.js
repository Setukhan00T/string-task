// ### Task-1:
// Count how many times a string has the letter `a`

const str = "banana";

let count = 0;

for (let i = 0; i < str.length; i++) {
    if(str[i]==='a'){
        count++;
    }
}
console.log(`the letter 'a' appears ${count} times in the string`);