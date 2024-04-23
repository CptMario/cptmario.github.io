let currentIndex = 0; // Índice actual en el array
const numParticles = 50; // Número de partículas
const particlesContainer = document.getElementById('particles-container');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const initialX = Math.random() * window.innerWidth;
    const initialY = Math.random() * window.innerHeight;
    particle.style.left = `${initialX}px`; // Posición horizontal aleatoria
    particle.style.top = `${initialY}px`; // Posición vertical aleatoria
    particlesContainer.appendChild(particle);

    // Movimiento inicial aleatorio
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duración de la animación aleatoria entre 2 y 5 segundos
    particle.style.animationDelay = `${Math.random() * 3}s`; // Retardo de inicio aleatorio entre 0 y 3 segundos
}

// Crear las partículas
for (let i = 0; i < numParticles; i++) {
    createParticle();
}