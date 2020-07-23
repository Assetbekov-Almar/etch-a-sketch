// make default 16x16 grid
// add mouseover function to change color
// add initial call function for first load
// add reset button with prompt to change grid size

const container = document.getElementById('container');

const gridGen = (rows, columns) => {
    container.style.setProperty('--grid-columns', columns);
    container.style.setProperty('--grid-rows', rows);
    for (c = 0; c < (rows * columns); c++) {
       let cell = document.createElement('div');
       container.appendChild(cell).className = 'grid-cells'
    };
};

const reset = () => {
    let cell = document.getElementsByClassName('grid-cells');
    
};

const init = () => {
    gridGen(16, 16);
};

init();