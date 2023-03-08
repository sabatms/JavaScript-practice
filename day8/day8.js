let data = "JavaScript and Java are similar in some ways but fundamentally different in some others The JavaScript language resembles Java but does not have Java s static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript In contrast to Java s compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods."

console.log(data);
console.log(data.length);
console.log(data[0]);
console.log(data.slice(0,10));
console.log(data.substring(10,4));
console.log(data.includes("JavaScript"));
console.log(data.toLowerCase(""));
console.log(data.toUpperCase(""));
console.log(data.search("JavaScript"));
//console.log(data.replace("JavaScript","php"));

let Firstname = "saba"
console.log(Firstname.startsWith("s"));
console.log(Firstname.endsWith("t"));
console.log(Firstname.endsWith("a"));


let number ="5"
console.log(number.padStart(4,0));
console.log(number.padEnd(4,0));