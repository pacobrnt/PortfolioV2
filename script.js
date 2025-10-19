// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")

    // Animate hamburger
    const hamburgers = navToggle.querySelectorAll(".hamburger")
    hamburgers[0].style.transform = navMenu.classList.contains("active") ? "rotate(45deg) translateY(8px)" : "none"
    hamburgers[1].style.opacity = navMenu.classList.contains("active") ? "0" : "1"
    hamburgers[2].style.transform = navMenu.classList.contains("active") ? "rotate(-45deg) translateY(-8px)" : "none"
  })

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      const hamburgers = navToggle.querySelectorAll(".hamburger")
      hamburgers[0].style.transform = "none"
      hamburgers[1].style.opacity = "1"
      hamburgers[2].style.transform = "none"
    })
  })
}

// Contact Form Handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Here you would typically send the data to a server
    console.log("Form submitted:", data)

    // Show success message (you can customize this)
    alert("Merci pour votre message ! Je vous répondrai bientôt.")

    // Reset form
    contactForm.reset()
  })
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards and sections
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".about-card, .project-card, .skill-card, .competence-card, .timeline-item, .info-card",
  )

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})
