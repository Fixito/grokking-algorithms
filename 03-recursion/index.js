// Recursion
const countdown = (n) => {
  console.log(n);
  if (n <= 1) return;
  countdown(n - 1);
};

countdown(3);

// The call stack
const greet2 = (name) => {
  console.log(`How are you ${name}?`);
};

const bye = () => {
  console.log('Ok bye!');
};

const greet = (name) => {
  console.log(`Hello ${name}!`);
  greet2(name);
  console.log('Getting ready to say bye...');
  bye();
};

greet('John');

// The call stack with recursion
const factorial = (x) => {
  if (x === 1) return 1;
  return x * factorial(x - 1);
};

console.log(factorial(3));
