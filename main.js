const textContainer = document.querySelector('.rightScreenContainer');
const textItems = textContainer.querySelectorAll('.rightScreenContent');
const toggleButtons = document.querySelectorAll('.categoriesMenuButton');

let currentActiveText = 0;

textItems[currentActiveText].classList.add('active');

window.setActiveText = function (index) {
  if (textItems.length > 0 && index >= 0 && index < textItems.length) {
    textItems[currentActiveText].classList.remove('active');
    toggleButtons[currentActiveText].style.backgroundColor = "";

    currentActiveText = index;

    textItems[currentActiveText].classList.add('active');
    toggleButtons[currentActiveText].style.backgroundColor = "yellow";
  }
}



for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', function() {
    setActiveText(i);
  });
}

const toggleButton = document.getElementById('toggleButton');
const dropdownMenu = document.getElementById('dropdownMenu');

toggleButton.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
        dropdownMenu.style.display = 'none';  // Hide immediately without animation
    } else {
        dropdownMenu.style.display = 'block';  // Show immediately without animation
        // Allow a frame to render with display: block, then add the animation class
        requestAnimationFrame(() => {
            dropdownMenu.classList.add('show');
        });
    }
});

