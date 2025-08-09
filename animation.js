document.addEventListener("DOMContentLoaded", () => {
    let planet = document.querySelector('.planet');
    let angle = 0;
    let radius = 100;

    function animatePlanet() {
        angle += 0.02; // speed
        let x = radius * Math.cos(angle);
        let y = radius * Math.sin(angle);
        planet.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animatePlanet);
    }

    animatePlanet();
});
