const themeToggle = document.getElementById("themeToggle");
const flipToggle = document.getElementById("flipToggle");
const cards = document.querySelectorAll(".book-card");

// Dark mode
themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    themeToggle.textContent = isDark
        ? " Light Mode"
        : " Dark Mode";

    themeToggle.setAttribute("aria-pressed", String(isDark));
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
        ? " Картуудыг буцаах"
        : " Бүх картыг эргүүлэх";

    flipToggle.setAttribute("aria-pressed", String(shouldFlip));
});