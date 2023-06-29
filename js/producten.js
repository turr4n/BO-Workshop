let allperfumes = document.getElementsByClassName("perfume");
let filters = document.getElementsByClassName("filter");


setInterval(function () {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);//laat scrollen na 1.5s

window.scrollTo(0, 0);// window naar boven bij refesh

for (let i = 0; i < filters.length; i++) {
    filters[i].checked = true;
}// zet boxes op checked bij refresh

let Montale = document.getElementById("checkbox-Montale");
let Creed = document.getElementById("checkbox-Creed");
let Chanel = document.getElementById("checkbox-Chanel");

Montale.onchange = function () {
    if (Montale.checked === true) {
        for (let i = 0; i < allperfumes.length; i++) {
            if (allperfumes[i].dataset.category === "Montale") {
                allperfumes[i].style.display = "block";
            }
        }
    }//laat items zien
    else {
        for (let i = 0; i < allperfumes.length; i++) {
            if (allperfumes[i].dataset.category === "Montale") {
                allperfumes[i].style.display = "none";
            }
        }
    }//laat items verdwijnen
}

Creed.onchange = function () {
    if (Creed.checked === true) {
        for (let i = 0; i < allperfumes.length; i++) {
            if (allperfumes[i].dataset.category === "Creed") {
                allperfumes[i].style.display = "block";
            }
        }
    }//laat items zien
    else {
        for (let i = 0; i < allperfumes.length; i++) {
            if (allperfumes[i].dataset.category === "Creed") {
                allperfumes[i].style.display = "none";
            }
        }
    }//laat items verdwijnen
}

Chanel.onchange = function () {
    if (Chanel.checked === true) {
        for (let i = 0; i < allperfumes.length; i++) {
            if (allperfumes[i].dataset.category === "Chanel") {
                allperfumes[i].style.display = "block";
            }
        }
    }//laat items zien
    else {
        for (let i = 0; i < allperfumes.length; i++) {
            if (allperfumes[i].dataset.category === "Chanel") {
                allperfumes[i].style.display = "none";
            }
        }
    }//laat items verdwijnen
}