// =========================================================
// 404.JS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const countdown =
        document.getElementById("countdown");

    const homeBtn =
        document.getElementById("homeBtn");

    const shopBtn =
        document.getElementById("shopBtn");

    const errorImage =
        document.getElementById("errorImage");

    const errorCode =
        document.getElementById("errorCode");

    // =====================================================
    // AUTO REDIRECT
    // =====================================================

    let seconds = 10;

    const timer = setInterval(() => {

        seconds--;

        if (countdown) {

            countdown.textContent = seconds;

        }

        if (seconds <= 0) {

            clearInterval(timer);

            window.location.href = "index.html";

        }

    }, 1000);

    // =====================================================
    // STOP TIMER WHEN BUTTON CLICK
    // =====================================================

    if (homeBtn) {

        homeBtn.addEventListener("click", () => {

            clearInterval(timer);

        });

    }

    if (shopBtn) {

        shopBtn.addEventListener("click", () => {

            clearInterval(timer);

        });

    }

    // =====================================================
    // ESC KEY = STOP REDIRECT
    // =====================================================

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            clearInterval(timer);

            if (countdown) {

                countdown.textContent = "Stopped";

            }

        }

    });

    // =====================================================
    // SHORTCUT KEYS
    // =====================================================

    document.addEventListener("keydown", (e) => {

        const key = e.key.toLowerCase();

        if (key === "h") {

            window.location.href = "index.html";

        }

        if (key === "s") {

            window.location.href = "shop.html";

        }

    });

    // =====================================================
    // IMAGE HOVER EFFECT
    // =====================================================

    if (errorImage) {

        errorImage.addEventListener("mouseenter", () => {

            errorImage.style.transform =
                "scale(1.05)";

        });

        errorImage.addEventListener("mouseleave", () => {

            errorImage.style.transform =
                "scale(1)";

        });

    }

    // =====================================================
    // 404 TEXT ANIMATION
    // =====================================================

    if (errorCode) {

        setInterval(() => {

            errorCode.style.opacity = ".6";

            setTimeout(() => {

                errorCode.style.opacity = "1";

            }, 400);

        }, 2000);

    }

});
