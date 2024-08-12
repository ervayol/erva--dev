/*   RESİMSİZ EKLEME:
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, productName, productPrice) {
    let product = {
        id: productId,
        name: productName,
        price: productPrice
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = "sepet.html"; // Sepet sayfasına yönlendirme
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${item.price} TL`;
        cartItems.appendChild(listItem);
    });
}

// Sepet sayfası yüklendiğinde sepeti güncelle
if (window.location.pathname.endsWith('sepet.html')) {
    updateCart();
}
*/

//---RESİMLİ EKLEME----
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, productName, productPrice, productImage) {
    let product = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Ürün sepete eklenmiştir!");   // üstten gelen bildirim
    window.location.href = "sepet.html"; // Sepet sayfasına yönlendirme
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${item.image}" class="card-img" alt="${item.name}">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.price} TL</p>
                    <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Sil</button>
                  </div>
                </div>
              </div>
            </div>
        `;
        cartItems.appendChild(listItem);
    });
}

// Sepet sayfası yüklendiğinde sepeti güncelle
if (window.location.pathname.endsWith('sepet.html')) {
    updateCart();
}


