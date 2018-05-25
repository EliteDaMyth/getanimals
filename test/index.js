var getanimals = require('../index.js');

getanimals.dog() // you can use any other animal ex getanimals.cat() etc
  .then((res) => console.log(res))
  .catch((err) => console.error(err));