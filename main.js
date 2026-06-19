// ===============================
// LOADER
// ===============================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 500);

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }
});

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});

// ===============================
// MOBILE MENU
// ===============================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });
    });
}

// ===============================
// REVEAL ANIMATIONS
// ===============================
const revealElements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right"
);

function revealOnScroll() {
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("reveal-visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// SKILL BAR ANIMATION
// ===============================
function animateSkillBars() {
    const bars = document.querySelectorAll(".skill-fill");

    bars.forEach((bar) => {
        const width = bar.getAttribute("data-width");

        if (width) {
            bar.style.width = width + "%";
        }
    });
}

window.addEventListener("load", animateSkillBars);

// ===============================
// ACTIVE NAVIGATION
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("[data-nav]");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.dataset.nav === currentSection) {
            link.classList.add("active");
        }
    });
});

// ===============================
// CONTACT FORM
// ===============================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const success = document.getElementById("formSuccess");

        if (success) {
            success.classList.add("show");

            setTimeout(() => {
                success.classList.remove("show");
            }, 3000);
        }

        contactForm.reset();
    });
}

// ===============================
// BACK TO TOP BUTTON
// ===============================
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ===============================
// CUSTOM CURSOR
// ===============================
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

if (cursor && follower) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        follower.style.left = e.clientX + "px";
        follower.style.top = e.clientY + "px";
    });
}