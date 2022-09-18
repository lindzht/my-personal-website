// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

const aboutStar = document.querySelector("#about .star");
const showAbout = document.querySelector("#show-about");



aboutStar.addEventListener("mouseover", function(){
    if (aboutStar !== "about"){
        aboutStar.textContent = "about";
        aboutStar.style.fontSize = "3em";
        aboutStar.style.letterSpacing = ".15em";
        aboutStar.style.color = "rgb(248, 83, 0)";
    }
});

aboutStar.addEventListener("click", function(){
    showAbout.classList.remove("display");
})
