document.addEventListener("DOMContentLoaded", function () {
    const riskCalculatorForm = document.getElementById("riskCalculatorForm");
    const resultElement = document.getElementById("result");

    riskCalculatorForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const currencyPair = document.getElementById("currencyPair").value;
        const riskAmount = parseFloat(document.getElementById("riskAmount").value);
        const stopLoss = parseFloat(document.getElementById("stopLoss").value);

        // Define pip values for USD, CAD, and JPY quote currencies
        const pipValues = {
            USD: 1,
            CAD: 0.74,
            JPY: 0.69,
        };

        // Extract quote currency from the currency pair (e.g., USD from AUD/USD)
        const quoteCurrency = currencyPair.substr(3);

        // Validate the fields
        if (!currencyPair || !riskAmount || !stopLoss || isNaN(riskAmount) || isNaN(stopLoss)) {
            alert("Please fill in all fields with valid values before calculating the lot size.");
            return;
        }

        // Calculate lot size based on the provided formula
        const lotSize = (0.1 * riskAmount) / (stopLoss * pipValues[quoteCurrency]);

        // Display the calculated lot size
        resultElement.innerHTML = `<p>Calculated Lot Size: <strong>${lotSize.toFixed(2)}</strong> lots</p>`;
    });
});
