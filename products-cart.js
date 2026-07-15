let cart = [];
let cartDiv = document.getElementById("cart");

// Prix unitaires des produits
const unitPrices = {
    "Tapis Amazigh": 150,
    "Bracelet Argent": 50,
    "Poterie Kabyle": 80,
    "Collier Amazigh": 60
};

// Dès que la page charge
document.addEventListener("DOMContentLoaded", function() {
    // Ajouter l'événement sur chaque champ quantité
    document.querySelectorAll(".qty").forEach(input => {
        input.addEventListener("input", function() {
            updateProductPrice(this);
        });
    });
});

// Mettre à jour le prix d'un produit quand la quantité change
function updateProductPrice(qtyInput) {
    let productDiv = qtyInput.parentElement;
    let productName = productDiv.querySelector("h3").textContent;
    let qty = parseInt(qtyInput.value);
    
    // Calculer le prix total
    let unitPrice = unitPrices[productName];
    let totalPrice = unitPrice * qty;
    
    // Mettre à jour l'affichage
    let priceElement = productDiv.querySelector(".price-total");
    priceElement.textContent = totalPrice;
}

// Ajouter au panier
document.querySelectorAll(".add").forEach(btn => {
    btn.addEventListener("click", function() {
        let productDiv = this.parentElement;
        let name = productDiv.querySelector("h3").textContent;
        let qty = parseInt(productDiv.querySelector(".qty").value);
        let price = unitPrices[name];
        
        cart.push({ name, price, qty });
        updateCart();
    });
});

// Mettre à jour l'affichage du panier
function updateCart() {
    cartDiv.innerHTML = "";
    let total = 0;

    cart.forEach((item, i) => {
        let sub = item.qty * item.price;
        total += sub;

        cartDiv.innerHTML += `
            <p>
                ${item.name} — ${item.qty} × ${item.price} TND =
                <strong>${sub} TND</strong>
                <button onclick="removeItem(${i})">X</button>
            </p>
        `;
    });

    cartDiv.innerHTML += `<h3>Total : ${total} TND</h3>`;
}

function removeItem(i) {
    cart.splice(i, 1);
    updateCart();
}

document.getElementById("validateOrder").onclick = function () {
    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }
    alert("Commande validée !");
};