function inputValue(product, isIncrease, price) {
    //mobile input 
    const productInput = document.getElementById(product + '-number');
    const productValue = productInput.value;
    let productAmount = parseInt(productValue);
    //mobile price
    if (isIncrease == true) {
        productAmount = productAmount + 1;
    }
    else if (productAmount > 0) {
        productAmount = productAmount - 1
    }
    productInput.value = productAmount;
    // console.log(productInput)
    const mobilePrice = document.getElementById(product + '-price');
    const mobilePriceText = mobilePrice.innerText;
    //total mobile price 
    mobilePrice.innerText = productAmount * price;
    calculateTotal()
}

//value input
function calculateInput(product) {
    const productInput = document.getElementById(product);
    const productNumber = productInput.value;
    const productNumberAmount = parseInt(productNumber)
    return productNumberAmount
}
//subtotal , tex, total
function calculateTotal() {
    // const mobileInput = document.getElementById('mobile-number');
    // const mobileNumber = mobileInput.value;
    const mobileNumber = calculateInput('mobile-number') * 1219;
    const caseNumber = calculateInput('case-number') * 59
    const subTotal = document.getElementById('sub-total');
    // const subTotalText = subTotal.innerText;
    const totalSubTotal = mobileNumber + caseNumber;
    subTotal.innerText = totalSubTotal;
    const tex = document.getElementById('tex');
    const totalTex = totalSubTotal / 10;
    tex.innerText = totalTex;
    const totalAmount = document.getElementById('total');
    totalAmount.innerText = Math.round(totalSubTotal + totalTex)

}


//mobile increase and decrease
document.getElementById('mobile-plus').addEventListener('click',
    function () {
        inputValue('mobile', true, 1219)
    })
document.getElementById('mobile-minus').addEventListener('click', function () {
    inputValue('mobile', false, 1219)
})
//case increase and decrease
document.getElementById('case-plus').addEventListener('click',
    function () {
        inputValue('case', true, 59)
    })
document.getElementById('case-minus').addEventListener('click', function () {
    inputValue('case', false, 59)
})