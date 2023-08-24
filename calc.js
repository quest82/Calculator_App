const input = document.querySelectorAll('.input')
const computeDisplay = document.querySelector('.calc_computation')
const resultDisplay = document.querySelector('.calc_result')
const clear = document.querySelector('.clear_btn')

let results = null;




// Input Section
function addToDisplay(variables){
    computeDisplay.innerText += variables
} // This function pushes the numbers and operators pressed on to the compute screen

input.forEach(inputs => {
    inputs.addEventListener('click', e => {
        addToDisplay(inputs.innerText) 
    })
}) // This event listener takes the clicked input buttons and appends to the compute screen

// Arithmetic Section

    


// Extras  Section

clear.addEventListener('click', () => {
    computeDisplay.innerText = ''
    resultDisplay.innerText = ''
}
) // This event listener clears everything on the display
