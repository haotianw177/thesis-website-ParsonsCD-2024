// la la la la la la________________________ what loading time?

const textContainer = document.querySelector('.rightScreenContainer');
const textItems = textContainer.querySelectorAll('.rightScreenContent');
const toggleButtons = document.querySelectorAll('.categoriesMenuButton');
const toggleButton = document.getElementById('toggleButton');
const dropdownMenu = document.getElementById('dropdownMenu');

let currentActiveText = 0;

// Set initial active text content
textItems[currentActiveText].classList.add('active');

window.setActiveText = function (index) {
    textItems.forEach(item => item.classList.remove('active'));

    if (textItems[index]) {
        currentActiveText = index;
        textItems[currentActiveText].classList.add('active');
    }
    // Hide dropdown if in phone mode after selecting an item
    if (window.innerWidth <= 768) {  // Assuming 768px as the breakpoint for mobile
        dropdownMenu.style.display = 'none';
    }
}

for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', function() {
        setActiveText(i);
    });
}

toggleButton.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'block' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Adjust display based on viewport size
function displayButtonsAccordingToViewport() {
    if (window.innerWidth > 768) {  // Laptop view
        dropdownMenu.style.display = 'block';  // Always show menu
    } else {
        dropdownMenu.style.display = 'none';  // Mobile view, hide menu initially
    }
}

window.addEventListener('load', displayButtonsAccordingToViewport);
window.addEventListener('resize', displayButtonsAccordingToViewport);
