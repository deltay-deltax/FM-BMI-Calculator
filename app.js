const h = document.getElementById("height");
const w = document.getElementById("weight");
const metricRadio = document.getElementById("unit");
const imperialRadio = document.getElementById("unit1");
const resultDiv = document.querySelector('.result');

function displayWelcomeMessage() {
    resultDiv.innerHTML = `<p class="welcome">Welcome!</p>
                           <p class="sub-welcome">Enter your height and weight and you will see your BMI results here.</p>`;
}

function displayMessage(bmi) {
    let message;
    if (bmi < 18.5) {
        message = "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        message = "You have a healthy weight.";
    } else {
        message = "You are overweight.";
    }
    return `<p class="welcome">Your BMI is ${bmi.toFixed(2)}</p>
            <p class="sub-welcome">${message}</p>`;
}

function calculateBMI(height, weight, isMetric) {
    let bmi;
    if (isMetric) {
        const heightInMeters = height / 100;
        bmi = weight / (heightInMeters * heightInMeters);
    } else {
        bmi = (weight / (height * height)) * 703; 
    }
    return bmi;
}

function handleInput(event) {
    if (event.keyCode === 13) {
        const heightValue = parseFloat(h.value);
        const weightValue = parseFloat(w.value);
        if (!isNaN(heightValue) && !isNaN(weightValue) && heightValue > 0 && weightValue > 0) {
            const isMetric = metricRadio.checked;
            const bmi = calculateBMI(heightValue, weightValue, isMetric);
            resultDiv.innerHTML = displayMessage(bmi);
        }
    }
}

                               // Initialize placeholders and display welcome message
metricRadio.addEventListener("change", function() {
    h.placeholder = "cm";
    w.placeholder = "kg";
    displayWelcomeMessage();
});

imperialRadio.addEventListener("change", function() {
    h.placeholder = "inch";
    w.placeholder = "pounds";
    displayWelcomeMessage();
});


metricRadio.addEventListener("change", function() {
    h.value = ""; // Clear height input
    w.value = ""; // Clear weight input
    h.placeholder = "cm";
    w.placeholder = "kg";
    displayWelcomeMessage();
});

imperialRadio.addEventListener("change", function() {
    h.value = ""; // Clear height input
    w.value = ""; // Clear weight input
    h.placeholder = "inch";
    w.placeholder = "pounds";
    displayWelcomeMessage();
});

// Event listener for height and weight inputs
h.addEventListener("keypress", handleInput);
w.addEventListener("keypress", handleInput);
