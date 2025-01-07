document.addEventListener('DOMContentLoaded', () => {
  let team = document.querySelector('#team');

  team.addEventListener('click', (event) => {
    console.log(event.target.tagName);
    if (event.target.closest('A')) {
      event.preventDefault();
      openOverlay();
    }
  });

  const overlay = document.getElementById('modal');

  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.style.display = 'none';
  });


});


function openOverlay() {
  const overlay = document.getElementById('modal');
  
  // Calculate the current scroll position
  const scrollY = window.scrollY;
  const scrollX = window.scrollX;

  // Center the overlay relative to the current scroll position
  overlay.style.top = `${scrollY}px`;
  overlay.style.left = `${scrollX}px`;

  // Display the overlay
  overlay.style.display = 'flex';
}

