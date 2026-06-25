let a = 80;
let b = '80';
/**
 * a!==b
 * a!==b checks if a is not equal to b in both value and type. Since a is a number and b is a string, this condition will evaluate to true.
 *
 * a>b
 * a>=b
 * a<b
 * a<=b
 * a==b
 * a===b
 * a!=b
 * a!==b
 */

if (a != b) {
  console.log('a is not equal to b in both value and type');
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function add(a, b) {
  return a + b;
}

function userAuthenticate(username, password) {
  const validUsername = 'admin';
  const validPassword = 'password123';

  if (username === validUsername && password === validPassword) {
    console.log('Authentication successful!');
    return true;
  } else {
    console.log(
      'Authentication failed. Please check your username and password.',
    );
    return false;
  }
}

userAuthenticate('admin', 'password123'); // Authentication successful!

const username = prompt('Enter your username:');
document.write(`Welcome, ${username}!`);

//  html template to convert to react
// user authenticate from prompt
// displays days/months/age-gap print by number
