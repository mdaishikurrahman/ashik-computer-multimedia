// =========================================================
// FAQ.JS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const faqItems =
        document.querySelectorAll(".faq-item");

    if (!faqItems.length) return;

    // =====================================================
    // FAQ ACCORDION
    // =====================================================

    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            const isActive =
                item.classList.contains("active");

            // Close All

            faqItems.forEach(faq => {

                faq.classList.remove("active");

            });

            // Open Current

            if (!isActive) {

                item.classList.add("active");

            }

        });

    });

});
