/* =========================================================
   PRODUCT DETAILS PAGE
   File: product_details.js
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       PRODUCT IMAGE GALLERY
       Main image + thumbnail switching
    ===================================================== */

    const mainProductImage =
        document.getElementById("mainProductImage");

    const thumbnailImages =
        document.querySelectorAll(".thumbnail-images img");


    thumbnailImages.forEach(function (thumbnail) {

        thumbnail.addEventListener("click", function () {

            const image =
                this.getAttribute("data-image");


            /* Change main product image */

            if (mainProductImage && image) {

                mainProductImage.src = image;

                mainProductImage.alt =
                    this.alt || "Product Image";

            }


            /* Remove active class */

            thumbnailImages.forEach(function (item) {

                item.classList.remove("active");

            });


            /* Add active class */

            this.classList.add("active");

        });

    });



    /* =====================================================
       QUANTITY CONTROL
    ===================================================== */

    const quantityInput =
        document.getElementById("quantity");

    const minusButton =
        document.getElementById("minus-btn");

    const plusButton =
        document.getElementById("plus-btn");


    /* Minimum and maximum quantity */

    const minimumQuantity = 1;
    const maximumQuantity = 99;


    /* =====================================================
       DECREASE QUANTITY
    ===================================================== */

    if (minusButton && quantityInput) {

        minusButton.addEventListener("click", function () {

            let quantity =
                parseInt(quantityInput.value) || minimumQuantity;


            if (quantity > minimumQuantity) {

                quantity--;

            }


            quantityInput.value = quantity;

        });

    }



    /* =====================================================
       INCREASE QUANTITY
    ===================================================== */

    if (plusButton && quantityInput) {

        plusButton.addEventListener("click", function () {

            let quantity =
                parseInt(quantityInput.value) || minimumQuantity;


            if (quantity < maximumQuantity) {

                quantity++;

            }


            quantityInput.value = quantity;

        });

    }



    /* =====================================================
       QUANTITY INPUT VALIDATION
    ===================================================== */

    if (quantityInput) {

        quantityInput.addEventListener("input", function () {

            let quantity =
                parseInt(this.value);


            if (isNaN(quantity) || quantity < minimumQuantity) {

                quantity = minimumQuantity;

            }


            if (quantity > maximumQuantity) {

                quantity = maximumQuantity;

            }


            this.value = quantity;

        });


        quantityInput.addEventListener("blur", function () {

            let quantity =
                parseInt(this.value);


            if (isNaN(quantity) || quantity < minimumQuantity) {

                quantity = minimumQuantity;

            }


            if (quantity > maximumQuantity) {

                quantity = maximumQuantity;

            }


            this.value = quantity;

        });

    }



    /* =====================================================
       PRODUCT TABS
       Description / Specification / Reviews
    ===================================================== */

    const tabButtons =
        document.querySelectorAll(".tabs-header .tab-btn");

    const tabBoxes =
        document.querySelectorAll(".tab-content .tab-box");


    tabButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const targetTab =
                this.getAttribute("data-tab");


            /* Remove active from all buttons */

            tabButtons.forEach(function (item) {

                item.classList.remove("active");

            });


            /* Remove active from all tab boxes */

            tabBoxes.forEach(function (box) {

                box.classList.remove("active");

            });


            /* Activate selected button */

            this.classList.add("active");


            /* Activate selected content */

            const targetBox =
                document.getElementById(targetTab);


            if (targetBox) {

                targetBox.classList.add("active");

            }

        });

    });



    /* =====================================================
       ADD TO CART
    ===================================================== */

    const addCartButton =
        document.getElementById("addCartBtn");


    if (addCartButton) {

        addCartButton.addEventListener("click", function () {

            const quantity =
                quantityInput
                    ? parseInt(quantityInput.value) || 1
                    : 1;


            const productName =
                document.querySelector(".product-title")
                    ?.textContent
                    .trim() || "Product";


            /* Temporary cart action */

            console.log(
                "Added to cart:",
                productName,
                "Quantity:",
                quantity
            );


            /* Button feedback */

            const originalContent =
                this.innerHTML;


            this.innerHTML =
                '<i class="fa-solid fa-check"></i> ' +
                '<span>Added to Cart</span>';


            this.disabled = true;


            setTimeout(() => {

                this.innerHTML =
                    originalContent;

                this.disabled = false;

            }, 1500);

        });

    }



    /* =====================================================
       BUY NOW
    ===================================================== */

    const buyNowButton =
        document.getElementById("buyNowBtn");


    if (buyNowButton) {

        buyNowButton.addEventListener("click", function () {

            const quantity =
                quantityInput
                    ? parseInt(quantityInput.value) || 1
                    : 1;


            const productName =
                document.querySelector(".product-title")
                    ?.textContent
                    .trim() || "Product";


            console.log(
                "Buy Now:",
                productName,
                "Quantity:",
                quantity
            );


            /*
                Replace this later with your
                checkout page URL.

                Example:

                window.location.href =
                    "checkout.html";
            */

            alert(
                productName +
                " added for checkout.\nQuantity: " +
                quantity
            );

        });

    }



    /* =====================================================
       WISHLIST
    ===================================================== */

    const wishlistButton =
        document.getElementById("wishlistBtn");


    if (wishlistButton) {

        wishlistButton.addEventListener("click", function (event) {

            event.preventDefault();


            const icon =
                this.querySelector("i");


            const productName =
                document.querySelector(".product-title")
                    ?.textContent
                    .trim() || "Product";


            if (icon) {

                icon.classList.toggle("fa-regular");

                icon.classList.toggle("fa-solid");

            }


            const isAdded =
                icon &&
                icon.classList.contains("fa-solid");


            if (isAdded) {

                this.lastChild.textContent =
                    " Added to Wishlist";

                console.log(
                    productName +
                    " added to wishlist."
                );

            } else {

                this.lastChild.textContent =
                    " Add to Wishlist";

                console.log(
                    productName +
                    " removed from wishlist."
                );

            }

        });

    }



    /* =====================================================
       PRODUCT SHARE
       Social share buttons
    ===================================================== */

    const shareLinks =
        document.querySelectorAll(".product-share a");


    shareLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();


            const productName =
                document.querySelector(".product-title")
                    ?.textContent
                    .trim() || "Product";


            const currentURL =
                window.location.href;


            const shareText =
                encodeURIComponent(
                    productName
                );


            const encodedURL =
                encodeURIComponent(
                    currentURL
                );


            /* Facebook */

            if (
                this.querySelector(
                    ".fa-facebook-f"
                )
            ) {

                window.open(
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    encodedURL,
                    "_blank"
                );

            }


            /* X / Twitter */

            else if (
                this.querySelector(
                    ".fa-x-twitter"
                )
            ) {

                window.open(
                    "https://twitter.com/intent/tweet?text=" +
                    shareText +
                    "&url=" +
                    encodedURL,
                    "_blank"
                );

            }


            /* LinkedIn */

            else if (
                this.querySelector(
                    ".fa-linkedin-in"
                )
            ) {

                window.open(
                    "https://www.linkedin.com/sharing/share-offsite/?url=" +
                    encodedURL,
                    "_blank"
                );

            }


            /* WhatsApp */

            else if (
                this.querySelector(
                    ".fa-whatsapp"
                )
            ) {

                window.open(
                    "https://wa.me/?text=" +
                    shareText +
                    "%20" +
                    encodedURL,
                    "_blank"
                );

            }

        });

    });



    /* =====================================================
       RELATED PRODUCT LINKS
       Keep product_details.html structure
    ===================================================== */

    const relatedProductLinks =
        document.querySelectorAll(
            ".related-products .product-card a"
        );


    relatedProductLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "Opening product:",
                this.href
            );

        });

    });



    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    if (mainProductImage) {

        mainProductImage.addEventListener(
            "error",
            function () {

                console.warn(
                    "Product image could not be loaded:",
                    this.src
                );

            }
        );

    }



    /* =====================================================
       PRODUCT DETAILS PAGE READY
    ===================================================== */

    console.log(
        "Product Details page initialized successfully."
    );

});
