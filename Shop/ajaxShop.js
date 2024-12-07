fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById('product-container');

    data.products.forEach(product => {
      const saleDiv = product.onSale ? '<div class="sale"><span class="sale-text">Sale!</span></div>' : '';

      const productCard = `
        <div class="card card7">
          <div class="product-image">
            ${saleDiv}

            <img src="${product.image}" class="product">
          </div>
          <div class="product-content">
            <div class="product-name">
              <h3 class="flowerName">${product.name}</h3>
            </div>
            <div class="product-rating">
              ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <div class="product-price">
              <p class="price">$${product.price.toFixed(2)} <del>$${product.oldPrice.toFixed(2)}</del></p>
              <div class="add"><a href="${product.addToCartLink}">ADD TO CART</a></div>
            </div>  
          </div>
        </div>
      `;
      productContainer.innerHTML += productCard;
    });
      //  // Add event listeners for the Add to Cart buttons
      //  const addToCartButtons = document.querySelectorAll('.add-to-cart');
      //  addToCartButtons.forEach(button => {
      //    button.addEventListener('click', function (event) {
      //      event.preventDefault();
      //      const productId = this.dataset.id;
      //      addToCart(productId);
      //    });
      //  });
});

// function addToCart(productId) {
//   // Retrieve the product from the JSON file or data structure
//   fetch('products.json')
//     .then(response => response.json())
//     .then(data => {
//       const product = data.products.find(p => p.id === productId);
//       if (product) {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         console.log(cart);
        
//         const productInCart = cart.find(p => p.id === productId);
//         if (productInCart) {
//           productInCart.quantity += 1;
//         } else {
//           product.quantity = 1;
//           cart.push(product);
//         }
//         localStorage.setItem('cart', JSON.stringify(cart));
//         alert(`${product.name} added to cart!`);
//       }
//     });
// }


// document.addEventListener('DOMContentLoaded', () => {
//   displayCartItems();
// });

// function displayCartItems() {
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   const tableContent = document.getElementById('table-content');

//   tableContent.innerHTML = ''; // Clear the current content

//   cart.forEach(product => {
//     const row = `
//       <tr>
//         <td><img src="${product.image}" alt="${product.name}"></td>
//         <td>${product.name}</td>
//         <td class="product-price">$${product.price.toFixed(2)}</td>
//         <td>
//           <div class="quantity">
//             <div class="minus" onclick="updateQuantity('${product.id}', -1)">-</div>
//             <div class="counter">${product.quantity}</div>
//             <div class="plus" onclick="updateQuantity('${product.id}', 1)">+</div>
//           </div>
//         </td>
//         <td class="product-total">$${(product.price * product.quantity).toFixed(2)}</td>
//         <td><i class="fa-regular fa-trash-can fa-2xl" onclick="removeFromCart('${product.id}')"></i></td>
//       </tr>
//     `;
//     tableContent.innerHTML += row;
//   });

//   updateCartTotal();
// }

// function updateQuantity(productId, change) {
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   const product = cart.find(p => p.id === productId);
//   if (product) {
//     product.quantity += change;
//     if (product.quantity <= 0) {
//       removeFromCart(productId);
//     } else {
//       localStorage.setItem('cart', JSON.stringify(cart));
//       displayCartItems();
//     }
//   }
// }

// function removeFromCart(productId) {
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   cart = cart.filter(p => p.id !== productId);
//   localStorage.setItem('cart', JSON.stringify(cart));
//   displayCartItems();
// }

// function updateCartTotal() {
//   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
//   document.querySelector('.total-price .t').textContent = `$${total.toFixed(2)}`;
// }


  