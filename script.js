/**
 * PARTIE STYLE
 * ---------------------------------------------------------------
 */

const divClicked = (event) => {
    if(event.target.classList.contains("divClicked")) event.target.classList.remove("divClicked");
    else event.target.classList.add("divClicked");
};


/**
 * PARTIE CONVERSION
 * ---------------------------------------------------------------
 */

/* Constante pi */
const pi = 3.141592653589793238562643383279;

/* Fonction qui converti les degrés en radiants, et les radiants en degrés

    Fonctionnement:
    - Si on veut obtenir des radiants, on les définis comme "null" lorsqu'on appelle la fonction, exemple : 
      convertFormule(25, null) va convertir 25° en radiants

    - Si on veut obtenir des degrés, on les définis comme "null" lorsqu'on appelle la fonction, exemple : 
      convertFormule(null, 4.3) va convertir 4.3 radiants en degrés
*/
const convertFormule = (degres, radiants) => {
    let degresToReturn = 0;
    let radiantsToReturn = 0;

    if(radiants === null) radiantsToReturn = (degres*2*pi)/360;
    if(degres === null) degresToReturn = (radiants*360)/(2*pi);

    return { degresToReturn, radiantsToReturn }
}

/* Fonction pour vérifier les inputs 

    Si les degrés sont <0 ou >360, on met 0 pour <0 et 360 pour >360
    Si les radiants sont <0 ou >2*pi, on met 0 pour <0 et 2*pi pour >2*pi
*/
const checkEntry = (target) => {
    if (target.id === "degresInput") {
        const value = target.value;

        if (value < 0) target.value = 0;
        if (value > 360) target.value = 360;
    }
    if (target.id === "radiantsInput") {
        const value = target.value;

        if (value < 0) target.value = 0;
        if (value > (2*pi)) target.value = (2*pi);
    }
};

/* On "écoute" chaque input pour savoir quand est-ce qu'une touche est pressée

    Si pressée, on commence déjà par vérifier les valeurs avec checkEntry
    On convertit ensuite en nombre, et si la valeur entrée n'est pas un nombre, on filtre pour ne laisser que les nombres
    Ensuite on covnerti la valeur de l'input dans le second en passant par la fonction convertFormule()
*/
document.getElementById("degresInput").addEventListener("input", function (event) {
    checkEntry(event.target)
    if (isNaN(event.target.value)) event.target.value = event.target.value.split("").filter(element => !isNaN(element));

    let entry = Number(event.target.value);

    document.getElementById("radiantsInput").value = convertFormule(entry, null).radiantsToReturn;
});
document.getElementById("radiantsInput").addEventListener("input", function (event) {
    checkEntry(event.target)
    if (isNaN(event.target.value)) event.target.value = event.target.value.split("").filter(element => !isNaN(element));

    let entry = Number(event.target.value);

    document.getElementById("degresInput").value = convertFormule(null, entry).degresToReturn;
});