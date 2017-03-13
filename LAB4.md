<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Connect your app to the Server
===

Create a backend server for your app and wire it up!

Minimum API:

* POST an image
* GET all images
* DELETE an image

You need to add CORS headers:

```
> npm i cors -S
```

```
const cors = require('cors')();

// ...

app.use(cors);

```


## Bonus

* PUT an image
* Create albums of images
  * Allow user to choose an album to view
  * User can add new albums

## Rubric *10pts*

Refactorings:
* Backend Server *3pts*
* Update app to use server *4pts*
* Code and Project Organization *2pts*