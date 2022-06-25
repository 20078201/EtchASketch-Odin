// let boxNames = ['Box 1', 'Box 2', 'Box 3', 'Box 4', 'Box 5', 'Box 6',
// 'Box 7', 'Box 8', 'Box 9', 'Box 10', 'Box 11', 'Box 12', 'Box 13', 'Box 14',
// 'Box 15', 'Box 16'] 


function createGrid(size, element) {
    for (let i = 0; i < size*size; i++) {
        let div = document.createElement("div")
        div.classList.add("box")
        div.addEventListener('mouseover', () => {
            div.classList.add('box-hover')
        })
        div.addEventListener('mouseout', () => {
            div.classList.remove('box-hover')
        })
        element.appendChild(div)
    }
}
// Remove current grid on screen
function removeGrid() {
    const currentGrid = document.querySelectorAll('.box') // create a node list of boxes on screen
    for (let i = 0; i < currentGrid.length; i++) {
        const gridElement = document.querySelector('.box')
        gridElement.parentElement.removeChild(gridElement)           
    }
}

// Get element from html
const container = document.querySelector('.container')
const containerGrid = document.querySelector('.containerGrid')

// Create button for making new grid
const createGridBtn = document.createElement('button')
createGridBtn.textContent = 'Customize grid size'
createGridBtn.addEventListener('click', () => {
    grid_size = prompt('Enter a number to create your grid (1 - 100)', '1')
    containerGrid.setAttribute('style', `grid-template-columns: repeat(${grid_size}, 1fr);`)
    removeGrid()
    createGrid(grid_size, containerGrid)
})

container.append(createGridBtn)
createGrid(4, containerGrid)


