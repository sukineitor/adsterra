document.addEventListener("DOMContentLoaded", () => {
  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  // Animate hero section
  gsap.from(".hero-content", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  })

  // Animate benefit cards
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

  // Animate strategy timeline
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

  // Animate tip cards
  gsap.from(".tip-card", {
    scrollTrigger: {
      trigger: ".tips",
      start: "top 70%",
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
  })

  // Animate video items
  gsap.from(".video-item", {
    scrollTrigger: {
      trigger: ".videos",
      start: "top 70%",
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
  })

  // Testimonial carousel
  const testimonials = document.querySelectorAll(".testimonial")
  let currentTestimonial = 0

  function showNextTestimonial() {
    gsap.to(testimonials[currentTestimonial], { opacity: 0, duration: 0.5 })
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    gsap.to(testimonials[currentTestimonial], { opacity: 1, duration: 0.5 })
  }

  // Show the first testimonial
  gsap.to(testimonials[0], { opacity: 1, duration: 0.5 })

  // Change testimonial every 5 seconds
  setInterval(showNextTestimonial, 5000)

  // Parallax effect on hero background
  gsap.to(".hero-background", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 70,
        },
        ease: "power3.inOut",
      })
    })
  })

  // Navbar background change on scroll
  const navbar = document.querySelector("nav")
  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      const scrollY = self.scroll()
      if (scrollY > 100) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
    },
  })

  // Animate CTA button
  gsap.to(".cta-button", {
    scale: 1.1,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  })

  // Initialize AOS (Animate on Scroll) for additional animations
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  })
})

// Add event listener for form submission (if applicable)
const contactForm = document.querySelector("#contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log("Form submitted")
  })
}

// Add a simple preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader")
  preloader.classList.add("preloader-finish")
})

