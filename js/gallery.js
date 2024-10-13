function initializeGallery() {
    // Log message to confirm the event is triggered
    console.log("Gallery initialized and loaded.");

    // Select all images with the class 'preview'
    const images = document.querySelectorAll('.preview');

    // Loop through each image to set the tabindex and add event listeners
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0'); // Make images focusable via keyboard
        images[i].addEventListener('focus', function() { upDate(this); });
        images[i].addEventListener('blur', function() { unDo(); });
    }
}

// Function to update the main image display when hovering or focusing on an image
function upDate(previewPic) {
    const image = document.getElementById('image');
    image.style.backgroundImage = "url(" + previewPic.src + ")";
    image.innerHTML = previewPic.alt;

    console.log("Image updated: " + previewPic.alt);
}

// Function to revert the main image display when mouse leaves or focus is lost
function unDo() {
    const image = document.getElementById('image');
    image.style.backgroundImage = "";
    image.innerHTML = "Hover over an image below to display here.";
    
    console.log("Image reverted.");
}
