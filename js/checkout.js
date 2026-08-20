// =========================================================
// CHECKOUT PAGE
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const productsContainer =
    document.getElementById("checkout-products");

    const subtotalEl =
    document.getElementById("checkout-subtotal");

    const shippingEl =
    document.getElementById("checkout-shipping");

    const totalEl =
    document.getElementById("checkout-total");

    const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    let subtotal = 0;

    const shipping = 15;

    if (cart.length === 0) {

        productsContainer.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        subtotalEl.textContent = "$0";
        shippingEl.textContent = "$0";
        totalEl.textContent = "$0";

        return;

    }

    cart.forEach(item => {

        const itemTotal =
        item.price * item.qty;

        subtotal += itemTotal;

        productsContainer.innerHTML += `

            <div class="order-item">

                <span>${item.name} × ${item.qty}</span>

                <span>$${itemTotal.toLocaleString()}</span>

            </div>

        `;

    });

    subtotalEl.textContent =
    "$" + subtotal.toLocaleString();

    shippingEl.textContent =
    "$" + shipping.toLocaleString();

    totalEl.textContent =
    "$" + (subtotal + shipping).toLocaleString();

});


// =========================================================
// PLACE ORDER
// =========================================================

const checkoutForm =
document.getElementById("checkoutForm");

if (checkoutForm) {

    checkoutForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // =====================================
        // CUSTOMER INFORMATION
        // =====================================

        const firstName =
        document.getElementById("firstName").value.trim();

        const lastName =
        document.getElementById("lastName").value.trim();

        const phone =
        document.getElementById("phone").value.trim();

        const email =
        document.getElementById("email").value.trim();

        const address =
        document.getElementById("address").value.trim();

        const city =
        document.getElementById("city").value.trim();

        const district =
        document.getElementById("district").value.trim();

        const zip =
        document.getElementById("zip").value.trim();

        const country =
        document.getElementById("country").value;

        // =====================================
        // VALIDATION
        // =====================================

        if (

            !firstName ||
            !lastName ||
            !phone ||
            !email ||
            !address ||
            !city ||
            !district ||
            !zip ||
            !country

        ) {

            alert("Please fill all required fields.");

            return;

        }

        // =====================================
        // PAYMENT
        // =====================================

        const paymentOption =
        document.querySelector(
            'input[name="payment"]:checked'
        );

        if (!paymentOption) {

            alert("Please select a payment method.");

            return;

        }

        const payment =
        paymentOption.value;

        // =====================================
        // CART
        // =====================================

        const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }

        // =====================================
        // TOTAL
        // =====================================

        let subtotal = 0;

        cart.forEach(item => {

            subtotal += item.price * item.qty;

        });

        const shipping = 15;

        const total =
        subtotal + shipping;

        // =====================================
        // CREATE ORDER
        // =====================================

        const order = {

            orderNumber:
            "ACM-" + Date.now(),

            name:
            firstName + " " + lastName,

            phone,

            email,

            address:
            address +
            ", " +
            city +
            ", " +
            district +
            ", " +
            country,

            payment,

            subtotal,

            shipping,

            total,

            date:
            new Date().toISOString(),

            status:
            "processing",

            customer: {

                firstName,
                lastName,
                phone,
                email,
                address,
                city,
                district,
                zip,
                country

            },

            cart

        };

 // =====================================
// SAVE ORDER
// =====================================

// Last Order
localStorage.setItem(
    "lastOrder",
    JSON.stringify(order)
);

// All Orders
let orders =
    JSON.parse(localStorage.getItem("orders")) || [];

orders.push(order);

localStorage.setItem(
    "orders",
    JSON.stringify(orders)
);

console.log("Saved Order :", order);
console.log("All Orders :", orders);

        // =====================================
        // CLEAR CART
        // =====================================

        localStorage.removeItem("cart");

        // =====================================
        // REDIRECT
        // =====================================

        window.location.href =
        "order_success.html";

    });

}
