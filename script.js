const hamburger = document.querySelector('.hamburger');
const navOverlay = document.querySelector('.nav-overlay');
const body = document.body;

// Toggle the menu and hamburger state
function toggleMenu() {
    navOverlay.classList.toggle('active'); // Show overlay menu
    hamburger.classList.toggle('active');  // Change hamburger to X
    body.classList.toggle('active-menu');  // Disable scrolling and interaction with the body
}

// Close the menu on screen resize if it's larger than 768px
function handleResize() {
    if (window.innerWidth >= 769) {
        navOverlay.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('active-menu');
    }
}

// Event listeners for the hamburger icon
hamburger.addEventListener('click', toggleMenu);

// Event listener for window resize
window.addEventListener('resize', handleResize);





















const words = ["Play", "Game", "Buy", "Sell"];
let wordIndex = 0;
const dynamicTextElement = document.getElementById("dynamic-text");

// Function to change the word with quick fade effect
function changeWord() {
    // Start fade-out effect quickly
    dynamicTextElement.style.opacity = 0;
    
    // Wait for the fade-out to complete before changing the word
    setTimeout(() => {
        // Change the word
        dynamicTextElement.textContent = words[wordIndex];
        
        // Immediately pop the new word in by resetting the opacity
        dynamicTextElement.style.opacity = 1;
        
        // Update the word index
        wordIndex = (wordIndex + 1) % words.length; // Loop through words
    }, 300); // Quick fade-out duration (0.3s)
}

// Change the word every 2.5 seconds (allowing enough time for fade)
setInterval(changeWord, 2500);

// Start with the first word
changeWord();















