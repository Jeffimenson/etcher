const container = document.querySelector('.container'); 
const colorPicker = document.querySelector('#color-picker')
const gridToggle = document.querySelector('#grid-toggle'); 

const slider = document.querySelector('#slider');
const sliderResult = document.querySelector('#slider-result'); 

const initialCellAmount = 16; 
generateCells(initialCellAmount); 
addGridToggle(); 

let mouseDown = false; 
generateMouseHoldDetection();
makeSizeSliderFunctional(); 



function makeSizeSliderFunctional(){
    slider.addEventListener('input', (e) => {
        sliderResult.value = slider.value;
        generateCells(slider.value); 
    });

    sliderResult.addEventListener('input', (e) => {
        slider.value = sliderResult.value; 
        generateCells(sliderResult.value); 
    });
}

function generateCells(cellAmount){
    const cellLength = 100 / cellAmount; 
    container.innerHTML = ""; 
    for (let i = 0; i < cellAmount**2; i++){
        let newDiv = document.createElement('div'); 
        newDiv.classList.add('cell'); 

        newDiv.style.height = `${cellLength}%`; 
        newDiv.style.width = `${cellLength}%`; 

        newDiv.addEventListener('pointerdown', draw); 
        newDiv.addEventListener('pointerover', holdDraw); 

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


