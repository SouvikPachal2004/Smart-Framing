document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - ₹${item.price}`;
            
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "❌";
            removeBtn.onclick = function () {
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCart();
            };

            li.appendChild(removeBtn);
            cartItemsList.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total;
    }

    window.checkout = function () {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        alert("Redirecting to checkout...");
        localStorage.removeItem("cart");
        updateCart();
    };

    updateCart();
});
