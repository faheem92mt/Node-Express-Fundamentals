// process stays alive unless
// you Kill Process by -> Ctrl + C
// or by an unexpected error

setInterval(() => {
    console.log("Hello World!");
}, 2000);

console.log("I will run first!");