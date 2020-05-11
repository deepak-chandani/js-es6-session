/** ------------------------------------------------------------ 
 * Examples
*/
function test1(){
  console.log(name);
  var name="Deepak";
}
test1();

function test2(){
  let name = "Deepak";
  const email="deepak.chandani@thepsi.com";

  name = "Deepak Chandani";
  email="deep.chandani@gmail.com";
}
test2();

/** ------------------------------------------------------------ 
 * Quiz
*/
function getDate () {
  var date = new Date()
  return date;
}

getDate()
console.log(date) // ?

function foo() {
  // what is returned?
  if (3 > 1) {
    const x = 34
    let y = 43
  }
  return {x: x, y: y}
}
  
foo();

function print(){
  const name;
  console.log(name);
}

function getUser() {
  const user = {
      name: 'Vinay'
  };
    
  user.name = 'Raman';

  return user;
}

function scoped() {
  // what is returned?
  let x = 33
  {
    const x = 123
  }
  return x
}

function temporalDeadZone() {
  console.log(myVar)
  console.log(myLet)
  console.log(myConst)

  var myVar = 'var'
  let myLet = 'let'
  const myConst = 'const'
  return {myVar: myVar, myLet: myLet, myConst: myConst}
}