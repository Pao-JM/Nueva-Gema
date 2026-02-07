document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const slideElements = document.querySelectorAll(".slide");
  
    const firstClone = slideElements[0].cloneNode(true);
    slides.appendChild(firstClone);
  
    const totalSlides = document.querySelectorAll(".slide").length;
    let index = 0;
    let interval;
  
    function moveSlide() {
      index++;
      slides.style.transition = "transform 0.8s ease-in-out";
      slides.style.transform = `translateX(-${index * 100}%)`;
  
      if (index === totalSlides - 1) {
        setTimeout(() => {
          slides.style.transition = "none";
          index = 0;
          slides.style.transform = "translateX(0)";
        }, 800);
      }
    }
  
    function startSlider() {
      interval = setInterval(moveSlide, 4000);
    }
  
    function stopSlider() {
      clearInterval(interval);
    }
  
    startSlider();
  
    // 👇 para controles manuales (los usamos luego)
    window.nextSlide = () => {
      stopSlider();
      moveSlide();
      startSlider();
    };
  
    window.prevSlide = () => {
      stopSlider();
      if (index === 0) {
        slides.style.transition = "none";
        index = totalSlides - 2;
        slides.style.transform = `translateX(-${index * 100}%)`;
      }
      setTimeout(() => {
        slides.style.transition = "transform 0.8s ease-in-out";
        index--;
        slides.style.transform = `translateX(-${index * 100}%)`;
      }, 20);
      startSlider();
    };
  });