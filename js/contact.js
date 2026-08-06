// =========================================================
// CONTACT.JS
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const counter = document.getElementById("messageCount");
    const messageBox = document.getElementById("contactMessage");
    const submitBtn = document.getElementById("submitBtn");

    // =====================================================
    // CHARACTER COUNTER
    // =====================================================

    if (counter && messageInput) {

        counter.innerHTML = "0 / 500";

        messageInput.addEventListener("input", function () {

            let total = this.value.length;

            if (total > 500) {

                this.value = this.value.substring(0, 500);

                total = 500;

            }

            counter.innerHTML = total + " / 500";

        });

    }

    // =====================================================
    // EMAIL VALIDATION
    // =====================================================

    emailInput.addEventListener("input", function () {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (this.value === "") {

            this.style.borderColor = "#ddd";

        }

        else if (emailPattern.test(this.value)) {

            this.style.borderColor = "#10b981";

        }

        else {

            this.style.borderColor = "#ef4444";

        }

    });

    // =====================================================
    // FORM SUBMIT
    // =====================================================

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        hideMessage();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            showMessage(
                "Please fill in all required fields.",
                "error"
            );

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }

        // Loading Button

        submitBtn.disabled = true;

        submitBtn.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        setTimeout(function () {

            saveContactMessage(
                name,
                email,
                phone,
                subject,
                message
            );

            form.reset();

            emailInput.style.borderColor = "#ddd";

            if (counter) {

                counter.innerHTML = "0 / 500";

            }

            submitBtn.disabled = false;

            submitBtn.innerHTML =
                '<i class="fa-solid fa-paper-plane"></i> <span>Send Message</span>';

            showMessage(
                "Thank you! Your message has been sent successfully.",
                "success"
            );

        }, 800);

    });

    // =====================================================
    // SAVE MESSAGE
    // =====================================================

    function saveContactMessage(
        name,
        email,
        phone,
        subject,
        message
    ) {

        const contacts =
            JSON.parse(
                localStorage.getItem("contactMessages")
            ) || [];

        contacts.push({

            id: Date.now(),

            name: name,

            email: email,

            phone: phone,

            subject: subject,

            message: message,

            date: new Date().toLocaleString()

        });

        localStorage.setItem(
            "contactMessages",
            JSON.stringify(contacts)
        );

    }

    // =====================================================
    // SHOW MESSAGE
    // =====================================================

    function showMessage(text, type) {

        if (!messageBox) return;

        messageBox.className =
            "form-message " + type;

        if (type === "success") {

            messageBox.innerHTML =
                '<i class="fa-solid fa-circle-check"></i> ' + text;

        }

        else {

            messageBox.innerHTML =
                '<i class="fa-solid fa-circle-exclamation"></i> ' + text;

        }

        messageBox.style.display = "block";

        setTimeout(function () {

            hideMessage();

        }, 3000);

    }

    // =====================================================
    // HIDE MESSAGE
    // =====================================================

    function hideMessage() {

        if (!messageBox) return;

        messageBox.style.display = "none";

        messageBox.className = "form-message";

        messageBox.innerHTML = "";

    }

});