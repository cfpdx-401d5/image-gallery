<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Cute Bunny Edit List
===

For this assignment, your going to expand your Image Gallery app by handling lists of images, 
and provide a way for users to add a new image. 

## Add Lists of images

First step is to refactor your components to display all the images in an images array. You can still have hard-coded
initial data of your image(s) from lab one, but you'll need to add an id (you could use `new Date()`) and put them into an array:

```js
const images = [{ 
  id: new Date()
  title: 'Cute Bunny',
  description: 'Isn\'t it fuzzy-wuzzy cutest thing you\'ve ever seen?',
  url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
}];
```

Given the variation in listing for the different views, you're probably better off 
creating different list view components for each view type (versus having a single list view
that toggles the display component). Something like:

```
ThumbnailList
ThumbnailDisplay
DetailList
DetailDisplay
GalleryList
GalleryDisplay
```

## Editing

* Create a component that allows the user to add new images to the list.
* Add a button to each image display to allow the user to delete the image from the list.

## Bonus

Allow the user to select (up to you how, an edit button, or click on image, etc) an existing image
and then edit it. You can either add an edit form component, resuse the add component, or offer inline editiong.

If you use a form, offer the user the option to cancel and don't update the list until the user clicks
Save or some similar action.

## Testing

Make sure you have snapshot tests for all your components

## Rubric *10pts*

- Change to lists of images *2pt*
- Add Image *3pt*
- Delete Image *3pt*
- Tests *1pts*
<<<<<<< HEAD
- Idomatic JavaScript and React *1pt*
=======
- Idomatic JavaScript and React *1pt*
>>>>>>> bhuneke
