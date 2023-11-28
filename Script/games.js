/*Récupération des élèments html*/

let menu = document.getElementById("menu")
let zone = document.getElementById("gameZone")

/*définit les functions*/

function menuChange() {
    switch(menu.value) {
        case '1':
            fairNumber ()
            break
        case '2':
            ticTacDoe()
            break
        default :
            reset()
            break
    }
   
}
/**
 * Cette fonction déclenche le jeu du juste nombre 
 */
function reset() {
    zone.innerHTML = ""
}

function fairNumber() {
    /*initialiser la zone*/
    reset()
    zone.innerHTML = "<h2>Le jeu du juste nombre</h2>"

    /*on initialiser la variables*/
    let randomTarget = Math.floor(Math.random () * 100) +1
    console.log(randomTarget)
    let count = 0
    
    let playerInput = document.createElement("input")
    playerInput.setAttribute('type','text')
    playerInput.setAttribute('id', 'playerInput')
    playerInput.setAttribute('placeholder','Tapez votre proposition')

    let inputLabel = document.createElement("label")
    inputLabel.setAttribute('for', 'playerInput')
    inputLabel.innerHTML = "Devinez un nombre entre 1 et 100"

    let submitButton = document.createElement("button")
    submitButton.innerHTML = "Valider"
    submitButton.addEventListener('click',compareNumber)

    zone.appendChild(inputLabel)
    zone.appendChild(playerInput)
    zone.appendChild(submitButton)

   function compareNumber() {

    count++

    let userNumber = parseInt(playerInput.value)
    message = `coup n°${count} - proposition : ${userNumber} - `
    
    if(isNaN(userNumber)){
       message = "il faut entre un nombre"
    } else if(userNumber > randomTarget) {
        message += "c'est trop grand"
    } else if( userNumber < randomTarget) {
        message += "c'est trop petit"
    } else {
        message += `bravo vous avez trouvé en ${count} coups`
    }
    
    let newMessage = document.createElement('p')
    newMessage.innerHTML += message
    zone.appendChild(newMessage)

   }



}

function ticTacDoe() {
    reset()
    console.log('jeu de morpion')
    
    let squares = []
    let infoPanel = document.createElement('div')
    infoPanel.classList.add('infoPanel')

    let grid = document.createElement('div')
    grid.classList.add('grid')

    zone.appendChild(infoPanel)
    zone.appendChild(grid)
    zone.classList.add('ttdZone')

    /*creation de la grille*/

    for(let i=0; i<9; i++) {
        let square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square)

    }

    for(let i=0; i<9; i++) {
        squares[i].addEventListener('click',squareClick.bind(squares[i]))
    }

    console.log(squares)

    function squareClick() {
        this.style.backgroundImage = 'url("../assets/rond.png")'
    }
}
/*on configure les évènements*/

menu.addEventListener("change", menuChange)
