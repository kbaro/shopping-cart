function addToCart(element) {
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    if(parseInt(quantity) > 0) {
        price = price.substring(1);
        price = parseInt(price);
        let total = price * parseInt(quantity);
        

        element.innerText = 'Dodano';
        element.setAttribute('disabled', 'true');
    } else {
        alert('Odaberi količinu');
    }
}  