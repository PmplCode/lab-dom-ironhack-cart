// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity > input').value;

  let subtotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotal;
  //... your code goes here

}

function calculateAll() {
  // ITERATION 2
  let arrayProducts = document.querySelectorAll('[class*="product"]');

  let total = 0;

  arrayProducts.forEach((product) => {
    let price = product.querySelector('.price span').innerHTML;
    let quantity = product.querySelector('.quantity > input').value;
    let subtotal = price * quantity;

    return product.querySelector('.subtotal span').innerHTML = subtotal;
  })


  //... your code goes here

  // ITERATION 3
  // let subtotal = Number(document.getElementById("total-value").querySelector("span").innerHTML) + subtotal;

  arrayProducts.forEach((product) => {
    let price = product.querySelector('.price span').innerHTML;
    let quantity = product.querySelector('.quantity > input').value;
    let subtotal = price * quantity;

    total += subtotal;
  })
  document.getElementById("total-value").querySelector('span').innerHTML = total;
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
