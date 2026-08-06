// =========================================================
// MOBILE MENU
// =========================================================

const toggle = document.getElementById("toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {

    const icon = toggle.querySelector("i");

    toggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}



// =========================================================
// SEARCH FORM
// =========================================================

const searchForm = document.getElementById("searchForm");

if (searchForm) {

    searchForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const keyword =
            document.getElementById("searchInput").value.trim();

        const category =
            document.getElementById("categorySelect").value;

        window.location.href =
            `shop.html?search=${encodeURIComponent(keyword)}&category=${encodeURIComponent(category)}`;

    });

}



// =========================================================
// CART
// =========================================================

let cart =
    JSON.parse(localStorage.getItem("cart")) || [];



// =========================================================
// UPDATE CART COUNT
// =========================================================

function updateCartCount() {

    const badge =
        document.getElementById("cart-count");

    if (!badge) return;

    let total = 0;

    cart.forEach(item => {

        total += item.qty;

    });

    badge.textContent = total;

}

updateCartCount();



// =========================================================
// ADD TO CART
// =========================================================

const cartButtons =
    document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        const product = {

            name: this.dataset.name,

            price: Number(this.dataset.price),

            image: this.dataset.image,

            qty: 1

        };

        const exist =
            cart.find(item => item.name === product.name);

        if (exist) {

            exist.qty++;

        } else {

            cart.push(product);

        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        updateCartCount();

        alert(product.name + " added to cart.");

    });

});

// =========================================================
// SHOP PAGE FILTER + CATEGORY + BRAND
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const products = document.querySelectorAll(".product-card");

    if (!products.length) return;

    // ---------------------------------
    // URL Parameters
    // ---------------------------------

    const params = new URLSearchParams(window.location.search);

    const keyword =
        (params.get("search") || "").toLowerCase();

    const category =
        (params.get("category") || "all").toLowerCase();

    const brand =
        (params.get("brand") || "").toLowerCase();

    const searchInput =
        document.getElementById("searchInput");

    const categorySelect =
        document.getElementById("categorySelect");

    if (searchInput) {

        searchInput.value = keyword;

    }

    if (categorySelect) {

        categorySelect.value = category;

    }

    // ---------------------------------
    // Main Filter Function
    // ---------------------------------

    function filterProducts(keyword = "", category = "all", brand = "") {

        let found = false;

        products.forEach(function(product){

            const title =
                product.querySelector("h3")
                ?.textContent
                .toLowerCase() || "";

            const productCategory =
                (product.dataset.category || "")
                .toLowerCase();

            const productBrand =
                (product.dataset.brand || "")
                .toLowerCase();

            const matchKeyword =
                keyword === "" ||
                title.includes(keyword) ||
                productBrand.includes(keyword);

            const matchCategory =
                category === "all" ||
                category === productCategory;

            const matchBrand =
                brand === "" ||
                brand === productBrand;

            if (
                matchKeyword &&
                matchCategory &&
                matchBrand
            ) {

                product.style.display = "";

                found = true;

            } else {

                product.style.display = "none";

            }

        });

        let noProduct =
            document.getElementById("no-product");

        if (!found) {

            if (!noProduct) {

                noProduct =
                    document.createElement("h2");

                noProduct.id = "no-product";

                noProduct.textContent =
                    "No Product Found";

                noProduct.style.textAlign = "center";
                noProduct.style.margin = "60px 0";
                noProduct.style.color = "#2563eb";

                document
                    .querySelector(".products-grid")
                    ?.after(noProduct);

            }

        } else {

            if (noProduct) {

                noProduct.remove();

            }

        }

    }

    // ---------------------------------
    // Initial Filter
    // ---------------------------------

    filterProducts(keyword, category, brand);

    // ---------------------------------
    // Sidebar Category Filter
    // ---------------------------------

    document
        .querySelectorAll("[data-filter]")
        .forEach(function(link){

            link.addEventListener("click", function(e){

                e.preventDefault();

                filterProducts(
                    "",
                    this.dataset.filter.toLowerCase(),
                    ""
                );

            });

        });

    // ---------------------------------
    // Sidebar Brand Filter
    // ---------------------------------

    document
        .querySelectorAll(".shop-sidebar [data-brand]")
        .forEach(function(link){

            link.addEventListener("click", function(e){

                e.preventDefault();

                filterProducts(
                    "",
                    "all",
                    this.dataset.brand.toLowerCase()
                );

            });

        });

});

// =========================================================
// CART PAGE
// =========================================================

const cartTable = document.getElementById("cart-items");

if (cartTable) {

    loadCart();

}

function loadCart() {

    const body = document.getElementById("cart-items");
    const subtotal = document.getElementById("subtotal");
    const shipping = document.getElementById("shipping");
    const grandTotal = document.getElementById("grand-total");
    const totalItems = document.getElementById("cart-total-items");
    const empty = document.getElementById("empty-cart");

    body.innerHTML = "";

    if (cart.length === 0) {

        if (empty) empty.style.display = "block";

        if (subtotal) subtotal.textContent = "৳0";
        if (shipping) shipping.textContent = "৳0";
        if (grandTotal) grandTotal.textContent = "৳0";

        if (totalItems) {

            totalItems.textContent = "0";

        }

        return;

    }

    if (empty) {

        empty.style.display = "none";

    }

    let sub = 0;
    let items = 0;

    cart.forEach(function(item, index){

        const itemTotal = item.price * item.qty;

        sub += itemTotal;
        items += item.qty;

        body.innerHTML += `

<tr>

<td class="cart-product">

<img src="${item.image}" alt="${item.name}" width="80">

<div>

<h4>${item.name}</h4>

</div>

</td>

<td>

৳${item.price.toLocaleString()}

</td>

<td>

<input
type="number"
min="1"
value="${item.qty}"
onchange="changeQty(${index}, this.value)">

</td>

<td>

৳${itemTotal.toLocaleString()}

</td>

<td>

<button
class="remove-btn"
onclick="removeItem(${index})">

<i class="fa-solid fa-trash"></i>

</button>

</td>

</tr>

`;

    });

    if (subtotal) {

        subtotal.textContent =
            "৳" + sub.toLocaleString();

    }

    if (shipping) {

        shipping.textContent = "৳150";

    }

    if (grandTotal) {

        grandTotal.textContent =
            "৳" + (sub + 150).toLocaleString();

    }

    if (totalItems) {

        totalItems.textContent = items;

    }

}



// =========================================================
// CHANGE QUANTITY
// =========================================================

function changeQty(index, qty){

    qty = Number(qty);

    if(qty < 1){

        qty = 1;

    }

    cart[index].qty = qty;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    loadCart();

}



// =========================================================
// REMOVE PRODUCT
// =========================================================

function removeItem(index){

    if(!confirm("Remove this product?")) return;

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    loadCart();

}



// =========================================================
// CLEAR CART
// =========================================================

function clearCart(){

    if(!confirm("Clear all cart items?")) return;

    cart = [];

    localStorage.removeItem("cart");

    updateCartCount();

    loadCart();

}

// =========================================================
// PLACE ORDER
// =========================================================

const checkoutBtn =
    document.getElementById("checkout-btn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", function (e) {

        e.preventDefault();

        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;

        }

        const order = {

            id:
                "ACM-" + Date.now(),

            date:
                new Date().toLocaleDateString(),

            status:
                "Order Placed",

            payment:
                "Cash on Delivery",

            shipping:
                "Bangladesh",

            customer:
                "Customer",

            phone:
                "+8801XXXXXXXXX",

            items:
                cart,

            total:
                cart.reduce(function(sum,item){

                    return sum + item.price * item.qty;

                },0)

        };

        localStorage.setItem(

            "lastOrder",

            JSON.stringify(order)

        );

        cart = [];

        localStorage.removeItem("cart");

        updateCartCount();

        window.location.href = "track_order.html";

    });

}



// =========================================================
// TRACK ORDER PAGE
// =========================================================

const trackResult =
    document.getElementById("trackResult");

if(trackResult){

    const order = JSON.parse(

        localStorage.getItem("lastOrder")

    );

    if(order){

        document.getElementById("order-number").textContent =
            order.id;

        document.getElementById("order-date").textContent =
            order.date;

        document.getElementById("customer-name").textContent =
            order.customer;

        document.getElementById("customer-phone").textContent =
            order.phone;

        document.getElementById("payment-method").textContent =
            order.payment;

        document.getElementById("shipping-address").textContent =
            order.shipping;

        document.getElementById("order-total").textContent =
            "৳" + order.total.toLocaleString();

    }

}



// =========================================================
// TRACK FORM
// =========================================================

const trackForm =
    document.getElementById("trackForm");

if(trackForm){

    trackForm.addEventListener("submit", function(e){

        e.preventDefault();

        const orderId =
            document.getElementById("trackOrderId")
            .value
            .trim();

        const phone =
            document.getElementById("trackPhone")
            .value
            .trim();

        const order =
            JSON.parse(localStorage.getItem("lastOrder"));

        if(

            order &&

            order.id === orderId &&

            order.phone === phone

        ){

            document
                .getElementById("trackResult")
                .scrollIntoView({

                    behavior:"smooth"

                });

        }else{

            alert("Order not found.");

        }

    });

}