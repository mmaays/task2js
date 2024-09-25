var registerform = document.querySelector(".registerform");
var nameInput = document.querySelector("#name");
var descriptionInput = document.querySelector("#description");
var priceInput = document.querySelector("#price");

var products = [];

registerform.onsubmit = function (e) {

    e.preventDefault();

    var product = {
        name: nameInput.value,
        description: descriptionInput.value,
        price: priceInput.value,

    };

    products.push(product);

    printData();

}



function printData() {

    var data = ``;

    for (var i = 0; i < products.length; i++) {

        data+= `
                 <tr>
                <td>${products[i].name}</td>
                <td>${products[i].description}</td>
                <td>${products[i].price}</td>
                </tr>
                `;

    }

document.querySelector("tbody").innerHTML=data;

}
