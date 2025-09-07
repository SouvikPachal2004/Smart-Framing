document.getElementById("cropForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const soilType = document.getElementById("soilType").value;
    const pH = document.getElementById("pH").value;
    const moisture = document.getElementById("moisture").value;

    const response = await fetch("http://localhost:8080/api/crops/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ soilType, pH, moisture })
    });

    const result = await response.json();
    document.getElementById("cropResult").innerText = `Recommended Crop: ${result.recommendedCrop}`;
});
