//console.log("Hello world!")//

/*let nomUtilisateur
let ageUtilisateur

nomUtilisateur = prompt ("comment vous appelez-vous?")
ageUtilisateur = prompt ("Quel est votre âge?")

alert(`bonjour ${nomUtilisateur}, vous avez ${ageUtilisateur} ans!`)*/

/*Premier script complet*/

let randomTarget = Math.floor(Math.random () * 100) +1
console.log(randomTarget)

let userNumber = null
let count = 0

while(userNumber != randomTarget) {
    count++
    userNumber = prompt("Devinez un nombre entre 1 et 100")
    
    if(isNaN(userNumber)){
        alert("il faut entre un nombre")
    } else if(userNumber > randomTarget) {
        alert("c'est trop grand")
    } else if( userNumber < randomTarget) {
        alert("c'est trop petit")
    } else {
        alert(`bravo vous avez trouvé en ${count} coups`)
    }
}
