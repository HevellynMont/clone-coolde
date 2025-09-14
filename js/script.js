document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const navAvatars = document.querySelectorAll('.nav-avatar');

    if (!sliderWrapper || !slides.length || !navAvatars.length) {
        return;
    }

    let currentSlide = 0;

    const goToSlide = (slideIndex) => {
        sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
        
        navAvatars.forEach(avatar => avatar.classList.remove('active'));
        navAvatars[slideIndex].classList.add('active');

        currentSlide = slideIndex;
    };

    navAvatars.forEach((avatar, index) => {
        avatar.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    goToSlide(0);
});