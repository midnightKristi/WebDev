const s = "Hello, world!";

// escape a string
let val = "The cow said, \"moo\".";
console.log(val);

val = s.length;
console.log(`${s} has ${val} characters`);

val = s.charAt(0);
console.log(`${s} has a first character of ${val}`);

// the last character of a string is always the length - 1
val = s.charAt(s.length-1);
console.log(`${s} has a last character of ${val}`);

val = s.indexOf("o");
console.log(`${s} has an "o" character at index ${val}`);

val = s.indexOf("o", 5);
console.log(`${s} has an "o" character after index 5 at index ${val}`);

val = s.indexOf("z");
console.log(`${s} does not have a "z" character so indexOf returns ${val}`);

val = s.indexOf("world");
console.log(`${s} has the string "world" starting at index ${val}`);

val = s.substring(1, 4);
console.log(`${s} has the following characters between index 1 and 4 ${val}`);

val = s.substring(1);
console.log(`${s} has the following characters after index 1 ${val}`);

val = s.substr(1, 4);
console.log(`${s} has the following characters starting at index 1 and taking the next 4 ${val}`);

val = s.substr(1);
console.log(`${s} has the following characters after index 1 ${val}`);

val = s.slice(1, 4);
console.log(`${s} has the following characters between index 1 and 4 ${val}`);

val = s.slice(-4);
console.log(`${s} has its last 4 characters of ${val}`);

val = s.toUpperCase();
console.log(`${s} in upper case is ${val}`);

val = s.toLowerCase();
console.log(`${s} in lower case is ${val}`);

val = s.replace("ll", "xx");
console.log(`${s} with ll replace with xx is ${val}`);