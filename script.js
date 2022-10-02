
const aboutStar = document.querySelector("#about .star");
const tarotStar = document.querySelector("#tarot .star");
const artStar = document.querySelector("#artwork .star");
const ghStar = document.querySelector("#github .star");
const razzleStar = document.querySelector("#razzle-dazzle .star");
const star = document.querySelectorAll(".star");
const body = document.querySelector("body");




// CIRCLE BACKGROUND IMAGE

const circleInsideColor = document.querySelector(".circle-inside");
const circleBorderColor = document.querySelector(".circle-border");

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


// MOUSE CHANGE

function cursorChange (object){
    object.style.cursor = "cell";
}

// NAV STAR CHANGE

function starClickColorChange (object){
    object.classList.add("star-click");
    object.classList.remove("star");
}

function starClickColorDefault (object){
    object.classList.remove("star-click");
    object.classList.add("star");
}

function mouseOut(object){
    object.textContent = "✴";
    object.classList.add("star");
    object.classList.remove("show-nav-text");
}

function navTextChange (title){
    title.classList.add("show-nav-text");
}

// NAV TEXT MOUSEOVER

aboutStar.addEventListener("mouseover", function(){
        aboutStar.textContent = "about"; 
        navTextChange(aboutStar);
        cursorChange(aboutStar);
});

tarotStar.addEventListener("mouseover", function(){
    tarotStar.textContent = "tarot card"; 
    navTextChange(tarotStar);
    cursorChange(tarotStar);
});

artStar.addEventListener("mouseover", function(){
    artStar.textContent = "artwork"; 
    navTextChange(artStar);
    cursorChange(artStar);
});

ghStar.addEventListener("mouseover", function(){
    ghStar.textContent = "github";
    navTextChange(ghStar); 
    cursorChange(ghStar);
});


// NAV TEXT MOUSEOUT

aboutStar.addEventListener("mouseout", function (){
    mouseOut(aboutStar);
});

tarotStar.addEventListener("mouseout", function (){
    mouseOut(tarotStar);
});

artStar.addEventListener("mouseout", function (){
    mouseOut(artStar);
});

ghStar.addEventListener("mouseout", function (){
    mouseOut(ghStar);
    ghStar.classList.add("star");
});

// RAZZLE DAZZLE 

const razzleStarDiv = document.querySelector(".razzle-dazzle-div")

razzleStar.addEventListener("mouseover", function(){
    cursorChange(razzleStar);
    razzleStar.style.color = "rgb(255, 0, 187)";
});

razzleStar.addEventListener("mouseout", function(){
    razzleStar.style.color = "white";
});

function removeRazzleStar (){
    razzleStarDiv.classList.add("hide");
}

razzleStar.addEventListener("click", function(){
    if (razzleStarDiv.classList.contains("hide")){
        razzleStarDiv.classList.remove("hide")
        starClickColorDefault(aboutStar),
        starClickColorDefault(tarotStar),
        starClickColorDefault(artStar),
        starClickColorDefault(ghStar)
    } else {
        razzleStarDiv.classList.add("hide");
        removeRazzleStar();
        starClickColorDefault(aboutStar),
        starClickColorDefault(tarotStar),
        starClickColorDefault(artStar),
        starClickColorDefault(ghStar)
    }
})

// ABOUT SECTION CLICK EVENT

const showAbout = document.querySelector(".show-about");

aboutStar.addEventListener("click", function(){
    if (showAbout.classList.contains("hide")){
        showAbout.classList.remove("hide");
        tarotDiv.classList.add("hide"),
        removeRazzleStar();
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


// TAROT ARRAY
let tarotDeck = [];
let tarotDescription = [];

function createImages (){
    for (let i = 0; tarotDeck.length < 22; i++){
        let img = document.createElement("img");
        img.style.width = "230px";
        tarotDeck.push(img);
    }
}

function createDescriptions (){
    for (let i = 0; tarotDescription.length < 22; i++){
        let p = document.createElement("p");
        tarotDescription.push(p);
    }
}

createDescriptions();
createImages();

tarotDeck[0].src = "./images/death.png"
tarotDeck[1].src = "./images/devil.png"
tarotDeck[2].src = "./images/emporer.png"
tarotDeck[3].src = "./images/empress.png"
tarotDeck[4].src = "./images/fool.png"
tarotDeck[5].src = "./images/hanged-man.png"
tarotDeck[6].src = "./images/hermit.png"
tarotDeck[7].src = "./images/hierophant.png"
tarotDeck[8].src = "./images/high-priestess.png"
tarotDeck[9].src = "./images/judgement.png"
tarotDeck[10].src = "./images/justice.png"
tarotDeck[12].src = "./images/lovers.png"
tarotDeck[13].src = "./images/magician.png"
tarotDeck[14].src = "./images/moon.png"
tarotDeck[15].src = "./images/star.png"
tarotDeck[16].src = "./images/strength.png"
tarotDeck[17].src = "./images/sun.png"
tarotDeck[18].src = "./images/temperance.png"
tarotDeck[19].src = "./images/tower.png"
tarotDeck[20].src = "./images/wheel-fortune.png"
tarotDeck[21].src = "./images/world.png"
// tarotDeck[22] = img;
// tarotDeck[22].src = 'images/death.png';


tarotDescription[0] = "endings, change, transformation, transition";
tarotDescription[1] = "shadow-self, bad habits, instant gratification, restriction";
tarotDescription[2] = "structure, authority figure, leader, protector";
tarotDescription[3] = "abundance, nurturing, creative expression, beauty";
tarotDescription[4] = "new beginnings, free spirit, potential, opportunity";
tarotDescription[5] = "pause, surrender, letting go, new perspectives";
tarotDescription[6] = "inner guidance, introspection, being alone, authentic self";
tarotDescription[7] = "traditions, beliefs, learning/teaching, practice";
tarotDescription[8] = "intuition, divine knowledge, subconscious mind, spiritual enlightenment";
tarotDescription[9] = "judgement, rebirth, inner calling, higher good";
tarotDescription[10] = "justice, fairness, search for the truth, choice";
tarotDescription[12] = "love, harmony, meaningful relationships, values and beliefs";
tarotDescription[13] = "manifestation, power, inspired action, focus";
tarotDescription[14] = "illusion, internalized fear/anxiety, subconscious, intuition";
tarotDescription[15] = "hope, sense of self, renewal/personal growth, calm";
tarotDescription[16] = "inner strength, courage, determination, confidence";
tarotDescription[17] = "positivity, success, happiness, radiant/warm energy";
tarotDescription[18] = "balance, moderation, patience, guided approach to goals";
tarotDescription[19] = "sudden change, destruction, surrender, re-build";
tarotDescription[20] = "good luck, destiny, turning point, opportunities";
tarotDescription[21] = "accomplishment, completion, wholeness, fulfillment";




// TAROT SECTION CLICK EVENT

let tarotCardDivImg = document.querySelector(".tarot-card");
let tarotCardDivDesc = document.querySelector(".tarot-description");
const tarotDiv = document.querySelector(".tarot-display");

function generateRandomIndex (array){
    let randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex
}


tarotStar.addEventListener("click", function(){
    if (tarotDiv.classList.contains("hide")){
        showAbout.classList.add("hide"),
        tarotDiv.classList.remove("hide");
        removeRazzleStar();
        starClickColorChange(aboutStar)
        starClickColorChange(tarotStar)
        starClickColorChange(artStar)
        starClickColorChange(ghStar)
        circleColorDark();
        let index = generateRandomIndex(tarotDeck);
        tarotCardDivImg.append(tarotDeck[index]);
        tarotCardDivDesc.append(tarotDescription[index]);
    } else {
        tarotDiv.classList.add("hide"),
        circleColorDefault(),
        starClickColorDefault(aboutStar),
        starClickColorDefault(tarotStar),
        starClickColorDefault(artStar),
        starClickColorDefault(ghStar);
        let index = generateRandomIndex(tarotDeck);
        tarotCardDivImg.textContent = "";
        tarotCardDivDesc.textContent = "";
    }
});



// tarotDeck[0] = img["src"] = "./images/death.png"
// tarotDeck[1] = img["src"] = "./images/devil.png"
// tarotDeck[2] = img["src"] = "./images/emporer.png"
// tarotDeck[3] = img["src"] = "./images/empress.png"
// tarotDeck[4] = img["src"] = "./images/fool.png"
// tarotDeck[5] = img["src"] = "./images/hanged-man.png"
// tarotDeck[6] = img["src"] = "./images/hermit.png"
// tarotDeck[7] = img["src"] = "./images/hierophant.png"
// tarotDeck[8] = img["src"] = "./images/high-priestess.png"
// tarotDeck[9] = img["src"] = "./images/judgement.png"
// tarotDeck[10] = img["src"] = "./images/justice.png"
// tarotDeck[11] = img["src"] = "./images/king-of-pentacles.png"
// tarotDeck[12] = img["src"] = "./images/lovers.png"
// tarotDeck[13] = img["src"] = "./images/magician.png"
// tarotDeck[14] = img["src"] = "./images/moon.png"
// tarotDeck[15] = img["src"] = "./images/star.png"
// tarotDeck[16] = img["src"] = "./images/strength.png"
// tarotDeck[17] = img["src"] = "./images/sun.png"
// tarotDeck[18] = img["src"] = "./images/temperance.png"
// tarotDeck[19] = img["src"] = "./images/tower.png"
// tarotDeck[20] = img["src"] = "./images/wheel-fortune.png"
// tarotDeck[21] = img["src"] = "./images/world.png"
// tarotDeck[22] = img;
// tarotDeck[22].src = 'images/death.png';

// tarotStar.addEventListener("click", function(){
//  if (tarotCardDiv.classList.contains("hide")){
//     tarotCardDiv.classList.remove("hide");
//     randomTarotCard(tarotDeck, tarotDescription, tarotCardDiv)
//  }
// });




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










// function randomizer (array, index){
//     let randomIndex = Math.floor(Math.random() * array.length);
//     let item = array[index]
//     console.log(item);
// }


// const image = document.createElement("img");


// const tarotDeckTwo = {
//     death: {
//         image: "images/death.png",
//         desc: "death",
//     },
//     devil: {
//         image: "images/devil.png",
//         desc: "devil"
//     },
//     test: {
//         image: "images/fool.png",
//         desc: "test"
//     }
// };


// const arrayKeys = Object.keys(tarotDeckTwo);
// const randomNumber = Math.random();
// const arrayIndex = Math.floor(randomNumber * arrayKeys.length);

// let randomKey = arrayKeys[arrayIndex];
// let randomValue = tarotDeckTwo[randomKey];


// function shallowIterator(target){
//     let keys = Object.keys(array);
//     let randomKey = Math.floor(Math.random() * keys.length);
//     for (const key in target){
//         if (typeof target[key] === "object"){
//             for (const nestedKey in target[key]){
//                 console.log(target[key][nestedKey]);
//             }
//         } else {
//             console.log(target[key]);
//         }
//     }
// }


// for (const key in tarotDeckTwo){
//     console.log(key);
// }


// function randomObject (array){
//     let keys = Object.keys(array);
//     let randomKey = Math.floor(Math.random() * keys.length);
//     let object = keys[randomKey];
// };


// tarotStar.addEventListener("click", function(){
//     let object = randomObject(tarotDeckTwo);
//     tarotDeckTwo[object["image"]]

// })


// tarotStar.addEventListener("click", function(){
//     let image = document.createElement("img");
//     image.src = tarotDeckTest["image"]
//     tarotCardDiv.append(image);
// })

// const tarotDeckTest = {
//     image: "images/death.png",
//     desc: "death",
// };




// tarotStar.addEventListener("click", function(){
//     let image = document.createElement("img");
//     image.src = tarotDeckTest["image"]
//     tarotCardDiv.append(image);
// })



// function randomizer (array){
//     let index = Math.floor(Math.random() * array.length);
//     let item = array[index]
//     console.log(item);
// }
