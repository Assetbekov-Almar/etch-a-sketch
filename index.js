const container = document.getElementById('container');

const gridGen = (rc) => {
    container.style.setProperty('--grid-columns', rc);
    container.style.setProperty('--grid-rows', rc);
    for (c = 0; c < rc * rc; c++) {
       let cell = document.createElement('div');
       cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
       });
       container.appendChild(cell).className = 'grid-cells'
    };
}

const reset = () => {
    const cell = [ ...document.getElementsByClassName('grid-cells') ];
    let childRmv = (item) => {
        container.removeChild(item);
    };
    cell.forEach(childRmv); 
    let sizePrompt = prompt('How much rows/columns would you like to have?', 30);   
    let numCheck = isNaN(sizePrompt);
    if (sizePrompt === null || sizePrompt === "" || numCheck === true) {
        alert('Please insert a number after resetting. for now, we\'ll default to 30');
        gridGen(30);
    } else {
        gridGen(sizePrompt);
    };
};

const init = () => {
    gridGen(30);
};

init();