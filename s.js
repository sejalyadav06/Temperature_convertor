document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    const inputTemp = document.getElementById('inputTemp');
    const unitSelect = document.getElementById('unit');
    const resultDiv = document.getElementById('result');

    convertBtn.addEventListener('click', function() {
        const temperature = parseFloat(inputTemp.value);
        const unit = unitSelect.value;

        if (isNaN(temperature)) {
            alert('Please enter a valid temperature.');
            return;
        }

        let convertedTemperature;
        let resultUnit;

        if (unit === 'celsius') {
            convertedTemperature = (temperature * 9/5) + 32;
            resultUnit = 'Fahrenheit (°F)';
        } else {
            convertedTemperature = (temperature - 32) * 5/9;
            resultUnit = 'Celsius (°C)';
        }

        resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
    });
});
