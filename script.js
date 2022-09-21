// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

const aboutStar = document.querySelector("#about .star");
const tarotStar = document.querySelector("#tarot .star");
const artStar = document.querySelector("#artwork .star");
const ghStar = document.querySelector("#github .star");
const star = document.querySelectorAll(".star");
const navigation = document.querySelector("#nav-container");
const showAbout = document.querySelector(".show-about");
const circleInsideColor = document.querySelector(".circle-inside");
const circleBorderColor = document.querySelector(".circle-border");


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



aboutStar.addEventListener("click", function(e){
    if (showAbout.classList.contains !== "show-about"){
        circleColorDark();
        showAbout.classList.add("show-about");
        let header = document.createElement("h2");
        let p = document.createElement("p");
        let img = document.createElement("img");
        header.textContent = "👋 hey i'm lindsay"
        p.textContent = "artist + engineer in training"
        img.src = "./images/IMG_0478_png.png"
        img.style.width = "300px";
        showAbout.append(img);
        showAbout.append(header);
        showAbout.append(p);
        starClickColorChange(aboutStar);
        starClickColorChange(tarotStar);
        starClickColorChange(artStar);
        starClickColorChange(ghStar);
    } else if (showAbout.classList.contains === "show-about") {
        showAbout.classList.remove("show-about");
    }
    
})






// aboutStar.addEventListener("mouseover", function(){
//     if (aboutStar !== "about"){
//         aboutStar.textContent = "about";
//         // navTextChange();    
//     } 
// });

// tarotStar.addEventListener("mouseover", function(){
//     if (tarotStar !== "tarot"){
//         tarotStar.textContent = "tarot";
//         navTextChange();    
//     } 
// });

// ghStar.addEventListener("mouseover", function(){
//     if (ghStar !== "github"){
//         ghStar.textContent = "github";
//         navTextChange();    
//     } 
// });

// artStar.addEventListener("mouseover", function(){
//     if (artStar !== "artwork"){
//         artStar.textContent = "artwork";
//         navTextChange();    
//     } 
// });