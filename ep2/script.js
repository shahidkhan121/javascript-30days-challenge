const countDisplay = document.getElementById('main')
const IncrementBtn = document.getElementById('IncrementBtn')
const decrementBtn = document.getElementById('decrementBtn')
const resetBtn = document.getElementById('resetBtn')
const warningMsg = document.getElementById('warning')


let count = 0;

IncrementBtn.addEventListener('click', () =>{
    // console.log('increment Clicked');
    count++;
    countDisplay.innerText = `Count : ${count}`

    if (count < 0){
        warningMsg.innerHTML = 'Warning : you cannot Decress Further'
        count= 0
    }
    else if(count >= 0){
        warningMsg.innerHTML = ''
    }
    
    
    
})
decrementBtn.addEventListener('click', () =>{
    console.log('decrement Clicked');
    count--;
    countDisplay.innerText = `Count : ${count}`

    if (count < 0){
        warningMsg.innerHTML = 'Warning : you cannot Decress Further'
        warningMsg.style.color = 'red'
        count= 0
    }
    else if(count >= 0){
        warningMsg.style.display= 'hidden'
    }
    
    
})
resetBtn.addEventListener('click', () =>{
    // console.log('reset Clicked');
    count = 0;
    countDisplay.innerText = `Count : ${count}`
     if (count >= 0){
        warningMsg.innerHTML =''
     }
    
})



// // DOM elements
// const countDisplay = document.getElementById('main');
// const incrementBtn = document.getElementById('incrementBtn');
// const decrementBtn = document.getElementById('decrementBtn');
// const resetBtn = document.getElementById('resetBtn');
// const warningMsg = document.getElementById('warning');

// let count = 0;

// // Utility function to update the count display
// const updateCountDisplay = () => {
//     countDisplay.textContent = `Count: ${count}`;
// };

// // Utility function to show/hide warning message
// const updateWarningMessage = (message = '') => {
//     warningMsg.textContent = message;
//     warningMsg.style.color = message ? 'red' : ''; // Apply color only if there is a message
// };

// // Increment button handler
// incrementBtn.addEventListener('click', () => {
//     count++;
//     updateCountDisplay();
//     updateWarningMessage(); // Clear warning if count is valid
// });

// // Decrement button handler
// decrementBtn.addEventListener('click', () => {
//     if (count > 0) {
//         count--;
//     } else {
//         updateWarningMessage('Warning: You cannot decrease further');
//     }
//     updateCountDisplay();
// });

// // Reset button handler
// resetBtn.addEventListener('click', () => {
//     count = 0;
//     updateCountDisplay();
//     updateWarningMessage(); // Clear warning on reset
// });

