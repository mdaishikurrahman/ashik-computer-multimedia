/* =========================================================
   PRODUCT IMAGE GALLERY
========================================================= */

const mainImage = document.querySelector(".main-image img");
const thumbnails = document.querySelectorAll(".thumbnail-images img");

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", function () {

        // Change Main Image
        mainImage.src = this.src;

        // Remove Active Class
        thumbnails.forEach((img) => {
            img.classList.remove("active");
        });

        // Add Active Class
        this.classList.add("active");

    });

});


/* =========================================================
   PRODUCT TABS
========================================================= */

const tabButtons = document.querySelectorAll(".tab-btn");
const tabBoxes = document.querySelectorAll(".tab-box");

tabButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabBoxes.forEach(box => box.classList.remove("active"));

        button.classList.add("active");
        tabBoxes[index].classList.add("active");

    });

});


/* =========================================================
   DEFAULT ACTIVE TAB
========================================================= */

if (tabBoxes.length > 0) {
    tabBoxes[0].classList.add("active");
}