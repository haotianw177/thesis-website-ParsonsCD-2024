const textContainer = document.querySelector('.rightScreenContainer');
const textItems = textContainer.querySelectorAll('.rightScreenContent');
const toggleButtons = document.querySelectorAll('.categoriesMenuButton');

let currentActiveText = 0;

textItems[currentActiveText].classList.add('active');
toggleButtons[currentActiveText].style.display = 'block'; // Ensure initial button is visible

window.setActiveText = function (index) {
  textItems.forEach(item => item.classList.remove('active'));
  toggleButtons.forEach(button => button.style.display = 'none'); // Hide all buttons

  if (textItems[index]) { // Check if the corresponding content exists
    currentActiveText = index;
    textItems[currentActiveText].classList.add('active');
    toggleButtons[currentActiveText].style.display = 'block'; // Show the current button
    document.getElementById('toggleButton').style.display = 'block'; // Always show the menu button
  } else {
    // Handle the case where there is no corresponding content
    document.getElementById('toggleButton').style.display = 'block'; // Ensure menu button is visible
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
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';  // Hide the dropdown
    } else {
        dropdownMenu.style.display = 'block';  // Show the dropdown
        toggleButtons.forEach(button => button.style.display = 'block'); // Show all buttons to allow selection
    }
});
