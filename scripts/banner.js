document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider img");
  const navLinks = document.querySelectorAll(".slider-nav a");
  const sliderContainer = document.querySelector(".slider");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let activeSlideIndex = [...slides].indexOf(entry.target);
          updateActiveNav(activeSlideIndex);
        }
      });
    },
    { threshold: 0.75 }
  );

  function updateActiveNav(index) {
    navLinks.forEach((link) => link.classList.remove("active"));
    if (navLinks[index]) {
      navLinks[index].classList.add("active");
    }
  }

  navLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSlide = slides[index];

      if (targetSlide) {
        sliderContainer.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: "smooth",
        });

        // Força a atualização manual da navegação para correçao do scroll bug
        updateActiveNav(index);
      }
    });
  });

  slides.forEach((slide) => observer.observe(slide));
});
