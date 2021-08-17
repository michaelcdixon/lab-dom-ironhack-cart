// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  const subTotalValue = price * quantity;
  subtotal.innerText = subTotalValue;
  return subTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productList = [...document.querySelector('.product')];
  let sum = 0;
  for (i = 0; i < productList.productList; i++) {
    updateSubtotal(productList[i]);
    sum = sum + updateSubtotal(productList[i]);
  }

  // ITERATION 3
  //... your code goes here

  const total = document.querySelector('#total-value span');
  total.innerText = sum;
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct(productName) {
  //... your code goes here
  const target = productName.currentTarget;
  console.log('The target to add is:', target);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = [...document.getElementsByClassName('btn-remove')];

  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);

    const createProd = [...document.getElementsByClassName('create-product')];
    createProd.forEach((button) => {
      button.addEventListener('click', createProduct);
    });
  });

  //... your code goes here
});
