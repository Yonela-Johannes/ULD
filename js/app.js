window.addEventListener('load', function(){
    const loader = document.getElementById('loader');
    loader.className += " hidden"; 
});

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
