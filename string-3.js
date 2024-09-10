// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

const str = "Education is a powerful tool.";
const vowels = new Set();

for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        vowels.add(letter);
    }
}

if (vowels.size === 5) {
    console.log("The string contains all the vowels (a, e, i, o, u).");
} else {
    console.log("The string does not contain all the vowels.");
}
