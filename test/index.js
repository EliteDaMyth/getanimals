var getanimals = require('../index.js');

getanimals.dog() // you can use any other animal ex getanimals.cat() etc
  .then((url) => console.log(url))
  .catch((err) => console.error(err));