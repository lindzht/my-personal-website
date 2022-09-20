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
    title.style.color = "rgba(248, 215, 0, 0.913)";
    title.style.fontSize = "4em";
    title.style.letterSpacing = ".15em";
}


function mouseOut(object){
    object.textContent = "✴";
}


aboutStar.addEventListener("mouseover", function(){
        aboutStar.textContent = "about"; 
        navTextChange(aboutStar);
});

aboutStar.addEventListener("mouseout", function (){
    mouseOut(aboutStar);
});

tarotStar.addEventListener("mouseover", function(){
    tarotStar.textContent = "tarot card pull"; 
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
});



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



aboutStar.addEventListener("click", function(){
    circleColorDark();
    aboutStar.style.color = "rgb(248, 83, 0)";
})





