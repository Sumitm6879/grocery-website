let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    userLogin.classList.remove('active');
}

let shoppingCart = document.querySelector('.shoping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    userLogin.classList.remove('active');

}

let userLogin = document.querySelector('.login-form');

document.querySelector('#user-btn').onclick = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    userLogin.classList.toggle('active');
}
