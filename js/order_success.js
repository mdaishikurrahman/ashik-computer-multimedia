// =========================================================
// ORDER SUCCESS PAGE
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // LOAD LAST ORDER
    // =====================================

    const order = JSON.parse(localStorage.getItem("lastOrder"));

    if (!order) {

        alert("No Order Found!");

        window.location.href = "index.html";

        return;

    }

    // =====================================
    // ORDER INFORMATION
    // =====================================

    const orderNumber = document.getElementById("order-number");
    const orderDate = document.getElementById("order-date");
    const paymentMethod = document.getElementById("payment-method");

    if (orderNumber)
        orderNumber.textContent = order.orderNumber;

    if (orderDate)
        orderDate.textContent = new Date(order.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

    if (paymentMethod)
        paymentMethod.textContent = order.payment;

    // =====================================
    // CUSTOMER INFORMATION
    // =====================================

    const customerName = document.getElementById("customer-name");
    const customerPhone = document.getElementById("customer-phone");
    const customerEmail = document.getElementById("customer-email");
    const customerAddress = document.getElementById("customer-address");

    if (customerName)
        customerName.textContent = order.name;

    if (customerPhone)
        customerPhone.textContent = order.phone;

    if (customerEmail)
        customerEmail.textContent = order.email;

    if (customerAddress)
        customerAddress.textContent = order.address;

    // =====================================
    // ORDER ITEMS
    // =====================================

    const itemsContainer = document.getElementById("order-items");

    if (itemsContainer) {

        itemsContainer.innerHTML = "";

        if (order.cart && order.cart.length > 0) {

            order.cart.forEach(item => {

                itemsContainer.innerHTML += `

                <div class="order-item">

                    <span>${item.name} × ${item.qty}</span>

                    <span>৳${(item.price * item.qty).toLocaleString()}</span>

                </div>

                `;

            });

        } else {

            itemsContainer.innerHTML = `

                <p>No products found.</p>

            `;

        }

    }

    // =====================================
    // ORDER SUMMARY
    // =====================================

    const subtotal = document.getElementById("order-subtotal");
    const shipping = document.getElementById("order-shipping");
    const total = document.getElementById("order-total");

    if (subtotal)
        subtotal.textContent =
            "৳" + Number(order.subtotal).toLocaleString();

    if (shipping)
        shipping.textContent =
            "৳" + Number(order.shipping).toLocaleString();

    if (total)
        total.textContent =
            "৳" + Number(order.total).toLocaleString();

    // =====================================
    // TRACK ORDER BUTTON
    // =====================================

    const trackBtn = document.querySelector(".track-btn");

    if (trackBtn) {

        trackBtn.addEventListener("click", function (e) {

            e.preventDefault();

            localStorage.setItem(

                "trackOrder",

                JSON.stringify({

                    orderNumber: order.orderNumber,
                    phone: order.phone

                })

            );

            window.location.href = "track_order.html";

        });

    }

    // =====================================
    // DOWNLOAD INVOICE
    // =====================================

    const invoiceBtn = document.getElementById("downloadInvoice");

    if (invoiceBtn) {

        invoiceBtn.addEventListener("click", function () {

            window.print();

        });

    }

});