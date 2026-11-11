const themeToggle = document.getElementById("themeToggle");
const flipToggle = document.getElementById("flipToggle");
const cards = document.querySelectorAll(".book-card");
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Dark mode
themeToggle.addEventListener("click", () => {
    const isDark =
        document.body.getAttribute("data-bs-theme") !== "dark";

    document.body.setAttribute(
        "data-bs-theme",
        isDark ? "dark" : "light"
    );

    themeToggle.textContent = isDark
        ? "Light Mode"
        : "Dark Mode";

    themeToggle.setAttribute("aria-pressed", String(isDark));
});

// Individual card flip
function setCardFlip(card, flipped) {
    card.classList.toggle("is-flipped", flipped);
}

cards.forEach(card => {
    card.addEventListener("click", event => {
        if (event.target.closest("a, button")) return;

        setCardFlip(
            card,
            !card.classList.contains("is-flipped")
        );
    });

    card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();

            setCardFlip(
                card,
                !card.classList.contains("is-flipped")
            );
        }
    });
});

// Flip all cards
flipToggle.addEventListener("click", () => {
    const shouldFlip = [...cards].some(
        card => !card.classList.contains("is-flipped")
    );

    cards.forEach(card => {
        setCardFlip(card, shouldFlip);
    });

    flipToggle.textContent = shouldFlip
        ? "Картуудыг буцаах"
        : "Бүх картыг эргүүлэх";

    flipToggle.setAttribute(
        "aria-pressed",
        String(shouldFlip)
    );
});

// Bootstrap form validation
form.addEventListener("submit", event => {
    event.preventDefault();

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        formStatus.textContent = "";
        return;
    }

    form.classList.add("was-validated");
    formStatus.textContent = "Мэдээлэл амжилттай шалгагдлаа.";

    form.reset();
    form.classList.remove("was-validated");
});