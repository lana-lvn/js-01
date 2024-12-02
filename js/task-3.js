"use strict"; 

function getElementWidth(content, padding, border) {

    const contentNum = Number.parseFloat(content);
    const paddingNum = Number.parseFloat(padding) * 2;
    const borderNum = Number.parseFloat(border) * 2;

    return  contentNum + paddingNum + borderNum;

};
 


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


// function calcBMI(weight, height) {

//     let weightNum = weight.replace(",", ".");
//     weightNum = Number.parseFloat(weightNum);

//     console.log(weightNum);
    
//     let heightNum = height.replace(",", ".");
//     heightNum = Number.parseFloat(heightNum);
    
//       console.log(heightNum);

//     const index = weightNum / (heightNum ** 2);

//     return index.toFixed(1);

// }

// const bmi = calcBMI("88,3", "1.75");
// console.log("BMI is: ", bmi);
