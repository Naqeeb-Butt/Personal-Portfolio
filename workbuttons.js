// Filter projects with smooth transition
const filterButtons = document.querySelectorAll('.filter-btn');
const videoBoxes = document.querySelectorAll('.video-box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        videoBoxes.forEach(box => {
            if (filter === 'all' || box.getAttribute('data-category') === filter) {
                box.classList.remove('hide');
                setTimeout(() => {
                    box.style.display = 'flex'; // Show the matching videos after transition
                }, 500);
            } else {
                box.classList.add('hide');
                setTimeout(() => {
                    box.style.display = 'none'; // Hide the non-matching videos after transition
                }, 500);
            }
        });
    });
});
