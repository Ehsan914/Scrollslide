const slideIN = [...document.querySelectorAll('.slide-in')];
    
slideIN.forEach(slides => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        })
    }, {
        threshold: 0.5
    });

    observer.observe(slides);
})