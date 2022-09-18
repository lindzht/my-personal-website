// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

const about = document.querySelector("#about");
const aboutText = document.querySelector("h1");

about.addEventListener("mouseover", function(){
    if (aboutText === "✴"){
        aboutText.innerText = "test";
    }
})
