### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
callbacks, promises, async/await, event looping, third-party.

- What is a Promise?
is an object representing the eventual completion or failure of an asynchronous operation. It allows to attached handlers for handling the operation's success('.then') or failure ('.catch')

- What are the differences between an async function and a regular function?
return value an async function always returns a Promise, whereas a regular function returns a value or undefined, await inside an async function you can use the waait keyword to pause execution until Promise is resolved, making asynchronous coe easier to write and read.Error handling errors in async functions can be caught using try..catch which wirks with the await keyword to handle rejected Promoses

- What is the difference between Node.js and Express.js?
Node.js a runtime enviroment that allows you to run JavaScript on the server side, provides core modules for handling files systems, networking and other essential server side functions
Express.js a web app framework built on tp of Node,js, it simplifies the process of building web servers and applications by providing robust features for routing, middleware and HTTP utility methods.

- What is the error-first callback pattern?

- What is middleware?
the error-first callback pattern  is a convention in NOde.js for handling asynchronous operations. In this pattern, the first argument of callback function is an error object(or 'null' if no error occurred), and the subsequesnt arguments are the results of the operation.

- What does the `next` function do?
the next function is used in Express.js middleware to pass control to the next middleware function in the sack. It allows for a chain of middleware functions to be execited in sequence. If a middleware function does not call 'next()', the request will be left hanging and the subsequent middleware functions will not be excecuted.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
The await statement are excecuted sequentially, which means each request waits for the previous one to complete before starting.The return array has the order [elite, matt, joel], but the order of excecution implies [elie, joel, matt]. There's no erorr handling. If any of ther '$.getJSON' calls fail, the whole function will fail.The variable names could be more descriptive like elieProfile to clarify that they contain user profile info. The URLs have repetitive parts .
