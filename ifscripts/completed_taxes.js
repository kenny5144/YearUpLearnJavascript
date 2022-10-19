var filingStatus=("single") ;

var payRate = 10;
var hoursWorked= 45;
var grossPay = payRate * hoursWorked
var annualIncome= grossPay * 52
var taxWhitholded=0;
console.log(annualIncome)


if (filingStatus === "single" && annualIncome <= 12000){
    var annualTax =(annualIncome* .05) - taxWhitholded
    console.log(annualTax)
}else if (filingStatus === "single" && annualIncome >= 13000 && annualIncome <= 24999.99){
    var annualTax =(annualIncome* .1 )- taxWhitholded
    console.log(annualTax)
}else if (filingStatus === "single" && annualIncome >= 24999.99 && annualIncome <= 74999.99){
    var annualTax =(annualIncome* .15) - taxWhitholded
    console.log(annualTax)

}else if (filingStatus === "single" && annualIncome >= 74999.99){
    var annualTax =(annualIncome* .11) - taxWhitholded
    console.log(annualTax)
}



if (filingStatus === "joint" && annualIncome <= 12000){
    var annualTax =(annualIncome* .0) - taxWhitholded
    console.log(annualTax)
}else if (filingStatus === "joint" && annualIncome >= 13000 && annualIncome <= 24999.99){
    var annualTax =(annualIncome* .06) - taxWhitholded
    console.log(annualTax)
}else if (filingStatus === "joint" && annualIncome >= 24999.99 && annualIncome <= 74999.99){
    var annualTax =(annualIncome* .11) - taxWhitholded
    console.log(annualTax)

}else if (filingStatus === "joint" && annualIncome >= 74999.99){
    var annualTax =(annualIncome* .2) - taxWhitholded
    console.log(annualTax)
}
