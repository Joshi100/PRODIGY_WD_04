document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.3
    };

    let observer = new IntersectionObserver(showSection, options);

    function showSection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }

    sections.forEach(section => {
        observer.observe(section);
    });
});
