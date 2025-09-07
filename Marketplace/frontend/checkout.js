document.getElementById("payment-method").addEventListener("change", function() {
    const cardDetails = document.querySelectorAll(".card-details");
    if (this.value === "card") {
        cardDetails.forEach(field => field.style.display = "block");
    } else {
        cardDetails.forEach(field => field.style.display = "none");
    }
});

document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Validate fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const paymentMethod = document.getElementById("payment-method").value;
    
    if (!name || !email || !address || !paymentMethod) {
        alert("Please fill all required fields!");
        return;
    }

    if (paymentMethod === "card") {
        const card = document.getElementById("card").value;
        const expiry = document.getElementById("expiry").value;
        const cvv = document.getElementById("cvv").value;

        if (card.length !== 16 || !expiry || cvv.length !== 3) {
            alert("Please enter valid card details!");
            return;
        }
    }

    document.getElementById("success-message").style.display = "block";
});
 