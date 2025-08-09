let planet = document.querySelector('.planet');
let sun = document.querySelector('.sun');

let angle = 0;
let radius = 100;

function animatePlanet() {
    angle += 0.02; // Speed of rotation
    let x = radius * Math.cos(angle);
    let y = radius * Math.sin(angle);
    planet.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animatePlanet);
}

animatePlanet();
