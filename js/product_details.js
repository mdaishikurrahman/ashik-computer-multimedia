/* =========================================================
   PRODUCT DETAILS PAGE
   File: product_details.js
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       PRODUCT DATABASE
    ===================================================== */

    const products = {


        /* =================================================
           ASUS VIVOBOOK
        ================================================= */

        "asus-vivobook-15": {

            name: "ASUS VivoBook 15",
            category: "Laptop",

            images: [
                "images/products/Laptop-4.jpeg",
                "images/products/Laptop-1.jpeg",
                "images/products/Laptop-2.jpeg",
                "images/products/Laptop-3.jpeg"
            ],

            price: "৳73,900",
            oldPrice: "৳79,900",
            discount: "-15%",

            rating: 4,
            reviews: 16,

            description:
                "ASUS VivoBook 15 offers smooth everyday performance with fast SSD storage, Full HD display and a comfortable design. It is suitable for office applications, education, programming and entertainment.",

            brand: "ASUS",
            model: "VivoBook 15",
            sku: "ASUS-V15-004",
            stock: "In Stock",

            specification: {
                Processor: "Intel Core i5 12th Gen",
                RAM: "8GB DDR4",
                Storage: "512GB NVMe SSD",
                Display: '15.6" Full HD',
                Graphics: "Intel UHD Graphics",
                "Operating System": "Windows 11"
            }
        },


        /* =================================================
           DELL
        ================================================= */

        "dell-inspiron-15": {

            name: "Dell Inspiron 15 Laptop",
            category: "Laptop",

            images: [
                "images/products/Laptop-1.jpeg",
                "images/products/Laptop-2.jpeg",
                "images/products/Laptop-3.jpeg",
                "images/products/Laptop-4.jpeg"
            ],

            price: "৳89,900",
            oldPrice: "৳95,000",
            discount: "-5%",

            rating: 4,
            reviews: 24,

            description:
                "Dell Inspiron 15 Laptop features an Intel Core i7 Processor, 16GB DDR4 RAM, 512GB NVMe SSD and 15.6-inch Full HD Display. It is suitable for office work, programming, graphics design, multimedia and everyday multitasking.",

            brand: "Dell",
            model: "Inspiron 15",
            sku: "DELL-I15-001",
            stock: "In Stock",

            specification: {
                Processor: "Intel Core i7 13th Gen",
                RAM: "16GB DDR4",
                Storage: "512GB NVMe SSD",
                Display: '15.6" Full HD IPS',
                Graphics: "Intel Iris Xe Graphics",
                "Operating System": "Windows 11"
            }
        },


        /* =================================================
           HP
        ================================================= */

        "hp-pavilion-15": {

            name: "HP Pavilion 15 Laptop",
            category: "Laptop",

            images: [
                "images/products/Laptop-2.jpeg",
                "images/products/Laptop-1.jpeg",
                "images/products/Laptop-3.jpeg",
                "images/products/Laptop-4.jpeg"
            ],

            price: "৳78,500",
            oldPrice: "৳84,000",
            discount: "-10%",

            rating: 4,
            reviews: 18,

            description:
                "HP Pavilion 15 Laptop delivers reliable performance with a powerful processor, fast SSD storage and high-quality Full HD display. It is suitable for office work, study, programming, multimedia and everyday productivity.",

            brand: "HP",
            model: "Pavilion 15",
            sku: "HP-P15-002",
            stock: "In Stock",

            specification: {
                Processor: "Intel Core i5 13th Gen",
                RAM: "16GB DDR4",
                Storage: "512GB NVMe SSD",
                Display: '15.6" Full HD IPS',
                Graphics: "Intel Iris Xe Graphics",
                "Operating System": "Windows 11"
            }
        },


        /* =================================================
           LENOVO
        ================================================= */

        "lenovo-ideapad-slim-5": {

            name: "Lenovo IdeaPad Slim 5",
            category: "Laptop",

            images: [
                "images/products/Laptop-3.jpeg",
                "images/products/Laptop-1.jpeg",
                "images/products/Laptop-2.jpeg",
                "images/products/Laptop-4.jpeg"
            ],

            price: "৳82,900",
            oldPrice: "",
            discount: "",

            rating: 4.5,
            reviews: 21,

            description:
                "Lenovo IdeaPad Slim 5 combines modern performance, fast storage and a slim design. It is an excellent choice for professional work, programming, study, multimedia and daily multitasking.",

            brand: "Lenovo",
            model: "IdeaPad Slim 5",
            sku: "LEN-S5-003",
            stock: "In Stock",

            specification: {
                Processor: "Intel Core i5 13th Gen",
                RAM: "16GB DDR4",
                Storage: "512GB NVMe SSD",
                Display: '15.6" Full HD IPS',
                Graphics: "Intel Iris Xe Graphics",
                "Operating System": "Windows 11"
            }
        },


        /* =================================================
           ACER
        ================================================= */

        "acer-aspire-5": {

            name: "Acer Aspire 5",
            category: "Laptop",

            images: [
                "images/products/Laptop-5.jpeg",
                "images/products/Laptop-1.jpeg",
                "images/products/Laptop-2.jpeg",
                "images/products/Laptop-3.jpeg"
            ],

            price: "৳69,900",
            oldPrice: "",
            discount: "",

            rating: 5,
            reviews: 14,

            description:
                "Acer Aspire 5 is designed for everyday productivity with dependable performance, fast SSD storage and a Full HD display. Perfect for office work, students, programming and general use.",

            brand: "Acer",
            model: "Aspire 5",
            sku: "ACER-A5-005",
            stock: "In Stock",

            specification: {
                Processor: "Intel Core i5 12th Gen",
                RAM: "8GB DDR4",
                Storage: "512GB NVMe SSD",
                Display: '15.6" Full HD',
                Graphics: "Intel Iris Xe Graphics",
                "Operating System": "Windows 11"
            }
        },


        /* =================================================
           MSI
        ================================================= */

        "msi-katana-15": {

            name: "MSI Katana 15 Gaming Laptop",
            category: "Gaming Laptop",

            images: [
                "images/products/Laptop-6.jpeg",
                "images/products/Laptop-7.jpeg",
                "images/products/Laptop-8.jpeg",
                "images/products/Laptop-9.jpeg"
            ],

            price: "৳125,000",
            oldPrice: "৳135,000",
            discount: "-7%",

            rating: 4.5,
            reviews: 19,

            description:
                "MSI Katana 15 Gaming Laptop delivers powerful gaming and multitasking performance with a high-performance processor, dedicated NVIDIA GeForce graphics, fast NVMe SSD storage and a high-refresh-rate Full HD display. It is suitable for gaming, programming, graphics design, video editing and professional workloads.",

            brand: "MSI",
            model: "Katana 15",
            sku: "MSI-K15-006",
            stock: "In Stock",

            specification: {
                Processor: "Intel Core i7 13th Gen",
                RAM: "16GB DDR5",
                Storage: "512GB NVMe SSD",
                Display: '15.6" Full HD 144Hz',
                Graphics: "NVIDIA GeForce RTX 4050 6GB",
                "Operating System": "Windows 11"
            }
        },


        /* =================================================
           CANON
        ================================================= */

        "canon-pixma-g3010": {

            name: "Canon PIXMA G3010",
            category: "Printer",

            images: [
                "images/products/Printer-1.jpeg",
                "images/products/Printer-2.jpeg",
                "images/products/Printer-3.jpeg",
                "images/products/Printer-4.jpeg"
            ],

            price: "৳18,500",
            oldPrice: "৳20,000",
            discount: "-8%",

            rating: 4.5,
            reviews: 22,

            description:
                "Canon PIXMA G3010 is a wireless all-in-one ink tank printer designed for home and office use. It supports printing, scanning and copying with high-quality output and efficient ink usage.",

            brand: "Canon",
            model: "PIXMA G3010",
            sku: "CANON-G3010-007",
            stock: "In Stock",

            specification: {
                "Printer Type": "Ink Tank All-in-One",
                Functions: "Print, Scan, Copy",
                "Print Resolution": "4800 x 1200 dpi",
                "Print Speed": "8.8 ipm Black / 5 ipm Colour",
                "Scan Resolution": "600 x 1200 dpi",
                Connectivity: "Wi-Fi, USB",
                "Ink Type": "GI-790",
                "Paper Size": "A4, A5, B5, Letter, Legal"
            }
        },


        /* =================================================
           TP-LINK
        ================================================= */

        "tp-link-archer-c6": {

            name: "TP-Link Archer C6",
            category: "Networking",

            images: [
                "images/products/Router-1.jpeg",
                "images/products/Router-2.jpeg",
                "images/products/Router-3.jpeg",
                "images/products/Router-4.jpeg"
            ],

            price: "৳4,500",
            oldPrice: "৳5,000",
            discount: "-10%",

            rating: 4.5,
            reviews: 25,

            description:
                "TP-Link Archer C6 is an AC1200 dual-band Gigabit Wi-Fi router designed for reliable home and office networking. It supports high-speed 5GHz and 2.4GHz wireless connections, MU-MIMO technology, Beamforming and Gigabit Ethernet connectivity.",

            brand: "TP-Link",
            model: "Archer C6",
            sku: "TPL-C6-008",
            stock: "In Stock",

            specification: {
                "Wi-Fi Standard": "Wi-Fi 5 (802.11ac)",
                "Wi-Fi Speed": "867 Mbps (5GHz) + 300 Mbps (2.4GHz)",
                "Wireless Bands": "2.4GHz + 5GHz",
                Antennas: "4 Fixed High-Performance Antennas",
                "WAN Port": "1 × Gigabit WAN",
                "LAN Ports": "4 × Gigabit LAN",
                Technology: "MU-MIMO, Beamforming",
                Security: "WPA, WPA2, WPA3",
                "Working Modes": "Router Mode, Access Point Mode"
            }
        },


        /* =================================================
           ASUS EXPERTCENTER
        ================================================= */

        "asus-expertcenter-i5-13th": {

            name: "ASUS ExpertCenter Core i5 13th Gen Desktop",
            category: "Desktop PC",

            images: [
                "images/products/Desktop-1.jpeg",
                "images/products/Desktop-2.jpeg",
                "images/products/Desktop-3.jpeg",
                "images/products/Desktop-4.jpeg"
            ],

            price: "৳72,000",
            oldPrice: "৳78,000",
            discount: "-8%",

            rating: 4.5,
            reviews: 17,

            description:
                "ASUS ExpertCenter Core i5 13th Gen Desktop is designed for reliable business and everyday computing performance. It is suitable for office applications, accounting, programming, multimedia, browsing and professional workloads.",

            brand: "ASUS",
            model: "ExpertCenter",
            sku: "ASUS-EXPERT-I5-009",
            stock: "In Stock",

            specification: {
                Processor: "Intel Core i5 13th Gen",
                RAM: "16GB DDR5",
                Storage: "512GB NVMe SSD",
                Graphics: "Intel UHD Graphics",
                Chipset: "Intel B760",
                "Operating System": "Windows 11 Pro",
                Connectivity: "Wi-Fi, Gigabit Ethernet",
                "Form Factor": "Desktop PC"
            }
        },


        /* =================================================
           ASUS MONITOR
        ================================================= */

        "asus-24-fhd-ips-monitor": {

            name: 'ASUS 24" Full HD IPS Monitor',
            category: "Monitor",

            images: [
                "images/products/Monitor-1.jpeg",
                "images/products/Monitor-2.jpeg",
                "images/products/Monitor-3.jpeg",
                "images/products/Monitor-4.jpeg"
            ],

            price: "৳18,500",
            oldPrice: "৳20,000",
            discount: "-8%",

            rating: 4.5,
            reviews: 20,

            description:
                'ASUS 24" Full HD IPS Monitor delivers clear and vibrant visuals with a Full HD IPS panel, wide 178° viewing angle and smooth 75Hz refresh rate. It is suitable for office work, study, multimedia, programming and everyday use.',

            brand: "ASUS",
            model: "VA24EHE",
            sku: "ASUS-MON-010",
            stock: "In Stock",

            specification: {
                "Display Size": '23.8"',
                "Panel Type": "IPS",
                Resolution: "1920 x 1080 Full HD",
                "Refresh Rate": "75Hz",
                "Viewing Angle": "178°",
                "Aspect Ratio": "16:9",
                "Response Time": "5ms",
                Connectivity: "HDMI, D-Sub",
                "Eye Care": "Flicker-Free, Low Blue Light",
                "Adaptive Sync": "Supported"
            }
        },


        /* =================================================
           HIKVISION
        ================================================= */

        "hikvision-2mp-outdoor-camera": {

            name: "Hikvision 2MP Outdoor Security Camera",
            category: "CCTV Camera",

            images: [
                "images/products/CCTV-1.jpeg",
                "images/products/CCTV-2.jpeg",
                "images/products/CCTV-3.jpeg",
                "images/products/CCTV-4.jpeg"
            ],

            price: "৳3,500",
            oldPrice: "৳4,000",
            discount: "-12%",

            rating: 4.5,
            reviews: 23,

            description:
                "Hikvision 2MP Outdoor Security Camera provides clear Full HD 1920×1080 video surveillance for homes, offices, shops and outdoor areas. It features infrared night vision, efficient H.265+ video compression and weather-resistant outdoor protection.",

            brand: "Hikvision",
            model: "2MP Outdoor Bullet Camera",
            sku: "HIK-CAM-011",
            stock: "In Stock",

            specification: {
                "Image Sensor": "2MP Progressive Scan CMOS",
                Resolution: "1920 × 1080 Full HD",
                Lens: "Fixed 2.8mm / 4mm",
                "Night Vision": "IR up to 30m",
                "Video Compression": "H.265+ / H.265 / H.264+ / H.264",
                "Day & Night": "IR Cut Filter",
                WDR: "DWDR",
                "Camera Type": "Outdoor Fixed Bullet",
                "Weather Protection": "IP67",
                "Motion Detection": "Supported"
            }
        },


        /* =================================================
           LOGITECH KEYBOARD & MOUSE
        ================================================= */

        "logitech-wireless-keyboard-mouse": {

            name: "Logitech Wireless Keyboard & Mouse Combo",
            category: "Keyboard & Mouse",

            images: [
                "images/products/Keyboard-1.jpeg",
                "images/products/Keyboard-2.jpeg",
                "images/products/Keyboard-3.jpeg",
                "images/products/Keyboard-4.jpeg"
            ],

            price: "৳3,500",
            oldPrice: "৳4,000",
            discount: "-12%",

            rating: 4.5,
            reviews: 18,

            description:
                "Logitech Wireless Keyboard & Mouse Combo provides a reliable and comfortable wireless setup for everyday computing. It is suitable for office work, home use, study, browsing and general productivity.",

            brand: "Logitech",
            model: "Wireless Keyboard & Mouse Combo",
            sku: "LOGI-KM-012",
            stock: "In Stock",

            specification: {
                "Keyboard Type": "Wireless Full-Size Keyboard",
                "Mouse Type": "Wireless Optical Mouse",
                Connectivity: "2.4GHz Wireless",
                Receiver: "USB Wireless Receiver",
                "Wireless Range": "Up to 10m",
                Compatibility: "Windows, macOS, ChromeOS",
                "Battery Type": "AA / AAA Batteries",
                Color: "Black"
            }
        }

    };


    /* =====================================================
       GET PRODUCT FROM URL
    ===================================================== */

    const urlParams =
        new URLSearchParams(window.location.search);

    const productId =
        urlParams.get("product");


    /* =====================================================
       DEFAULT PRODUCT
    ===================================================== */

    const product =
        products[productId] ||
        products["dell-inspiron-15"];


    /* =====================================================
       PRODUCT ELEMENTS
    ===================================================== */

    const mainProductImage =
        document.getElementById("mainProductImage");

    const productTitle =
        document.querySelector(".product-title");

    const productCategory =
        document.querySelector(
            ".product-info .product-category"
        );

    const productDescription =
        document.querySelector(".product-description");

    const currentPrice =
        document.querySelector(
            ".product-info .current-price"
        );

    const oldPrice =
        document.querySelector(
            ".product-info .old-price"
        );

    const discount =
        document.querySelector(
            ".product-info .discount"
        );

    const reviewText =
        document.querySelector(
            ".product-info .product-rating span"
        );

    const productMeta =
        document.querySelector(".product-meta");


    /* =====================================================
       UPDATE PRODUCT TITLE
    ===================================================== */

    if (productTitle) {

        productTitle.textContent =
            product.name;

    }


    /* =====================================================
       UPDATE CATEGORY
    ===================================================== */

    if (productCategory) {

        productCategory.textContent =
            product.category;

    }


    /* =====================================================
       UPDATE DESCRIPTION
    ===================================================== */

    if (productDescription) {

        productDescription.textContent =
            product.description;

    }


    /* =====================================================
       UPDATE CURRENT PRICE
    ===================================================== */

    if (currentPrice) {

        currentPrice.textContent =
            product.price;

    }


    /* =====================================================
       UPDATE OLD PRICE
    ===================================================== */

    if (oldPrice) {

        if (product.oldPrice) {

            oldPrice.textContent =
                product.oldPrice;

            oldPrice.style.display =
                "inline";

        } else {

            oldPrice.textContent =
                "";

            oldPrice.style.display =
                "none";

        }

    }


    /* =====================================================
       UPDATE DISCOUNT
    ===================================================== */

    if (discount) {

        if (product.discount) {

            discount.textContent =
                product.discount;

            discount.style.display =
                "inline-block";

        } else {

            discount.textContent =
                "";

            discount.style.display =
                "none";

        }

    }


    /* =====================================================
       UPDATE REVIEWS
    ===================================================== */

    if (reviewText) {

        reviewText.textContent =
            "(" +
            product.reviews +
            " Reviews)";

    }


    /* =====================================================
       UPDATE PRODUCT META
    ===================================================== */

    if (productMeta) {

        const metaParagraphs =
            productMeta.querySelectorAll("p");


        metaParagraphs.forEach(
            function (paragraph) {

                const strong =
                    paragraph.querySelector("strong");


                if (!strong) return;


                const label =
                    strong.textContent
                        .trim()
                        .replace(":", "")
                        .toLowerCase();


                if (label === "brand") {

                    paragraph.innerHTML =
                        "<strong>Brand:</strong> " +
                        product.brand;

                }


                if (label === "model") {

                    paragraph.innerHTML =
                        "<strong>Model:</strong> " +
                        product.model;

                }


                if (label === "sku") {

                    paragraph.innerHTML =
                        "<strong>SKU:</strong> " +
                        product.sku;

                }


                if (
                    label === "availability" ||
                    label === "stock"
                ) {

                    paragraph.innerHTML =
                        "<strong>Availability:</strong> " +
                        '<span class="stock">' +
                        product.stock +
                        "</span>";

                }

            }
        );

    }


    /* =====================================================
       UPDATE RATING STARS
    ===================================================== */

    const starsContainer =
        document.querySelector(
            ".product-info .product-rating .stars"
        );


    if (starsContainer) {

        starsContainer.innerHTML =
            "";


        const fullStars =
            Math.floor(product.rating);


        const hasHalfStar =
            product.rating % 1 !== 0;


        for (
            let i = 1;
            i <= 5;
            i++
        ) {

            const star =
                document.createElement("i");


            if (i <= fullStars) {

                star.className =
                    "fa-solid fa-star";

            }

            else if (
                i === fullStars + 1 &&
                hasHalfStar
            ) {

                star.className =
                    "fa-solid fa-star-half-stroke";

            }

            else {

                star.className =
                    "fa-regular fa-star";

            }


            starsContainer.appendChild(
                star
            );

        }

    }


    /* =====================================================
       UPDATE SPECIFICATION TABLE
    ===================================================== */

    const specificationTable =
        document.querySelector(
            ".spec-table tbody"
        );


    if (
        specificationTable &&
        product.specification
    ) {

        specificationTable.innerHTML =
            "";


        Object.entries(
            product.specification
        ).forEach(
            function ([key, value]) {

                const row =
                    document.createElement("tr");


                const th =
                    document.createElement("th");

                th.textContent =
                    key;


                const td =
                    document.createElement("td");

                td.textContent =
                    value;


                row.appendChild(th);
                row.appendChild(td);


                specificationTable.appendChild(
                    row
                );

            }
        );

    }


    /* =====================================================
       MAIN PRODUCT IMAGE
    ===================================================== */

    if (mainProductImage) {

        if (
            product.images &&
            product.images.length > 0
        ) {

            mainProductImage.src =
                product.images[0];

            mainProductImage.alt =
                product.name;

        }

    }


    /* =====================================================
       PRODUCT THUMBNAILS
    ===================================================== */

    const thumbnailImages =
        document.querySelectorAll(
            ".thumbnail-images img"
        );


    thumbnailImages.forEach(
        function (thumbnail, index) {

            if (
                product.images &&
                product.images[index]
            ) {

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

        }
    );


    /* =====================================================
       IMAGE GALLERY
    ===================================================== */

    thumbnailImages.forEach(
        function (thumbnail) {

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


                    this.classList.add(
                        "active"
                    );

                }
            );

        }
    );


    /* =====================================================
       FIRST THUMBNAIL ACTIVE
    ===================================================== */

    if (
        thumbnailImages.length > 0
    ) {

        thumbnailImages.forEach(
            function (item) {

                item.classList.remove(
                    "active"
                );

            }
        );


        if (
            product.images &&
            product.images.length > 0
        ) {

            thumbnailImages[0].classList.add(
                "active"
            );

        }

    }


    /* =====================================================
       QUANTITY CONTROL
    ===================================================== */

    const quantityInput =
        document.getElementById(
            "quantity"
        );

    const minusButton =
        document.getElementById(
            "minus-btn"
        );

    const plusButton =
        document.getElementById(
            "plus-btn"
        );


    const minimumQuantity =
        1;

    const maximumQuantity =
        99;


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
                    ) ||
                    minimumQuantity;


                quantity =
                    Math.max(
                        minimumQuantity,
                        quantity - 1
                    );


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
                    ) ||
                    minimumQuantity;


                quantity =
                    Math.min(
                        maximumQuantity,
                        quantity + 1
                    );


                quantityInput.value =
                    quantity;

            }
        );

    }


    /* =====================================================
       QUANTITY INPUT VALIDATION
    ===================================================== */

    if (quantityInput) {

        quantityInput.addEventListener(
            "input",
            function () {

                let value =
                    this.value;


                if (value === "") {
                    return;
                }


                let quantity =
                    parseInt(value);


                if (isNaN(quantity)) {
                    return;
                }


                quantity =
                    Math.max(
                        minimumQuantity,
                        Math.min(
                            maximumQuantity,
                            quantity
                        )
                    );


                this.value =
                    quantity;

            }
        );


        quantityInput.addEventListener(
            "blur",
            function () {

                let quantity =
                    parseInt(
                        this.value
                    );


                if (
                    isNaN(quantity) ||
                    quantity < minimumQuantity
                ) {

                    quantity =
                        minimumQuantity;

                }


                if (
                    quantity > maximumQuantity
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
    ===================================================== */

    const tabButtons =
        document.querySelectorAll(
            ".tabs-header .tab-btn"
        );

    const tabBoxes =
        document.querySelectorAll(
            ".tab-content .tab-box"
        );


    tabButtons.forEach(
        function (button) {

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

        }
    );


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


                this.disabled =
                    true;


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
                    " added for checkout.\nQuantity: " +
                    quantity
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


                const text =
                    this.querySelector("span");


                if (!icon) {
                    return;
                }


                const isCurrentlyAdded =
                    icon.classList.contains(
                        "fa-solid"
                    );


                if (isCurrentlyAdded) {

                    icon.classList.remove(
                        "fa-solid"
                    );

                    icon.classList.add(
                        "fa-regular"
                    );


                    if (text) {

                        text.textContent =
                            " Add to Wishlist";

                    }

                } else {

                    icon.classList.remove(
                        "fa-regular"
                    );

                    icon.classList.add(
                        "fa-solid"
                    );


                    if (text) {

                        text.textContent =
                            " Added to Wishlist";

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


    shareLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();


                    const shareText =
                        encodeURIComponent(
                            product.name
                        );


                    const encodedURL =
                        encodeURIComponent(
                            window.location.href
                        );


                    /* =====================================
                       FACEBOOK
                    ===================================== */

                    if (
                        this.querySelector(
                            ".fa-facebook-f"
                        )
                    ) {

                        window.open(
                            "https://www.facebook.com/sharer/sharer.php?u=" +
                            encodedURL,
                            "_blank",
                            "width=600,height=500"
                        );

                    }


                    /* =====================================
                       X / TWITTER
                    ===================================== */

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
                            "_blank",
                            "width=600,height=500"
                        );

                    }


                    /* =====================================
                       LINKEDIN
                    ===================================== */

                    else if (
                        this.querySelector(
                            ".fa-linkedin-in"
                        )
                    ) {

                        window.open(
                            "https://www.linkedin.com/sharing/share-offsite/?url=" +
                            encodedURL,
                            "_blank",
                            "width=600,height=500"
                        );

                    }


                    /* =====================================
                       WHATSAPP
                    ===================================== */

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

        }
    );


    /* =====================================================
       PRODUCT DETAILS PAGE READY
    ===================================================== */

    console.log(
        "Product Details loaded:",
        product.name
    );

});
