const themeToggle = document.getElementById("themeToggle");
const flipToggle = document.getElementById("flipToggle");
const cards = document.querySelectorAll(".gallery__card");

themeToggle?.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
});

flipToggle?.addEventListener("click", () => {
    const shouldFlip = ![...cards].every(card => card.classList.contains("is-flipped"));
    cards.forEach(card => card.classList.toggle("is-flipped", shouldFlip));
    flipToggle.setAttribute("aria-pressed", String(shouldFlip));
    flipToggle.textContent = shouldFlip ? "Бүх картыг буцаах" : "Бүх картыг эргүүлэх";
});
