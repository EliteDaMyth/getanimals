# GetAnimals API
The getanimals NPM package is an API wrapper for get-animals api.

there are 5 animals.
-   dog
-   cat
-   fox
-   shiba
-   bird

# Usage 

You can use getanimals like this:
````
var getanimals = require('getanimals');

getanimals.dog() // you can use any other animal ex getanimals.cat() etc
  .then((url) => console.log(url))
  .catch((err) => console.error(err));
