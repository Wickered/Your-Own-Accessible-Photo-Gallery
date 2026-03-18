/*Name this external file gallery.js*/

// Run when page loads
window.onload = function() {
    console.log("Page loaded — adding tabindex to images.");
    addTabIndex();
};

// Function to add tabindex to all preview images
function addTabIndex() {
    let images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}

// Function called when mouse over or focus on an image
function upDate(previewPic) {
    console.log("upDate triggered — src:", previewPic.src, "alt:", previewPic.alt);

    // Update background image
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    // Update text to alt
    document.getElementById('image').innerHTML = previewPic.alt;
}

// Function called when mouse out or blur from an image
function unDo() {
    console.log("unDo triggered — resetting to original");

    // Reset background to empty URL (hardcoded)
    document.getElementById('image').style.backgroundImage = "url('')";

    // Reset text to original message (hardcoded)
    document.getElementById('image').innerHTML = "Hover or focus on an image below to display here.";
}
