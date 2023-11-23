

let nav = document.getElementById ("Warzone")
let navButton = document.getElementById ("Wargame")


let isHidden = true 




function moveNav() {
    if(isHidden) {
        nav.style.transform ="translateX(20vw)"
        isHidden = false 
    } else {
        nav.style.transform ="translateX(-20vw)"
        isHidden = true
    }
    


}


navButton.addEventListener('click',moveNav)