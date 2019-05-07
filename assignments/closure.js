// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function keepTheSecret(){
  let theSecret = "I am a secret"
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

 // Return a function that when invoked increments and returns a counter variable.
// ==== Challenge 2: Create a counter function ====

//Not quite functional yet
const counter = () => {
  let n=0;
  n=+1;
  return n
};
let newCounter= counter();
// Example usage: const newCounter = counter();
console.log(newCounter); // 1
console.log(newCounter); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
