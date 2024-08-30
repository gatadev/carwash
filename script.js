// script.js

function calculateTotal() {
    let total = 0;
    let summary = "";

    const carType = document.getElementById("carType").value;
    const exteriorWash = document.getElementById("exteriorWash");
    const interiorCleaning = document.getElementById("interiorCleaning");
    const wax = document.getElementById("wax");

    summary += `<p><strong>Car Type:</strong> ${carType.charAt(0).toUpperCase() + carType.slice(1)}</p>`;
    summary += `<p><strong>Selected Services:</strong></p>`;

    if (exteriorWash.checked) {
        total += parseInt(exteriorWash.value);
        summary += `<p>- Exterior Wash: $${exteriorWash.value}</p>`;
    }

    if (interiorCleaning.checked) {
        total += parseInt(interiorCleaning.value);
        summary += `<p>- Interior Cleaning: $${interiorCleaning.value}</p>`;
    }

    if (wax.checked) {
        total += parseInt(wax.value);
        summary += `<p>- Wax: $${wax.value}</p>`;
    }

    summary += `<p><strong>Total Cost:</strong> $${total}</p>`;

    document.getElementById("summary").innerHTML = summary;
}