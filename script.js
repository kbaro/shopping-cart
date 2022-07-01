function addToCart(element) {
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    if(quantity > 0) {
       
    }

    cartItems.innerHTML += 'Added ' + name;

    console.log(name);
}