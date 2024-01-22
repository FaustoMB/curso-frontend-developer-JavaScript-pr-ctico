const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetailContainer')


menuCarIcon.addEventListener('click',toogleCarAside);
navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu () {
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    
    if (isAsideOpen){
        shoppingCartContainer.classList.add('inactive')
    }
    productDetailContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive')
    
}

function toggleMobileMenu () {
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
    
    if (isAsideOpen){
        shoppingCartContainer.classList.add('inactive')
    }

    productDetailContainer.classList.add('inactive');

    mobileMenu.classList.toggle('inactive')
}

function toogleCarAside () {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive')

    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive')
    }

    if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive')
    }

    if (isProductDetailContainerOpen){
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')

}

function openProductDetailAside() {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click',openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('div');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
}