function createGrid (gridSize) {
	while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
	grid.style["grid-template-columns"] = "repeat("+gridSize+", 1fr)";
	grid.style["grid-template-rows"] = "repeat("+gridSize+", 1fr)";
	for (i=0; i < gridSize; i++) {
		for (j=0; j < gridSize; j++) {
			const gridCell = document.createElement('div')
			gridCell.style.background='#FFFFFF'
			gridCell.addEventListener('mouseover', function(e) {
				darkenCell(e.target)
			});
			gridCell.classList.add('cell')
			grid.appendChild(gridCell)
		}
	}
	container.appendChild(grid);
}

function darkenCell(gridCell) {
	let cellColor = gridCell.style.background
	const shadeValue = (255 / 10)
	cellColor= cellColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	let rValue = parseInt(cellColor[1])-shadeValue
	let gValue = parseInt(cellColor[2])-shadeValue
	let bValue = parseInt(cellColor[3])-shadeValue
  gridCell.style.background = 'rgb('+rValue+', '+gValue+', '+bValue+')'
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function clearGrid (grid) {
	for (let i=0; i < grid.childNodes.length; i++) {
		grid.childNodes[i].style.background='white';
	}
}

let gridSize = 16
const container = document.querySelector('#container');
const grid = document.createElement('div');
grid.classList.add('grid')
createGrid(gridSize)
const btn = document.querySelector('#reset');
btn.addEventListener('click', () => {
  //clearGrid(grid)
	createGrid (prompt('Squares per side?'))
});
console.log(grid.childNodes)
