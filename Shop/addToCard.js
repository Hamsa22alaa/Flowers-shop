// let minus = [...document.querySelectorAll('.minus') ]
// let plus = [...document.querySelectorAll('.plus') ]
// let counter = [...document.querySelectorAll('.counter') ]
// let price = [...document.querySelectorAll('.product-price') ]
// let total = [...document.querySelectorAll('.product-total') ]

// console.log();

// for (let i = 0; i < 4; i++) {
//     let count = 0 ;

//     minus[i].addEventListener('click' , ()=>{
//         if(count == 0){
//             count  = 0
//         }else{
//             count-- ;
//         }
//         counter[i].textContent = count
//         let p = Number(price[i].textContent.slice(1)) ;
//         let t = Number(total[i].textContent.slice(1)) ;
//         total[i].textContent = `$ ${p * count}` ;
    
//     })
//     plus[i].addEventListener('click' , ()=>{
       
//             count++ ;
        
//         counter[i].textContent = count;
//         let p = Number(price[i].textContent.slice(1)) ;
//         let t = Number(total[i].textContent.slice(1)) ;
//         total[i].textContent = `$ ${p * count}` ;
    
//     })
    
// }

// Select all the required elements
let minusButtons = document.querySelectorAll('.minus');
let plusButtons = document.querySelectorAll('.plus');
let counters = document.querySelectorAll('.counter');
let prices = document.querySelectorAll('.product-price');
let totals = document.querySelectorAll('.product-total');

// Loop through each product and add event listeners to the buttons
minusButtons.forEach((minusButton, index) => {
    let plusButton = plusButtons[index];
    let counter = counters[index];
    let price = prices[index];
    let total = totals[index];

    let count = 0;

    // Function to update the total price
    const updateTotal = () => {
        let priceValue = parseFloat(price.textContent.slice(1)); // Remove the '$' and convert to a number
        total.textContent = `$ ${priceValue * count}`;
    };

    // Event listener for the minus button
    minusButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            counter.textContent = count;
            updateTotal();
        }
    });

    // Event listener for the plus button
    plusButton.addEventListener('click', () => {
        count++;
        counter.textContent = count;
        updateTotal();
    });
});
