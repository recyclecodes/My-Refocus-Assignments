// Write a simple code that calculates a person's BMI or Body Mass Index
// Height should be in meters
// Weight should be in kilograms


function calculateBMI(height, weight) {
    let BMI = (weight / (height * height)).toFixed(1);

    if (BMI < 18.5) {
        return "Your Body Mass index " + BMI + ".This is considered underweight.";
    } else if ((BMI > 18.5) && (BMI < 24.9)) {
        return "You Body Mass index " + BMI + ".This is considered normal.";
    } else if ((BMI > 25) && (BMI < 29.9)) {
        return "Your Body Mass index " + BMI + ".This is considered overweight.";
    } else {
        return "Your Body Mass index " + BMI + ".This is considered obese.";
    }
}

console.log(calculateBMI(1.63, 55)) //correct
console.log(calculateBMI(1.53, 60)) //correct

/** BMI = weight(kg)/(height*height)(m)
 * 55/(1.63*1.63) = 55/2.6569 = 20.70081674131507
 * 60/(1.53*1.53) = 60/2.3409 = 25.63116749967961
 */