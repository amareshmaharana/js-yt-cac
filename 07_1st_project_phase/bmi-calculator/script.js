const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const results = document.getElementById('result');

    if (weight < 0 || weight === '' || isNaN(weight)) {
        results.innerHTML = 'Please enter valid weight.';
        results.style.color = 'red';
        results.style.fontWeight = 'bold';
        results.style.fontSize = '14px';
    } else if (height < 0 || height === '' || isNaN(height)) {
        results.innerHTML = 'Please enter valid height.';
        results.style.color = 'red';
        results.style.fontWeight = 'bold';
        results.style.fontSize = '14px';
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        // show the result
        results.innerHTML = `<span style="color: black; font-weight: bold; font-size: 15px;">Your BMI is </span><span style="color: blue; font-weight: bold; font-size: 18px;">${bmi}</span>.`;

        let category;

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        document.getElementById('result').innerText = `Your BMI is ${bmi} (${category}).`;
    }
});