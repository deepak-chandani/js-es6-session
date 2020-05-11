/** ------------------------------------------------------------ 
 * Examples
*/
function logUserInfo(user){
  const { name, email, location } = user;
  console.log("name: "+name, "email: "+email, "location: "+location);
}
const user = {
  name: 'Deepak Chandani',
  email: 'deepak.chandani@thepsi.com',
  location: 'Jaipur, Rajasthan'
};
logUserInfo(user);

// assigning property to renamed var while destructuring
const person = {
  n: 'Deepak Chandani',
  e: 'deepak.chandani@thepsi.com',
  l: 'Jaipur, Rajasthan'
};
const {
  n: name,
  e: email,
  l: location
} = person;
console.log(name,email,location);

// Array destructuring
const user = ['Tim Ferris', '@timferris', 'Eden, Utah'];
const name = user[0];
const handle = user[1];
const location = user[2];

// destructuring
const [ name, handle, location ] = user;

/** --------------------------------------------------------------------------------
* Common Usecases
*/

/* assigning to a new variable name while destructuring */
render () {
  const { component: Component, to , replace, ...rest } = this.props
  return <Component {...rest} onPress={this.handlePress}/>
}

/* array destructuring */
function getUserData (player) {
  return Promise.all([
    getProfile(player),
    getRepos(player)
  ]).then(function (data) {
    const profile = data[0];
    const repos = data[1];

    return {
      profile: profile,
      repos: repos
    }
  });

/* Rest in Object destructuring */
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
/**-------------------------------------------------------------------------------- */

/** ------------------------------------------------------------ 
 * Quiz
*/
function getAvgTemp() {
  // refactor with nested destructuring
  const weather = {
    location: 'Toronto',
    unit: 'Celsius',
    today: {max: 2.6, min: -6.3},
    tomorrow: {max: 3.2, min: -5.8},
  }
  const maxToday = weather.today.max
  const minToday = weather.today.min

  const maxTomorrow = weather.tomorrow.max
  const minTomorrow = weather.tomorrow.min

  return {
    max: (maxToday + maxTomorrow) / 2.0,
    min: (minToday + minTomorrow) / 2.0,
    unit: weather.unit,
  }
};
