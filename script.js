/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});


/* =========================================
   NAVBAR
========================================= */

const navbar =
    document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    document.body.classList.toggle("no-scroll");

    const icon =
        menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        document.body.classList.remove("no-scroll");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });

            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );

            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================
   TYPING ANIMATION
========================================= */

const typingText =
    document.getElementById("typingText");


const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast"
];


let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

    }


    let typingSpeed =
        deleting ? 50 : 90;


    if (
        !deleting &&
        characterIndex === currentRole.length
    ) {

        typingSpeed = 1600;

        deleting = true;

    }


    if (
        deleting &&
        characterIndex === 0
    ) {

        deleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        typingSpeed = 400;

    }


    setTimeout(
        typeEffect,
        typingSpeed
    );

}


typeEffect();


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-mode"
    );


    const isLight =
        document.body.classList.contains(
            "light-mode"
        );


    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );


    themeToggle.innerHTML = isLight

        ? '<i class="fa-solid fa-sun"></i>'

        : '<i class="fa-solid fa-moon"></i>';

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

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


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById("name").value;


        formMessage.textContent =
            `Thanks ${name}! Your message has been received.`;


        contactForm.reset();


        setTimeout(() => {

            formMessage.textContent = "";

        }, 5000);

    }
);


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();


/* =========================================
   PROJECT HOVER PARALLAX
========================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 40;

        const rotateY =
            (centerX - x) / 40;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================
   SMOOTH ANCHOR OFFSET
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId === "#" ||
                targetId.length < 2
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            const navbarHeight =
                navbar.offsetHeight;


            const targetPosition =
                target.offsetTop -
                navbarHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});