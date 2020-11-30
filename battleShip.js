const battleShip = document.getElementById('battleShip')

// let idCell


function createBoard() {
    // lentele
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");

    // visi laukeliai
    for (let i = 0; i < 10; i++) {
        // lenteles eilutes
        let row = document.createElement("tr");

        for (let j = 0; j < 10; j++) {
            //lenteles stulpeliai
            let cell = document.createElement("td");

            // cell.addEventListener('click', shoot)
            //id pirmas skaicius=row, antras skaicius=column
            cell.setAttribute('id', `${i}${j}`)
            // idCell = cell
            // console.log(idCell)
            cell.addEventListener('click', shoot)
            // var cellText = document.createTextNode("cell in row " + i + ", column " + j);
            // cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    battleShip.appendChild(table);


}

createBoard()

// let from1 = {
//     place1: '00',
//     place2: '41',
//     place3: '79',
//     place4: '08'
// }
// let from2 = {
//     place1: ['21', '22'],
//     place2: ['62', '72'],
//     place3: ['91', '92']
// }
// let from3 = {
//     place1: ['54', '55', '56'],
//     place2: ['94', '95', '96'],
// }
// let from4 = ['35', '36', '37', '38']


let ships = ['00', '41', '79', '08', '21', '22', '62', '72', '91', '92', '54', '55', '56', '94', '95', '96', '35', '36', '37', '38']

console.log(ships)


function createShip() {
    // shipArr.map(item =>)
    //1*4, 2*3, 3*2, 4*1
    let shipArr = [{name: 'one', size: 1, quantity: 4}, {name: 'two', size: 2, quantity: 3},
        {name: 'three', size: 3, quantity: 2}, {name: 'four', size: 4, quantity: 1}]

}

createShip()


let clickedCellId = []
console.log(clickedCellId)

function shoot(event) {
    let idCell = event.target.id
    clickedCellId.push(idCell)
    event.target.style.backgroundColor = 'lightgray'
    console.log(clickedCellId)
    for (let i = 0; i < ships.length; i++) {
        if (event.target.id === ships[i]) {
            event.target.style.backgroundColor = 'red'
        }
    }
}