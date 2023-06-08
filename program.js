const container = document.querySelector('.container'); 
const colorPicker = document.querySelector('#color-picker')
const gridToggle = document.querySelector('#grid-toggle'); 

const slider = document.querySelector('#slider');
const sliderResult = document.querySelector('#slider-result'); 


generateCells(); 
addGridToggle(); 

let mouseDown = false; 
generateMouseHoldDetection();

slider.addEventListener('input', (e) => {
    sliderResult.value = slider.value;
});

sliderResult.addEventListener('input', (e) => {
    slider.value = sliderResult.value; 
});


function generateCells(){
    const cellAmount = slider.value; /*Specifically per row AND height */
    const containerLength = container.offsetHeight; /*Height should always equal width based on stylesheet*/ 
    const cellLength = container / cellAmount; 
    container.innerHTML = ""; 
    for (let i = 0; i < cellAmount**2; i++){
        let newDiv = document.createElement('div'); 
        newDiv.classList.add('cell'); 

        newDiv.style.height = `${cellLength}%`; 
        newDiv.style.width = `${cellLength}%`; 

        newDiv.addEventListener('click', draw); 
        newDiv.addEventListener('mouseover', holdDraw); 

        container.appendChild(newDiv);  
    }
}

function addGridToggle(){
    gridToggle.addEventListener('change', (e) => {
        container.style.border = (gridToggle.checked) ? 'solid 1px black' : 'none'; 
    });
}

function generateMouseHoldDetection(){
    window.addEventListener('pointerdown', () => {
        mouseDown = true; 

    }); 
    window.addEventListener('pointerup', () => {
        mouseDown = false; 
    })
}

function draw(){
    this.style.backgroundColor = colorPicker.value; 
}

function holdDraw(){
    if(mouseDown){
        this.style.backgroundColor = colorPicker.value; 
    }
}


