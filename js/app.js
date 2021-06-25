
const slideshowImages = document.querySelectorAll('.slides');


const nextImageDelay = 2000;
let currentimageCounter = 0;

slideshowImages[currentimageCounter].style.display = "block";
setInterval(nextImage, nextImageDelay);
function nextImage() {
    slideshowImages[currentimageCounter].style.display = "none";
    currentimageCounter = (currentimageCounter + 1) % slideshowImages.length;
    slideshowImages[currentimageCounter].style.display = "block";
};

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/

// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookName, bookList) {
    let newList = [" "];
  let newBookList = bookName;
  newList = newBookList += bookList;
  console.log(newList);

  return newList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);