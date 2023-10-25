let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach((slide, i) => {
        if (i === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

showSlide(currentSlide);

document.getElementById('prev-slide').addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
});

document.getElementById('next-slide').addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
});
