/* =========================================================
   PRODUCT DETAILS PAGE
   File: product_details.js
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       PRODUCT DATA
       Product URL থেকে product শনাক্ত হবে
    ===================================================== */

    const products = {

        "dell-inspiron-15": {

            name: "Dell Inspiron 15 Laptop",

            category: "Laptop",

            price: "৳89,900",

            oldPrice: "৳95,000",

            discount: "-5%",

            rating: 4,

            reviews: "24 Reviews",

            images: [
                "images/products/Laptop-1.jpeg",
                "images/products/Laptop-2.jpeg",
                "images/products/Laptop-3.jpeg",
                "images/products/Laptop-4.jpeg"
            ],

            description:
                "Dell Inspiron 15 Laptop features an Intel Core i7 Processor, 16GB DDR4 RAM, 512GB NVMe SSD and 15.6-inch Full HD Display. It is suitable for office work, programming, graphics design, multimedia and everyday multitasking.",

            brand: "Dell",

            model: "Inspiron 15",

            sku: "DELL-I15-001",

            availability: "In Stock",

            specifications: {

                Processor: "Intel Core i7 13th Gen",

                RAM: "16GB DDR4",

                Storage: "512GB NVMe SSD",

                Display: '15.6" Full HD IPS',

                Graphics: "Intel Iris Xe Graphics",

                "Operating System": "Windows 11"

            }

        },


        "hp-pavilion-15": {

            name: "HP Pavilion 15 Laptop",

            category: "Laptop",

            price: "৳78,500",

            oldPrice: "৳84,000",

            discount: "-10%",

            rating: 4,

            reviews: "18 Reviews",

            images: [
                "images/products/Laptop-2.jpeg",
                "images/products/Laptop-1.jpeg",
                "images/products/Laptop-3.jpeg",
                "images/products/Laptop-4.jpeg"
            ],

            description:
                "HP Pavilion 15 Laptop delivers reliable performance with a powerful processor, fast SSD storage and a Full HD display. It is suitable for office work, programming, study, multimedia and everyday computing.",

            brand: "HP",

            model: "Pavilion 15",

            sku: "HP-P15-001",

            availability: "In Stock",

            specifications: {

                Processor: "Intel Core i5 13th Gen",

                RAM: "16GB DDR4",

                Storage: "512GB NVMe SSD",

                Display: '15.6" Full HD IPS',

                Graphics: "Intel Iris Xe Graphics",

                "Operating System": "Windows 11"

            }

        },


        "lenovo-ideapad-slim-5": {

            name: "Lenovo IdeaPad Slim 5",

            category: "Laptop",

            price: "৳82,900",

            oldPrice: "",

            discount: "New",

            rating: 4.5,

            reviews: "21 Reviews",

            images: [
                "images/products/Laptop-3.jpeg",
                "images/products/Laptop-1.jpeg",
                "images/products/Laptop-2.jpeg",
                "images/products/Laptop-4.jpeg"
            ],

            description:
                "Lenovo IdeaPad Slim 5 combines stylish design with dependable performance. With fast SSD storage, high-speed RAM and a Full HD display, it is ideal for office work, programming, study and multimedia.",

            brand: "Lenovo",

            model: "IdeaPad Slim 5",

            sku: "LEN-SLIM5-001",

            availability: "In Stock",

            specifications: {

                Processor: "Intel Core i5 13th Gen",

                RAM: "16GB DDR4",

                Storage: "512GB NVMe SSD",

                Display: '15.6" Full HD IPS',

                Graphics: "Intel Iris Xe Graphics",

                "Operating System": "Windows 11"

            }

        },


        "asus-vivobook-15": {

            name: "ASUS VivoBook 15",

            category: "Laptop",

            price: "৳73,900",

            oldPrice: "৳79,900",

            discount: "-15%",

            rating: 4,

            reviews: "16 Reviews",

            images: [
                "images/products/Laptop-4.jpeg",
                "images/products/Laptop-1.jpeg",
                "images/products/Laptop-2.jpeg",
                "images/products/Laptop-3.jpeg"
            ],

            description:
                "ASUS VivoBook 15 offers smooth everyday performance with a modern design, fast storage and a Full HD display. It is suitable for office work, education, programming and multimedia use.",

            brand: "ASUS",

            model: "VivoBook 15",

            sku: "ASUS-V15-001",

            availability: "In Stock",

            specifications: {

                Processor: "Intel Core i5 12th Gen",

                RAM: "16GB DDR4",

                Storage: "512GB NVMe SSD",

                Display: '15.6" Full HD IPS',

                Graphics: "Intel Iris Xe Graphics",

                "Operating System": "Windows 11"

            }

        },


        "acer-aspire-5": {

            name: "Acer Aspire 5",

            category: "Laptop",

            price: "৳69,900",

            oldPrice: "",

            discount: "Hot",

            rating: 5,

            reviews: "29 Reviews",

            images: [
                "images/products/Laptop-5.jpeg",
                "images/products/Laptop-1.jpeg",
                "images/products/Laptop-2.jpeg",
                "images/products/Laptop-3.jpeg"
            ],

            description:
                "Acer Aspire 5 is designed for everyday productivity with dependable performance, fast storage and a clear Full HD display. It is a practical choice for office work, education, programming and entertainment.",

            brand: "Acer",

            model: "Aspire 5",

            sku: "ACER-A5-001",

            availability: "In Stock",

            specifications: {

                Processor: "Intel Core i5 12th Gen",

                RAM: "16GB DDR4",

                Storage: "512GB NVMe SSD",

                Display: '15.6" Full HD IPS',

                Graphics: "Intel Iris Xe Graphics",

                "Operating System": "Windows 11"

            }

        }

    };



    /* =====================================================
       GET PRODUCT FROM URL
    ===================================================== */

    const urlParams =
        new URLSearchParams(window.location.search);

    const productID =
        urlParams.get("product") || "dell-inspiron-15";


    const product =
        products[productID] || products["dell-inspiron-15"];



    /* =====================================================
       PRODUCT ELEMENTS
    ===================================================== */

    const productTitle =
        document.querySelector(".product-title");

    const productCategory =
        document.querySelector(".product-info .product-category");

    const currentPrice =
        document.querySelector(".product-info .current-price");

    const oldPrice =
        document.querySelector(".product-info .old-price");

    const discount =
        document.querySelector(".product-info .discount");

    const productDescription =
        document.querySelector(".product-info .product-description");

    const productReviews =
        document.querySelector(".product-info .product-rating span");

    const productMeta =
        document.querySelector(".product-meta");

    const mainProductImage =
        document.getElementById("mainProductImage");



    /* =====================================================
       UPDATE PRODUCT TITLE
    ===================================================== */

    if (productTitle) {

        productTitle.textContent =
            product.name;

    }



    /* =====================================================
       UPDATE PRODUCT CATEGORY
    ===================================================== */

    if (productCategory) {

        productCategory.textContent =
            product.category;

    }



    /* =====================================================
       UPDATE PRODUCT PRICE
    ===================================================== */

    if (currentPrice) {

        currentPrice.textContent =
            product.price;

    }


    if (oldPrice) {

        if (product.oldPrice) {

            oldPrice.textContent =
                product.oldPrice;

            oldPrice.style.display =
                "inline";

        } else {

            oldPrice.style.display =
                "none";

        }

    }


    if (discount) {

        if (product.discount) {

            discount.textContent =
                product.discount;

            discount.style.display =
                "inline-block";

        } else {

            discount.style.display =
                "none";

        }

    }



    /* =====================================================
       UPDATE PRODUCT DESCRIPTION
    ===================================================== */

    if (productDescription) {

        productDescription.textContent =
            product.description;

    }



    /* =====================================================
       UPDATE PRODUCT REVIEWS
    ===================================================== */

    if (productReviews) {

        productReviews.textContent =
            "(" + product.reviews + ")";

    }



    /* =====================================================
       UPDATE BREADCRUMB PRODUCT NAME
    ===================================================== */

    const breadcrumb =
        document.querySelector(
            ".shop-banner-content p span:last-child"
        );


    if (breadcrumb) {

        breadcrumb.textContent =
            product.name;

    }



    /* =====================================================
       UPDATE PRODUCT META
    ===================================================== */

    if (productMeta) {

        const metaParagraphs =
            productMeta.querySelectorAll("p");


        if (metaParagraphs[0]) {

            metaParagraphs[0].innerHTML =
                "<strong>Brand:</strong> " +
                product.brand;

        }


        if (metaParagraphs[1]) {

            metaParagraphs[1].innerHTML =
                "<strong>Model:</strong> " +
                product.model;

        }


        if (metaParagraphs[2]) {

            metaParagraphs[2].innerHTML =
                "<strong>SKU:</strong> " +
                product.sku;

        }


        if (metaParagraphs[3]) {

            metaParagraphs[3].innerHTML =
                "<strong>Availability:</strong> " +
                '<span class="stock">' +
                product.availability +
                "</span>";

        }

    }



    /* =====================================================
       PRODUCT IMAGE GALLERY
    ===================================================== */

    const thumbnailImages =
        document.querySelectorAll(
            ".thumbnail-images img"
        );


    if (mainProductImage && product.images.length > 0) {

        mainProductImage.src =
            product.images[0];

        mainProductImage.alt =
            product.name;

    }



    /* =====================================================
       UPDATE THUMBNAILS
    ===================================================== */

    thumbnailImages.forEach(function (
        thumbnail,
        index
    ) {

        if (product.images[index]) {

            thumbnail.src =
                product.images[index];

            thumbnail.setAttribute(
                "data-image",
                product.images[index]
            );

            thumbnail.alt =
                product.name +
                " View " +
                (index + 1);

            thumbnail.style.display =
                "block";

        } else {

            thumbnail.style.display =
                "none";

        }

    });



    /* =====================================================
       THUMBNAIL CLICK
    ===================================================== */

    thumbnailImages.forEach(function (thumbnail) {

        thumbnail.addEventListener(
            "click",
            function () {

                const image =
                    this.getAttribute(
                        "data-image"
                    );


                if (
                    mainProductImage &&
                    image
                ) {

                    mainProductImage.src =
                        image;

                    mainProductImage.alt =
                        this.alt ||
                        product.name;

                }


                thumbnailImages.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add("active");

            }
        );

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


    const minimumQuantity = 1;

    const maximumQuantity = 99;



    /* =====================================================
       DECREASE QUANTITY
    ===================================================== */

    if (
        minusButton &&
        quantityInput
    ) {

        minusButton.addEventListener(
            "click",
            function () {

                let quantity =
                    parseInt(
                        quantityInput.value
                    ) || 1;


                if (
                    quantity >
                    minimumQuantity
                ) {

                    quantity--;

                }


                quantityInput.value =
                    quantity;

            }
        );

    }



    /* =====================================================
       INCREASE QUANTITY
    ===================================================== */

    if (
        plusButton &&
        quantityInput
    ) {

        plusButton.addEventListener(
            "click",
            function () {

                let quantity =
                    parseInt(
                        quantityInput.value
                    ) || 1;


                if (
                    quantity <
                    maximumQuantity
                ) {

                    quantity++;

                }


                quantityInput.value =
                    quantity;

            }
        );

    }



    /* =====================================================
       QUANTITY VALIDATION
    ===================================================== */

    if (quantityInput) {

        quantityInput.addEventListener(
            "input",
            function () {

                let quantity =
                    parseInt(this.value);


                if (
                    isNaN(quantity) ||
                    quantity <
                    minimumQuantity
                ) {

                    quantity =
                        minimumQuantity;

                }


                if (
                    quantity >
                    maximumQuantity
                ) {

                    quantity =
                        maximumQuantity;

                }


                this.value =
                    quantity;

            }
        );

    }



    /* =====================================================
       PRODUCT TABS
       Description / Specification / Reviews
    ===================================================== */

    const tabButtons =
        document.querySelectorAll(
            ".tabs-header .tab-btn"
        );

    const tabBoxes =
        document.querySelectorAll(
            ".tab-content .tab-box"
        );


    tabButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const targetTab =
                    this.getAttribute(
                        "data-tab"
                    );


                tabButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                tabBoxes.forEach(
                    function (box) {

                        box.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                const targetBox =
                    document.getElementById(
                        targetTab
                    );


                if (targetBox) {

                    targetBox.classList.add(
                        "active"
                    );

                }

            }
        );

    });



    /* =====================================================
       UPDATE DESCRIPTION TAB
    ===================================================== */

    const descriptionTab =
        document.getElementById(
            "description"
        );


    if (descriptionTab) {

        const descriptionParagraphs =
            descriptionTab.querySelectorAll(
                "p"
            );


        if (
            descriptionParagraphs[0]
        ) {

            descriptionParagraphs[0]
                .textContent =
                product.description;

        }


        if (
            descriptionParagraphs[1]
        ) {

            descriptionParagraphs[1]
                .textContent =
                product.name +
                " provides dependable performance for office work, programming, graphics design, multimedia and everyday multitasking.";

        }

    }



    /* =====================================================
       UPDATE SPECIFICATION TAB
    ===================================================== */

    const specificationTab =
        document.getElementById(
            "specification"
        );


    if (specificationTab) {

        const specificationRows =
            specificationTab.querySelectorAll(
                ".spec-table tbody tr"
            );


        specificationRows.forEach(
            function (row) {

                const heading =
                    row.querySelector("th");

                const value =
                    row.querySelector("td");


                if (
                    heading &&
                    value
                ) {

                    const key =
                        heading.textContent
                            .trim();


                    if (
                        product.specifications[
                            key
                        ]
                    ) {

                        value.textContent =
                            product.specifications[
                                key
                            ];

                    }

                }

            }
        );

    }



    /* =====================================================
       ADD TO CART
    ===================================================== */

    const addCartButton =
        document.getElementById(
            "addCartBtn"
        );


    if (addCartButton) {

        addCartButton.addEventListener(
            "click",
            function () {

                const quantity =
                    quantityInput
                        ? parseInt(
                            quantityInput.value
                        ) || 1
                        : 1;


                console.log(
                    "Added to cart:",
                    product.name,
                    "Quantity:",
                    quantity
                );


                const originalContent =
                    this.innerHTML;


                this.innerHTML =
                    '<i class="fa-solid fa-check"></i> ' +
                    "<span>Added to Cart</span>";


                this.disabled = true;


                setTimeout(
                    () => {

                        this.innerHTML =
                            originalContent;

                        this.disabled =
                            false;

                    },
                    1500
                );

            }
        );

    }



    /* =====================================================
       BUY NOW
    ===================================================== */

    const buyNowButton =
        document.getElementById(
            "buyNowBtn"
        );


    if (buyNowButton) {

        buyNowButton.addEventListener(
            "click",
            function () {

                const quantity =
                    quantityInput
                        ? parseInt(
                            quantityInput.value
                        ) || 1
                        : 1;


                console.log(
                    "Buy Now:",
                    product.name,
                    "Quantity:",
                    quantity
                );


                alert(
                    product.name +
                    "\nQuantity: " +
                    quantity +
                    "\n\nReady for checkout."
                );

            }
        );

    }



    /* =====================================================
       WISHLIST
    ===================================================== */

    const wishlistButton =
        document.getElementById(
            "wishlistBtn"
        );


    if (wishlistButton) {

        wishlistButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const icon =
                    this.querySelector("i");


                if (icon) {

                    const added =
                        icon.classList.contains(
                            "fa-regular"
                        );


                    if (added) {

                        icon.classList.remove(
                            "fa-regular"
                        );

                        icon.classList.add(
                            "fa-solid"
                        );

                        this.lastChild.textContent =
                            " Added to Wishlist";

                    } else {

                        icon.classList.remove(
                            "fa-solid"
                        );

                        icon.classList.add(
                            "fa-regular"
                        );

                        this.lastChild.textContent =
                            " Add to Wishlist";

                    }

                }

            }
        );

    }



    /* =====================================================
       PRODUCT SHARE
    ===================================================== */

    const shareLinks =
        document.querySelectorAll(
            ".product-share a"
        );


    shareLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const currentURL =
                    window.location.href;


                const shareText =
                    encodeURIComponent(
                        product.name
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


                /* X */

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

            }
        );

    });



    /* =====================================================
       RELATED PRODUCT LINKS
       Keep product_details.html structure
    ===================================================== */

    const relatedProductLinks =
        document.querySelectorAll(
            ".products-grid .product-card a"
        );


    relatedProductLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    console.log(
                        "Opening product:",
                        this.href
                    );

                }
            );

        }
    );



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
        "Product Details loaded:",
        product.name
    );

});
