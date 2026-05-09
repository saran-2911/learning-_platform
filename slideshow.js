document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.bootcamp-container');
    const posters = document.querySelectorAll('.bootcamp-poster');
    const navContainer = document.querySelector('.slideshow-nav');

    // Only run the slideshow if there are more posters than can be shown at once
    if (!container || !navContainer || posters.length <= 2) {
        if (navContainer) navContainer.style.display = 'none';
        return;
    }

    let currentPage = 0;
    const postersPerView = 2; // We are showing 2 posters at a time
    const totalPages = Math.ceil(posters.length / postersPerView);
    const slideInterval = 5000; // 5 seconds
    let slideTimer;

    // --- Create Dots ---
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            goToPage(i);
            resetTimer();
        });
        navContainer.appendChild(dot);
    }

    const dots = navContainer.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPage);
        });
    }

    function goToPage(pageNumber) {
        currentPage = pageNumber;
        const posterIndex = currentPage * postersPerView;
        if (posters[posterIndex]) {
            container.style.transform = `translateX(-${posters[posterIndex].offsetLeft}px)`;
        }
        updateDots();
    }

    function advanceSlide() {
        let nextPage = currentPage + 1;
        if (nextPage >= totalPages) {
            nextPage = 0;
        }
        goToPage(nextPage);
    }

    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(advanceSlide, slideInterval);
    }

    // Initial setup
    goToPage(0);
    resetTimer();
});