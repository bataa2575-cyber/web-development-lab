const themeToggle = document.getElementById("themeToggle");
const flipToggle = document.getElementById("flipToggle");
const cards = document.querySelectorAll(".book-card");

const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Dark mode
themeToggle.addEventListener("click", () => {

    const isDark =
        document.documentElement.classList.toggle("theme-dark");

    themeToggle.textContent = isDark
        ? "Light Mode"
        : "Dark Mode";

    themeToggle.setAttribute("aria-pressed", String(isDark));
});

// Individual card flip
cards.forEach(card => {

    card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
    });

    card.addEventListener("keydown", event => {

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            card.classList.toggle("is-flipped");
        }

    });

});

// Flip all cards
flipToggle.addEventListener("click", () => {

    const shouldFlip = [...cards].some(
        card => !card.classList.contains("is-flipped")
    );

    cards.forEach(card => {
        card.classList.toggle("is-flipped", shouldFlip);
    });

    flipToggle.textContent = shouldFlip
        ? "Картуудыг буцаах"
        : "Бүх картыг эргүүлэх";

    flipToggle.setAttribute(
        "aria-pressed",
        String(shouldFlip)
    );

});

// Form validation
form.addEventListener("submit", event => {

    event.preventDefault();

    form.classList.remove("invalid");

    if (!form.checkValidity()) {
        form.classList.add("invalid");
        formStatus.textContent = "";
        form.reportValidity();
        return;
    }

    formStatus.textContent =
        "Мэдээлэл амжилттай шалгагдлаа.";

    form.reset();

});