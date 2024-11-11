const names = ['Sofía Trujillo' , 'Iana García' , 'Peter Oosterhoff' , 'Elisabeth Gomez']; // Array con los nombres
const nameElement = document.getElementById('name'); // Elemento h2 donde se mostrarán los nombres
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

// Función para cambiar el nombre con efecto de fade
function changeNameWithFade() {
    // Cambiamos la opacidad del nombre a 0 para ocultarlo gradualmente
    nameElement.style.opacity = 0;
    setTimeout(() => {
        // Cambiamos el texto del elemento h2 al nombre correspondiente
        nameElement.textContent = names[currentIndex];
        // Incrementamos el índice, volviendo al principio del array si llegamos al final
        currentIndex = (currentIndex + 1) % names.length;
        // Cambiamos la opacidad del nombre a 1 para mostrarlo gradualmente
        nameElement.style.opacity = 1;
    }, 1000); // Esperamos 1 segundo antes de cambiar el nombre para permitir que termine la transición de opacidad
}

// Llamamos a la función para iniciar el cambio de nombre con efecto de fade
setInterval(changeNameWithFade, 3000); // Cambiar cada 3 segundos (3000 milisegundos)