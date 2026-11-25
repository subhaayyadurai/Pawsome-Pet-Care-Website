// MOBILE NAVIGATION
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(element => {
        const position = element.getBoundingClientRect().top;

        if (position < window.innerHeight - 80) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// PET FILTER
const filterButtons = document.querySelectorAll(".filter-btn");
const petCards = document.querySelectorAll(".pet-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.filter;

        petCards.forEach(card => {
            if (category === "all" || card.dataset.category === category) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// JOURNAL SEARCH
const journalSearch = document.querySelector("#journalSearch");
const journalCards = document.querySelectorAll(".journal-card");

if (journalSearch) {
    journalSearch.addEventListener("input", () => {
        const search = journalSearch.value.toLowerCase();

        journalCards.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(search) ? "" : "none";
        });
    });
}

// FAQ ACCORDION
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        item.classList.toggle("open");

        const symbol = button.querySelector(".faq-symbol");
        if (symbol) {
            symbol.textContent = item.classList.contains("open") ? "−" : "+";
        }
    });
});

// LOGIN / SIGNUP SWITCH
const loginTab = document.querySelector("#loginTab");
const signupTab = document.querySelector("#signupTab");
const signupFields = document.querySelectorAll(".signup-field");
const authTitle = document.querySelector("#authTitle");
const authSubmit = document.querySelector("#authSubmit");

function setAuthMode(mode) {
    if (!loginTab || !signupTab) return;

    if (mode === "signup") {
        signupTab.classList.add("active");
        loginTab.classList.remove("active");

        signupFields.forEach(field => field.style.display = "block");

        if (authTitle) authTitle.textContent = "Create your account";
        if (authSubmit) authSubmit.textContent = "Create account";
    } else {
        loginTab.classList.add("active");
        signupTab.classList.remove("active");

        signupFields.forEach(field => field.style.display = "none");

        if (authTitle) authTitle.textContent = "Welcome back!";
        if (authSubmit) authSubmit.textContent = "Login";
    }
}

if (loginTab) {
    loginTab.addEventListener("click", () => setAuthMode("login"));
}

if (signupTab) {
    signupTab.addEventListener("click", () => setAuthMode("signup"));
}

// SHOW / HIDE PASSWORD
document.querySelectorAll(".toggle-password").forEach(button => {
    button.addEventListener("click", () => {
        const input = button.previousElementSibling;

        if (input) {
            input.type = input.type === "password" ? "text" : "password";
            button.textContent = input.type === "password" ? "Show" : "Hide";
        }
    });
});

// LOGIN FORM DEMO
const authForm = document.querySelector("#authForm");
const authMessage = document.querySelector("#authMessage");

if (authForm) {
    authForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!authForm.checkValidity()) {
            authForm.reportValidity();
            return;
        }

        if (authMessage) {
            authMessage.style.display = "block";
            authMessage.textContent =
                "Demo successful! Real login requires a PHP and MySQL backend.";
        }
    });
}

// BOOKING FORM DEMO
const bookingForm = document.querySelector("#bookingForm");
const bookingMessage = document.querySelector("#bookingMessage");

if (bookingForm) {
    bookingForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!bookingForm.checkValidity()) {
            bookingForm.reportValidity();
            return;
        }

        bookingMessage.style.display = "block";
        bookingMessage.textContent =
            "Your booking details have been entered successfully! This demo does not save bookings.";
        bookingForm.reset();
    });
}

// CONTACT FORM DEMO
const contactForm = document.querySelector("#contactForm");
const contactMessage = document.querySelector("#contactMessage");

if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        contactMessage.style.display = "block";
        contactMessage.textContent =
            "Thank you for contacting Pawsome! This demo does not send messages.";
        contactForm.reset();
    });
}

// NEWSLETTER
document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", event => {
        event.preventDefault();
        alert("Thank you for joining the Pawsome community!");
        form.reset();
    });
});

// CURRENT YEAR
document.querySelectorAll(".year").forEach(element => {
    element.textContent = new Date().getFullYear();
});