// BOOK OPENING EFFECT 
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentPage = 0;

    // Update button states and labels
    function updateNav() {
      prevBtn.disabled = currentPage === 0;
      nextBtn.textContent = (currentPage === pages.length) ? 'Home' : 'Next →';
    }

    // Flip forward to the next page, and reset scroll position for the new page
    function flipForward() {
      if (currentPage < pages.length) {
        pages[currentPage].classList.add('flipped');
        currentPage++;
        if (currentPage < pages.length) {
          // Reset the scroll position of the new visible page
          pages[currentPage].scrollTop = 0;
        }
      } else {
        // Reset all pages and their scroll positions
        pages.forEach(page => {
          page.classList.remove('flipped');
          page.scrollTop = 0;
        });
        currentPage = 0;
      }
      updateNav();
    }

    // Flip backward to the previous page, and reset its scroll position
    function flipBackward() {
      if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove('flipped');
        pages[currentPage].scrollTop = 0;
      }
      updateNav();
    }

    // Click anywhere on the book (except on buttons) to flip forward
    document.querySelector('.book').addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-btn')) return;
      flipForward();
    });

    // Navigation button events
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      flipForward();
    });

    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      flipBackward();
    });

    updateNav();
  
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7
 