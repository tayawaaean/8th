AOS.init();
// JavaScript for Flower Animation
const numFlowers = 50;
const flowerContainer = document.querySelector('.flower-container');

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5s and 10s
    flower.style.opacity = Math.random();
    return flower;
}

function startFlowerAnimation() {
    for (let i = 0; i < numFlowers; i++) {
        flowerContainer.appendChild(createFlower());
    }
}

function playMusic() {
    const audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
        startFlowerAnimation(); // Start the flower animation when music plays
    }
}

function pauseMusic() {
    const audio = document.getElementById('background-music');
    if (!audio.paused) {
        audio.pause();
    }
}

document.getElementById('play-music').addEventListener('click', playMusic);
document.getElementById('pause-music').addEventListener('click', pauseMusic);

// Mobile Menu Toggle
document.getElementById('menu-btn').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});