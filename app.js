function quentityAndPrice(product, plus, productValue, price) {
    let inputQuentity = document.getElementById(product);
    let inputNumber = inputQuentity.value;
    let amount = document.getElementById(productValue);
    if (plus == true) {
        inputQuentity.value = parseInt(inputNumber) + 1;
        amount.innerText = parseInt(inputQuentity.value) * price;
    } else if (inputNumber > 0) {
        inputQuentity.value = inputNumber - 1;
        amount.innerText = parseInt(inputQuentity.value) * price;
    }


    let phonePrice = document.getElementById('phone-price').innerText;
    let intPhonePrice = parseFloat(phonePrice);

    let casePrice = document.getElementById('case-price').innerText;
    let intCasePrice = parseFloat(casePrice);

    let total = document.getElementById('total-price');
    total.innerText = intPhonePrice + intCasePrice;


    let tax = document.getElementById('tax-price');
    tax.innerText = Math.ceil(parseFloat(total.innerText) * .05);

    document.getElementById('total').innerText = parseFloat(total.innerText) + parseFloat(tax.innerText);
}







document.querySelector('#quentity-down').addEventListener('click', function () {
    quentityAndPrice('phone-quentity', false, "phone-price", 1219);

})
document.querySelector('#quentity-up').addEventListener('click', function () {

    quentityAndPrice('phone-quentity', true, "phone-price", 1219);
})

document.querySelector('#case-quentity-down').addEventListener('click', function () {
    quentityAndPrice('case-quentity', false, "case-price", 59);

})
document.querySelector('#case-quentity-up').addEventListener('click', function () {

    quentityAndPrice('case-quentity', true, "case-price", 59);
})

