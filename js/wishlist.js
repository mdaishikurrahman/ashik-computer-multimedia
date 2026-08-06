// =========================================================
// WISHLIST
// =========================================================

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// =========================================================
// UPDATE WISHLIST COUNT
// =========================================================

function updateWishlistCount() {

    const count = document.querySelector(".wishlist-count");

    if (count) {

        count.textContent = wishlist.length;

    }

}

// =========================================================
// SAVE WISHLIST
// =========================================================

function saveWishlist() {

    localStorage.setItem(

        "wishlist",

        JSON.stringify(wishlist)

    );

    updateWishlistCount();

}

// =========================================================
// ADD TO WISHLIST
// =========================================================

document.querySelectorAll(".wishlist-btn").forEach(function(button){

    button.addEventListener("click", function(){

        const card = this.closest(".product-card");

        const product = {

            id: card.dataset.id,

            name: card.dataset.name,

            price: Number(card.dataset.price),

            image: card.dataset.image

        };

        const exists = wishlist.find(function(item){

            return item.id === product.id;

        });

        if(exists){

            alert("Already in Wishlist.");

            return;

        }

        wishlist.push(product);

        saveWishlist();

        alert("Added to Wishlist.");

    });

});

// =========================================================
// LOAD WISHLIST PAGE
// =========================================================

const wishlistTable = document.getElementById("wishlist-items");

if(wishlistTable){

    renderWishlist();

}

function renderWishlist(){

    wishlistTable.innerHTML="";

    if(wishlist.length===0){

        wishlistTable.innerHTML=`

        <tr>

            <td colspan="4">

                Wishlist is Empty.

            </td>

        </tr>

        `;

        return;

    }

    wishlist.forEach(function(item,index){

        wishlistTable.innerHTML += `

        <tr>

            <td>

                <img src="${item.image}" width="70">

            </td>

            <td>

                ${item.name}

            </td>

            <td>

                ৳${item.price.toLocaleString()}

            </td>

            <td>

                <button

                    class="add-cart"

                    data-index="${index}">

                    Add to Cart

                </button>

            </td>

            <td>

                <button

                    class="remove-wishlist"

                    data-index="${index}">

                    Remove

                </button>

            </td>

        </tr>

        `;

    });

}

// =========================================================
// REMOVE
// =========================================================

document.addEventListener("click",function(e){

    if(e.target.classList.contains("remove-wishlist")){

        const index=e.target.dataset.index;

        wishlist.splice(index,1);

        saveWishlist();

        renderWishlist();

    }

});

// =========================================================
// ADD TO CART
// =========================================================

document.addEventListener("click",function(e){

    if(e.target.classList.contains("add-cart")){

        const index=e.target.dataset.index;

        const product=wishlist[index];

        let cart=

        JSON.parse(localStorage.getItem("cart"))||[];

        const exists=

        cart.find(function(item){

            return item.id===product.id;

        });

        if(exists){

            exists.qty++;

        }

        else{

            cart.push({

                ...product,

                qty:1

            });

        }

        localStorage.setItem(

            "cart",

            JSON.stringify(cart)

        );

        alert("Added to Cart.");

    }

});

// =========================================================
// START
// =========================================================

updateWishlistCount();