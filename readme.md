# GetAnimals API
The getanimals NPM package is an API wrapper for get-animals api.

there are 8 animals.
-   dog
-   cat
-   lion
-   tiger
-   panda
-   bird
-   penguin
-   duck

# Usage 

You can use getanimals like this:
````
var getanimals = require('getanimals');

getanimals.dog() // you can use any other animal ex getanimals.cat() etc
  .then((res) => console.log(res))
  .catch((err) => console.error(err));