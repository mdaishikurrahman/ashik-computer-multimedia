// ============================================================
// DARK / LIGHT THEME TOGGLE
// ============================================================

(function () {
    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) return;

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }

    toggleBtn.addEventListener("click", function () {
        const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
    });

    // Keep in sync if theme is changed in another tab
    window.addEventListener("storage", function (e) {
        if (e.key === "theme" && e.newValue) {
            document.documentElement.setAttribute("data-theme", e.newValue);
        }
    });
})();
