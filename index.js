// add if statements in reset for prompt input handling

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
    const gridSize = prompt('How much rows/columns would you like to have?', 30);
    // put error handling here!
    gridGen(gridSize);
}

const init = () => {
    gridGen(30);
};

init();