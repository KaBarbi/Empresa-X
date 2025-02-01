document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider img");
  const navLinks = document.querySelectorAll(".slider-nav a");
  const sliderContainer = document.querySelector(".slider");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let activeSlideId = entry.target.id;

          navLinks.forEach((link) => link.classList.remove("active"));

          const activeNav = document.querySelector(
            `.slider-nav a[href="#${activeSlideId}"]`
          );
          if (activeNav) {
            activeNav.classList.add("active");
          }
        }
      });
    },
    { threshold: 0.75 }
  );

  navLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetSlide = slides[index];
      if (targetSlide) {
        sliderContainer.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: "smooth",
        });
      }
    });
  });

  slides.forEach((slide) => observer.observe(slide));
});
