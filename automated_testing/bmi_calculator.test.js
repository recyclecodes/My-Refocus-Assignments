const calculateBMI = require("./bmi_calculator");

test("Check if 1.63m height and 55kg weight is 20.7 and is considered normal", () => 
{
    expect(calculateBMI(1.63, 55)).toBe("Your Body Mass index 20.7. This is considered normal.");
});