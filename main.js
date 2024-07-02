document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider a');
    const slideCount = slides.length;
    const navButtons = document.querySelectorAll('.slider-nav a');
    let currentIndex = 0;
    let intervalId;

    // Functie om naar een specifieke slide te schuiven
    function goToSlide(index) {
        currentIndex = index;
        slider.style.transition = 'transform 1s ease-in-out'; // Overgang van 1 seconde tussen slides
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateNavButtons();
    }

    // Functie om naar de volgende slide te gaan
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        goToSlide(currentIndex);
    }

    // Functie om de navigatieknoppen bij te werken
    function updateNavButtons() {
        navButtons.forEach(button => button.classList.remove('active'));
        navButtons[currentIndex].classList.add('active');
    }

    // Automatisch schuiven elke 5 seconden
    function startSlider() {
        intervalId = setInterval(nextSlide, 3000); // Elke 3 seconden naar de volgende slide
    }

   
    // Klikgebeurtenis voor navigatielinks
    navButtons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            clearInterval(intervalId); // Stop de interval
            goToSlide(index);
            startSlider(); // Hervat de interval
        });
    });

    // Zet de eerste navigatieknop actief bij het laden
    navButtons[0].classList.add('active');

    // Start de slider automatisch
    startSlider();
});
