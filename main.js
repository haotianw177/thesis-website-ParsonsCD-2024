// la la la la la la________________________ what loading time?
// hand-made by Haotian Wang, 04/17/2024
// i was listening to Grimes on repeat
// for maintenance request email @haotianwang.design@gmail.com

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

$(document).ready(function() {
  // When an image is clicked
  $('img').click(function(e) {
    e.stopPropagation(); // Prevent the click event from bubbling up to higher elements
    var src = $(this).attr('src'); // Get the source of the clicked image
    $('#imagePreviewModal img').attr('src', src);
    $('#imagePreviewModal').css('display', 'flex'); // Make sure to set display to flex
    $('#imagePreviewModal').fadeIn(); // Display the modal
  });
  
  // Click anywhere on the modal, including the image, to close it
  $('#imagePreviewModal').click(function() {
    $(this).fadeOut(); // Hide the modal
  });
  
  // Clicking on the modal image also closes the modal
  // This handler is no longer stopping propagation, so clicks will bubble up to the modal
  $('#imagePreviewModal img').click(function() {
    $('#imagePreviewModal').fadeOut(); // Also hides the modal
  });
});


for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', function() {
      // Hide all content sections before showing the selected one
      textItems.forEach(item => {
          item.style.display = 'none';  // Hide all content sections
      });

      setActiveText(i); // Set the clicked one as active

      if (window.innerWidth <= 768) {  // Check if it's in mobile view
          document.querySelectorAll('.leftContainer .headerInfo, .leftContainer .footerInfo').forEach(elem => {
              elem.style.display = 'none';  // Hide text elements in the leftContainer
          });
          textItems[i].style.display = 'block';  // Display only the clicked content
      }
  });
}

toggleButton.addEventListener('click', () => {
  let isMenuOpen = dropdownMenu.style.display === 'block' || dropdownMenu.style.display === '';
  dropdownMenu.style.display = isMenuOpen ? 'none' : 'block';

  if (isMenuOpen) {
      document.querySelectorAll('.leftContainer .headerInfo, .leftContainer .footerInfo').forEach(elem => {
          elem.style.display = 'block';  // Show text elements when menu is closed
      });
      textItems.forEach(item => item.style.display = 'none');  // Hide all content sections when closing menu
  } else {
      document.querySelectorAll('.leftContainer .headerInfo, .leftContainer .footerInfo').forEach(elem => {
          elem.style.display = 'none';  // Hide text elements when menu is open
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 768) {
      // Show only the header information and initial image on load for mobile
      document.querySelector('.leftContainer .headerInfo').style.display = 'block';
      document.getElementById('fitScreenImage').style.display = 'block';

      // Hide all other right screen content initially
      textItems.forEach(item => item.style.display = 'none');
  } else {
      // For desktop, display the first text item as active
      textItems[0].classList.add('active');
      textItems[0].style.display = 'block';
  }
});

// Add existing event listeners and other logic as needed
