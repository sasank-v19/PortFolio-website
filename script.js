function nextSlide(button) {
    const slider = button.parentElement;
    const images = slider.querySelectorAll("img");
    let current = [...images].findIndex(img => img.classList.contains("active"));
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
}

function prevSlide(button) {
    const slider = button.parentElement;
    const images = slider.querySelectorAll("img");
    let current = [...images].findIndex(img => img.classList.contains("active"));
    images[current].classList.remove("active");
    current = (current - 1 + images.length) % images.length;
    images[current].classList.add("active");
}

// Optional: Auto-slide every 2 seconds
setInterval(() => {
    document.querySelectorAll(".image-slider").forEach(slider => {
        const nextButton = slider.querySelector(".next");
        nextSlide(nextButton);
    });
}, 2000);