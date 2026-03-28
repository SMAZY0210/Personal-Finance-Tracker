// ==========================
// DARK MODE SYSTEM
// ==========================

const toggle = document.getElementById("themeToggle");

// Function to apply theme
function setTheme(mode) {
    if (mode === "dark") {
        document.body.classList.add("dark");
        if (toggle) toggle.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        if (toggle) toggle.textContent = "🌙";
    }
}

// Load saved theme or system preference
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Detect system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
    }
}

// Toggle theme
if (toggle) {
    toggle.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark");

        if (isDark) {
            setTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    });
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", loadTheme);



// ==========================
// OPTIONAL: BUTTON INTERACTION
// ==========================

document.querySelectorAll(".btn-primary").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Primary button clicked");
    });
});