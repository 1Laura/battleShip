const battleShip = document.getElementById('battleShip')

let idCell

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

            cell.addEventListener('click', shoot)
            //id pirmas skaicius=row, antras skaicius=column
            cell.setAttribute('id', `${i}${j}`)
            idCell = cell
            console.log(idCell)

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


function createShip() {

}


createShip()

function shoot(event) {

    console.log(event)
}