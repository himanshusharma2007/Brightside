// import "./anime.css";

// Define a new CSS class for the slide-in animation
const slideInAnimation = `
  @keyframes slideIn {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// Create a new style element and append it to the head
const style = document.createElement("style");
style.innerHTML = slideInAnimation;
document.head.appendChild(style);

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Array to track if the class has been added for each .offer-box element
const classAddedArray = [];

// Delay in milliseconds between each animation
const animationDelay = 100;

// Function to handle the animation
function handleAnimation() {
  const offerBoxes = document.querySelectorAll(".slide-in");
  let delay = 0;

  offerBoxes.forEach((box, index) => {
    if (!classAddedArray[index] && isInViewport(box)) {
      setTimeout(() => {
        box.style.animation = "slideIn 1s ease-out forwards";
        classAddedArray[index] = true; // Set the flag for the current element
        console.log(index);
      }, delay);
      delay += animationDelay;
    }
  });
}

// Event listener for scroll
window.addEventListener("scroll", handleAnimation);

// Initial check on page load
handleAnimation();
