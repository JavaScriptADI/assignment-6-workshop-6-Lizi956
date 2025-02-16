// რაოდენობა პროდუქტის
const PRODUCT_COUNT = 50;
//სიცარიელე
const products = [];

// Generate Products
//ფუნქცია,რომელიც აბრუნებს რიცხვებს
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomString(length) {
    let text = ''; //ცარიელი
    for (let i = 0; i < length; i++) {
        if (getRandomInt(0, 100) > 10) //90% შემთხვევითობა
            text += String.fromCharCode(getRandomInt(97, 122));
        else
            text += ' ';
    }
    return text; //დაბრუნება
}

for (let i = 0; i < PRODUCT_COUNT; i++)
    products.push({
        title: getRandomString(getRandomInt(30, 60)),
        price: getRandomInt(500, 5000),
        description: getRandomString(getRandomInt(300, 1000))
    })
