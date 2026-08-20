// =========================================================
// LOGIN SYSTEM
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) return;

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // =============================================
        // INPUT VALUES
        // =============================================

        const email = document
            .getElementById("email")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("password")
            .value
            .trim();

        const remember =
            document.getElementById("rememberMe");

 // =============================================
 // VALIDATION
 // =============================================

        if (email === "" || password === "") {

            alert("Please enter Email and Password.");

            return;

        }

        // =============================================
        // GET USERS
        // =============================================

        const users =
            JSON.parse(localStorage.getItem("users")) || [];

        // =============================================
        // FIND USER
        // =============================================

        const user = users.find(function (item) {

            return (

                item.email.toLowerCase() === email &&

                item.password === password

            );

        });

        // =============================================
        // LOGIN FAILED
        // =============================================

        if (!user) {

            alert("Invalid Email or Password.");

            return;

        }

        // =============================================
        // SAVE SESSION
        // =============================================

        localStorage.setItem(

            "currentUser",

            JSON.stringify(user)

        );

        // =============================================
        // REMEMBER ME
        // =============================================

        if (remember && remember.checked) {

            localStorage.setItem(

                "rememberUser",

                email

            );

        }

        else{

            localStorage.removeItem(

                "rememberUser"

            );

        }

        // =============================================
        // SUCCESS
        // =============================================

        alert(

            "Login Successful."

        );

        window.location.href = "index.html";

    });

    // =============================================
    // AUTO FILL REMEMBER ME
    // =============================================

    const rememberEmail =

        localStorage.getItem("rememberUser");

    if (rememberEmail) {

        const emailInput =

            document.getElementById("email");

        if (emailInput) {

            emailInput.value = rememberEmail;

        }

        const rememberCheck =

            document.getElementById("rememberMe");

        if (rememberCheck) {

            rememberCheck.checked = true;

        }

    }

});
