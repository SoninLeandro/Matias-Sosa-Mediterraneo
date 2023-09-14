// JavaScript functions for modal functionality

let currentImageIndex = 0; // Track the index of the currently displayed image

function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = imageSrc;
    currentImageIndex = getImageIndex(imageSrc);
    updateNavigationButtons();
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function changeImage(step) {
    currentImageIndex += step;
    const images = document.querySelectorAll(".gallery img");

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const newImageSrc = images[currentImageIndex].src;
    const modalImage = document.getElementById("modalImage");
    modalImage.src = newImageSrc;
    updateNavigationButtons();
}

function getImageIndex(imageSrc) {
    const images = document.querySelectorAll(".gallery img");
    for (let i = 0; i < images.length; i++) {
        if (images[i].getAttribute("src") === imageSrc) {
            return i;
        }
    }
    return -1;
}

function updateNavigationButtons() {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    if (currentImageIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentImageIndex === document.querySelectorAll(".gallery img").length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Close modal when clicking outside of the image
window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initially, disable the navigation buttons
updateNavigationButtons();