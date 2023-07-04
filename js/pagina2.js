let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");
let select = document.getElementById("price-filter");


setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);//laat scrollen na 1.5s

window.scrollTo(0, 0);//zet window naar boven bij refresh

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}//zet checkboxes op checked bij refresh

select.onchange = function () {


    value = select.value;
    switch (value) {
        case "-":
            for (let i = 0; i < allGames.length; i++) {
                allGames[i].style.display = "block";
            }
            break;
        
        case "120":
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.prijs === "120") {
                    allGames[i].style.display = "block";
                }
                if (
                    allGames[i].dataset.prijs === "280" ||
                    allGames[i].dataset.prijs === "299"
                ) {
                    allGames[i].style.display = "none";
                }
            }
            break;

        case "280":
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.prijs === "280") {
                    allGames[i].style.display = "block";
                }
                if (
                    allGames[i].dataset.prijs === "120" ||
                    allGames[i].dataset.prijs === "299"
                ) {
                    allGames[i].style.display = "none";
                }
            }
            break;

        case "299":
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.prijs === "299") {
                    allGames[i].style.display = "block";
                }
                if (
                    allGames[i].dataset.pprijs=== "120" ||
                    allGames[i].dataset.prijs === "280"
                ) {
                    allGames[i].style.display = "none";
                }
            }
            break;
    }
};