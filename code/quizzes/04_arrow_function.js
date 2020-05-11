/** ------------------------------------------------------------ 
 * Examples
*/
function add(x, y){
  return x+y;
}

/*
* if there is only one line then curly braces & return statement can also be omitted 
("concise body" - one line function )
*/
const add = (x, y) => {
    return x + y; 
}


/** ------------------------------------------------------------ 
 * Practical scenario
 * 
*/
// refactor following fn to use arrow function
function getTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      return response.json()
    })
    .then((todos) => {
      return todos.filter((item) => {
        return item.completed
      })
    })
}




/** ------------------------------------------------------------ 
 * Quiz
*/
// Rewrite following with arrow function
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

// refactor to an arrow function
function getObject(name) {
  return {name}
}

// refactor to an arrow function
function curryAddition(a) {
  return function(b) {
    return a + b;
  }
}