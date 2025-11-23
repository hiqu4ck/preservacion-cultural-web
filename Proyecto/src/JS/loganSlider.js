// Seleccionamos TODOS los contenedores .slides en juegos y fiestas
const sliders = document.querySelectorAll(".slides");

sliders.forEach(slider => {
    
    const slides = slider.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
        index = (index + 1) % slides.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);

});
