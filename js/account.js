// =========================================================
// ACCOUNT.JS
// =========================================================

// ---------------------------------------------------------
// GET CURRENT USER
// ---------------------------------------------------------

const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

// ---------------------------------------------------------
// CHECK LOGIN
// ---------------------------------------------------------

if (!currentUser) {

    alert("Please login first.");

    window.location.href = "login.html";

}

// ---------------------------------------------------------
// LOAD USER INFORMATION
// ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    if (!currentUser) return;

    const welcome = document.getElementById("welcome-user");
    const profileName = document.getElementById("profile-name");

    const fullName = document.getElementById("account-name");
    const email = document.getElementById("account-email");
    const phone = document.getElementById("account-phone");
    const address = document.getElementById("account-address");

    if (welcome) {

        welcome.textContent =
            currentUser.name || "Customer";

    }

    if (profileName) {

        profileName.textContent =
            currentUser.name || "Customer";

    }

    if (fullName) {

        fullName.textContent =
            currentUser.name || "Customer";

    }

    if (email) {

        email.textContent =
            currentUser.email || "example@gmail.com";

    }

    if (phone) {

        phone.textContent =
            currentUser.phone || "+8801XXXXXXXXX";

    }

    if (address) {

        address.textContent =
            currentUser.address || "Bangladesh";

    }

});