// =========================================================
// TRACK ORDER
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const trackForm = document.getElementById("trackForm");
    const resultBox = document.getElementById("trackResult");

    if (!trackForm || !resultBox) return;

    // Hide Result
    resultBox.style.display = "none";

    trackForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const orderId = document
            .getElementById("trackOrderId")
            .value
            .trim();

        const phone = document
            .getElementById("trackPhone")
            .value
            .trim();

        // =====================================
        // LOAD ALL ORDERS
        // =====================================

        const orders =
            JSON.parse(localStorage.getItem("orders")) || [];

        // =====================================
        // FIND ORDER
        // =====================================

        const order = orders.find(item =>
            item.orderNumber === orderId &&
            item.phone === phone
        );

        if (!order) {

            alert("Order ID or Phone Number is incorrect.");

            resultBox.style.display = "none";

            return;

        }

        // =====================================
        // SHOW RESULT
        // =====================================

        resultBox.style.display = "grid";

        document.getElementById("order-number").textContent =
            order.orderNumber;

        document.getElementById("order-date").textContent =
            new Date(order.date).toLocaleDateString("en-GB", {

                day: "2-digit",
                month: "long",
                year: "numeric"

            });

        document.getElementById("customer-name").textContent =
            order.name;

        document.getElementById("customer-phone").textContent =
            order.phone;

        document.getElementById("payment-method").textContent =
            order.payment;

        document.getElementById("shipping-address").textContent =
            order.address;

        document.getElementById("order-total").textContent =
            "৳" + Number(order.total).toLocaleString();

        document.getElementById("placed-date").textContent =
            new Date(order.date).toLocaleString();

        // =====================================
        // RESET TIMELINE
        // =====================================

        document.querySelectorAll(".timeline-item")
            .forEach(item => {

                item.classList.remove("completed");
                item.classList.remove("active");

            });

        // =====================================
        // STEP 1
        // =====================================

        document
            .getElementById("step1")
            .classList.add("completed");

        // =====================================
        // STATUS
        // =====================================

        switch (order.status) {

            case "processing":

                document
                    .getElementById("step2")
                    .classList.add("active");

                break;

            case "shipped":

                document
                    .getElementById("step2")
                    .classList.add("completed");

                document
                    .getElementById("step3")
                    .classList.add("active");

                break;

            case "delivered":

                document
                    .getElementById("step2")
                    .classList.add("completed");

                document
                    .getElementById("step3")
                    .classList.add("completed");

                document
                    .getElementById("step4")
                    .classList.add("completed");

                break;

            default:

                document
                    .getElementById("step2")
                    .classList.add("active");

        }

    });

});

const savedTrack =
    JSON.parse(localStorage.getItem("trackOrder"));

if (savedTrack) {

    document.getElementById("trackOrderId").value =
        savedTrack.orderNumber;

    document.getElementById("trackPhone").value =
        savedTrack.phone;

    trackForm.dispatchEvent(new Event("submit"));

    localStorage.removeItem("trackOrder");

}

