const track = document.querySelector('.carousel-track');

function moveSlide() {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = "translateX(-25%)";

    setTimeout(() => {
        track.appendChild(track.firstElementChild); // Move first image to end
        track.style.transition = "none"; // Disable transition
        track.style.transform = "translateX(0)"; // Reset position
    }, 500);
}

setInterval(moveSlide, 2000); // Auto-slide every 3 seconds