// ### Task-4: 

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.



const str = "Xerox is an example of Xylophone and x-ray.";

const replacedStr = str.replace(/x/g,"y").replace(/X/g,"Y");
console.log(replacedStr);
