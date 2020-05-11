/** ------------------------------------------------------------ 
 * Examples (Rest Usage)
*/
function extractRemaining(){  
  let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
  console.log(a,b, rest);
}

// extracting out remaining elements inside a separate array
const [a, b, ...rest] = [1, 2, 3, 4];

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}
myFun("one", "two", "three", "four", "five", "six");

// In React
function UserInfo({name, email, ...restOfTheProps}) {
  return (
    <div>
      {`name: ${name} email: ${email}`}
    </div>
  )
}


/** ------------------------------------------------------------ 
 * Examples (Spread syntax Usage scenarios)
*/

// pass arguments to any function 
const numbers = [1, 2, 3];
Math.max(...numbers);

const dateFields = [1970, 0, 1];  // 1 Jan 1970
const d = new Date(...dateFields);

// copy an array (immutable)
const arr = [1, 2, 3];
const arr2 = [...arr];

// add item to array (immutable)
[...arr, item] // arr.concat([item])

// object cloning (immutable)
let objClone = { ...obj };




//------------------------------------------------------------ 
/**
 * What I know
 */

function showUserInfo({username, email}){
  
}

// add item to array
[...arr, item] // arr.concat([item])

// merge two objects
function getConfig(override = {}) {
   const defaults = {};

   return {...defaults, ...override}
}

function booksReducer(state, action) {

}


//------------------------------------------------------------ 

/** ------------------------------------------------------------ 
 * Quiz
*/

// merge two arrays
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
console.log(mergedArray);

// Question: insert an item at the start of array


// Question: What will be output of following
function log(){
  const user = { name: 'Narendra' };
  const array = [...obj];
  console.log(array);
}

function showCompany(){
  const name = "PRATHAM";
  console.log([...name]); // Array.from()
}



