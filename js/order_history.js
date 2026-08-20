// =========================================================
// ORDER HISTORY
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // LOAD ORDERS
    // =====================================

    const orders =
        JSON.parse(localStorage.getItem("orders")) || [];

    const tableBody =
        document.getElementById("orderHistoryBody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    // =====================================
    // SUMMARY COUNT
    // =====================================

    let totalOrders = orders.length;
    let pendingOrders = 0;
    let shippedOrders = 0;
    let deliveredOrders = 0;

    orders.forEach(order => {

        if (order.status === "processing") {

            pendingOrders++;

        }

        if (order.status === "shipped") {

            shippedOrders++;

        }

        if (order.status === "delivered") {

            deliveredOrders++;

        }

    });

    document.getElementById("totalOrders").textContent =
        totalOrders;

    document.getElementById("pendingOrders").textContent =
        pendingOrders;

    document.getElementById("shippedOrders").textContent =
        shippedOrders;

    document.getElementById("deliveredOrders").textContent =
        deliveredOrders;

    // =====================================
    // NO ORDER
    // =====================================

    if (orders.length === 0) {

        tableBody.innerHTML = `

            <tr>

                <td colspan="6" style="text-align:center;padding:30px;">

                    No Order Found.

                </td>

            </tr>

        `;

        return;

    }

    // =====================================
    // SHOW ORDERS
    // =====================================

    orders.reverse().forEach(order => {

        let statusClass = "";
        let statusText = "";

        switch (order.status) {

            case "processing":

                statusClass = "pending";
                statusText = "Processing";

                break;

            case "shipped":

                statusClass = "shipped";
                statusText = "Shipped";

                break;

            case "delivered":

                statusClass = "delivered";
                statusText = "Delivered";

                break;

            case "cancelled":

                statusClass = "cancelled";
                statusText = "Cancelled";

                break;

            default:

                statusClass = "pending";
                statusText = order.status;

        }

        tableBody.innerHTML += `

        <tr>

            <td>${order.orderNumber}</td>

            <td>

                ${new Date(order.date).toLocaleDateString("en-GB", {

                    day: "2-digit",
                    month: "short",
                    year: "numeric"

                })}

            </td>

            <td>

                $${Number(order.total).toLocaleString()}

            </td>

            <td>

                <span class="status ${statusClass}">

                    ${statusText}

                </span>

            </td>

            <td>

                ${order.payment}

            </td>

            <td>

                <button
                    class="view-btn"
                    data-order="${order.orderNumber}"
                    data-phone="${order.phone}">

                    View Details

                </button>

            </td>

        </tr>

        `;

    });

    // =====================================
    // VIEW DETAILS
    // =====================================

    document.querySelectorAll(".view-btn").forEach(button => {

        button.addEventListener("click", function () {

            localStorage.setItem(

                "trackOrder",

                JSON.stringify({

                    orderNumber: this.dataset.order,

                    phone: this.dataset.phone

                })

            );

            window.location.href =
                "track_order.html";

        });

    });

});
