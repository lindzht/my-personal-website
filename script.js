// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

const aboutStar = document.querySelector("#about .star");
const tarotStar = document.querySelector("#tarot .star");
const artStar = document.querySelector("#artwork .star");
const ghStar = document.querySelector("#github .star");
const star = document.querySelectorAll(".star");
const navigation = document.querySelector("#nav-container");
const aboutSection = document.querySelector("#about");
const showAbout = document.querySelector(".show-about");
const tarotDeck = document.querySelector(".tarot-array");
const circleInsideColor = document.querySelector(".circle-inside");
const circleBorderColor = document.querySelector(".circle-border");

const img = document.createElement("img");
const p = document.createElement("p");


function circleColorDefault (){
    circleInsideColor.classList.remove("circle-inside-dark");
    circleBorderColor.classList.remove("circle-border-dark");
    circleInsideColor.classList.add("circle-inside");
    circleBorderColor.classList.add("circle-border");
}


function circleColorDark (){
    circleInsideColor.classList.add("circle-inside-dark");
    circleBorderColor.classList.add("circle-border-dark");
    circleInsideColor.classList.remove("circle-inside");
    circleBorderColor.classList.remove("circle-border");
};

function navTextChange (title){
    title.classList.add("show-nav-text");
}


function mouseOut(object){
    object.textContent = "✴";
    object.classList.add("star");
    object.classList.remove("show-nav-text");
}

function starClickColorChange (object){
    object.classList.add("star-click");
    object.classList.remove("star");
}

function starClickColorDefault (object){
    object.classList.remove("star-click");
    object.classList.add("star");
}

aboutStar.addEventListener("mouseover", function(){
        aboutStar.textContent = "about"; 
        navTextChange(aboutStar);
});

aboutStar.addEventListener("mouseout", function (){
    mouseOut(aboutStar);
});

tarotStar.addEventListener("mouseover", function(){
    tarotStar.textContent = "tarot card"; 
    navTextChange(tarotStar);
});

tarotStar.addEventListener("mouseout", function (){
    mouseOut(tarotStar);
});

artStar.addEventListener("mouseover", function(){
    artStar.textContent = "artwork"; 
    navTextChange(artStar);
});

artStar.addEventListener("mouseout", function (){
    mouseOut(artStar);
});

ghStar.addEventListener("mouseover", function(){
    ghStar.textContent = "github";
    navTextChange(ghStar); 
});

ghStar.addEventListener("mouseout", function (){
    mouseOut(ghStar);
    ghStar.classList.add("star");
});


aboutStar.addEventListener("click", function(){
    if (showAbout.classList.contains("hide")){
        showAbout.classList.remove("hide");
        circleColorDark();
        starClickColorChange(aboutStar)
        starClickColorChange(tarotStar)
        starClickColorChange(artStar)
        starClickColorChange(ghStar)
    } else (
        showAbout.classList.add("hide"),
        circleColorDefault(),
        starClickColorDefault(aboutStar),
        starClickColorDefault(tarotStar),
        starClickColorDefault(artStar),
        starClickColorDefault(ghStar)
    )
})


tarotDeck.textContent = [];
tarotDeck[0] = img["src"] = "./images/death.png"
tarotDeck[1] = img["src"] = "./images/devil.png"
tarotDeck[2] = img["src"] = "./images/emporer.png"
tarotDeck[3] = img["src"] = "./images/empress.png"
tarotDeck[4] = img["src"] = "./images/fool.png"
tarotDeck[5] = img["src"] = "./images/hanged-man.png"
tarotDeck[6] = img["src"] = "./images/hermit.png"
tarotDeck[7] = img["src"] = "./images/hierophant.png"
tarotDeck[8] = img["src"] = "./images/high-priestess.png"
tarotDeck[9] = img["src"] = "./images/judgement.png"
tarotDeck[10] = img["src"] = "./images/justice.png"
tarotDeck[11] = img["src"] = "./images/king-of-pentacles.png"
tarotDeck[12] = img["src"] = "./images/lovers.png"
tarotDeck[13] = img["src"] = "./images/magician.png"
tarotDeck[14] = img["src"] = "./images/moon.png"
tarotDeck[15] = img["src"] = "./images/star.png"
tarotDeck[16] = img["src"] = "./images/strength.png"
tarotDeck[17] = img["src"] = "./images/sun.png"
tarotDeck[18] = img["src"] = "./images/temperance.png"
tarotDeck[19] = img["src"] = "./images/tower.png"
tarotDeck[20] = img["src"] = "./images/wheel-fortune.png"
tarotDeck[21] = img["src"] = "./images/world.png"


const tarotDescription = [];

tarotDescription[0] = "Endings, change, transformation, transition";
tarotDescription[1] = "Endings, change, transformation, transition";
tarotDescription[2] = "Endings, change, transformation, transition";
tarotDescription[3] = "Endings, change, transformation, transition";
tarotDescription[4] = "Endings, change, transformation, transition";
tarotDescription[5] = "Endings, change, transformation, transition";
tarotDescription[6] = "Endings, change, transformation, transition";
tarotDescription[7] = "Endings, change, transformation, transition";
tarotDescription[8] = "Endings, change, transformation, transition";
tarotDescription[9] = "Endings, change, transformation, transition";
tarotDescription[10] = "Endings, change, transformation, transition";
tarotDescription[11] = "Endings, change, transformation, transition";
tarotDescription[12] = "Endings, change, transformation, transition";
tarotDescription[13] = "Endings, change, transformation, transition";
tarotDescription[14] = "Endings, change, transformation, transition";
tarotDescription[15] = "Endings, change, transformation, transition";
tarotDescription[16] = "Endings, change, transformation, transition";
tarotDescription[17] = "Endings, change, transformation, transition";
tarotDescription[18] = "Endings, change, transformation, transition";
tarotDescription[19] = "Endings, change, transformation, transition";
tarotDescription[20] = "Endings, change, transformation, transition";
tarotDescription[21] = "Endings, change, transformation, transition";


function randomTarotCard (imagearray, descriptionarray){
    let imgIndex = Math.floor(Math.random() * imagearray.length);
    let image = imagearray[imgIndex];
    let description = descriptionarray[imgIndex];
}




// aboutStar.addEventListener("click", function(e){
//     if (showAbout.classList.contains !== "show-about"){
//         circleColorDark();
//         showAbout.classList.add("show-about");
//         let header = document.createElement("h2");
//         let p = document.createElement("p");
//         let img = document.createElement("img");
//         header.textContent = "👋 hey i'm lindsay"
//         p.textContent = "artist + engineer in training"
//         img.src = "./images/IMG_0478_png.png"
//         img.style.width = "300px";
//         showAbout.append(img);
//         showAbout.append(header);
//         showAbout.append(p);
//         starClickColorChange(aboutStar);
//         starClickColorChange(tarotStar);
//         starClickColorChange(artStar);
//         starClickColorChange(ghStar);
//     } else {
//         showAbout.classList.remove("show-about");
//     }
// });
