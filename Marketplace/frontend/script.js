document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCount() {
        document.getElementById("cart-count").textContent = cart.length;
    }

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productCard = this.parentElement;
            const name = productCard.dataset.name;
            const price = parseInt(productCard.dataset.price);

            cart.push({ name, price });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${name} added to cart!`);
            updateCartCount();
        });
    });

    updateCartCount();
});
