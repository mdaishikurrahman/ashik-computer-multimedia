// =========================================================
// REGISTER SYSTEM
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById("registerForm");

    if (!registerForm) return;

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // =====================================================
        // GET INPUT VALUES
        // =====================================================

        const fullName = document.getElementById("fullName").value.trim();

        const email = document.getElementById("email").value.trim().toLowerCase();

        const phone = document.getElementById("phone").value.trim();

        const password = document.getElementById("password").value;

        const confirmPassword = document.getElementById("confirmPassword").value;

        const terms = document.getElementById("terms");

        // =====================================================
        // VALIDATION
        // =====================================================

        if (
            fullName === "" ||
            email === "" ||
            phone === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill in all fields.");

            return;

        }

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }

        if (!terms.checked) {

            alert("Please accept the Terms & Conditions.");

            return;

        }

        // =====================================================
        // GET USERS
        // =====================================================

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // =====================================================
        // CHECK DUPLICATE EMAIL
        // =====================================================

        const exists = users.find(function (user) {

            return user.email === email;

        });

        if (exists) {

            alert("This email is already registered.");

            return;

        }

        // =====================================================
        // CREATE USER
        // =====================================================

        const newUser = {

            id: Date.now(),

            fullName,

            email,

            phone,

            password

        };

        // =====================================================
        // SAVE USER
        // =====================================================

        users.push(newUser);

        localStorage.setItem(

            "users",

            JSON.stringify(users)

        );

        // =====================================================
        // SUCCESS
        // =====================================================

        alert("Registration Successful!");

        registerForm.reset();

        window.location.href = "login.html";

    });

});