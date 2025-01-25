document.addEventListener("DOMContentLoaded", () => {
    // Inicializar GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)
  
    // Animación de la sección de beneficios
    gsap.from(".benefit-card", {
      scrollTrigger: {
        trigger: ".benefits",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    })
  
    // Animación de la línea de tiempo de estrategias
    gsap.from(".strategy-item", {
      scrollTrigger: {
        trigger: ".strategies",
        start: "top 60%",
      },
      opacity: 0,
      x: (index) => (index % 2 === 0 ? -50 : 50),
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
    })
  
    // Carrusel de testimonios
    const testimonials = document.querySelectorAll(".testimonial")
    let currentTestimonial = 0
  
    function showNextTestimonial() {
      testimonials[currentTestimonial].style.display = "none"
      currentTestimonial = (currentTestimonial + 1) % testimonials.length
      testimonials[currentTestimonial].style.display = "block"
    }
  
    // Mostrar el primer testimonio
    testimonials[0].style.display = "block"
  
    // Cambiar de testimonio cada 5 segundos
    setInterval(showNextTestimonial, 5000)
  
    // Efecto parallax en el fondo del hero
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset
      document.querySelector(".hero-background").style.transform = `translateY(${scrollPosition * 0.5}px)`
    })
  
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  })
  
  