// Write a simple code that calculates a person's BMI or Body Mass Index
// Height should be in centimeters
// Weight should be in kilograms


function calculateBMI(height, weight) {
    let BMI = (weight / (height * height)).toFixed(1);

    if (BMI < 18.5) {
        return "Your Body Mass index " + BMI + ". This is considered underweight.";
    } else if ((BMI > 18.5) && (BMI < 24.9)) {
        return "Your Body Mass index " + BMI + ". This is considered normal.";
    } else if ((BMI > 25) && (BMI < 29.9)) {
        return "Your Body Mass index " + BMI + ". This is considered overweight.";
    } else {
        return "Your Body Mass index " + BMI + ". This is considered obese.";
    }
}

module.exports = calculateBMI;

