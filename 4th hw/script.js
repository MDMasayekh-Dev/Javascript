let horror = document.querySelector(".horror");
let comedy = document.querySelector(".comedy");
let action = document.querySelector(".action");
let scienceFiction = document.querySelector(".sci-fi");
let thriller = document.querySelector(".thriller");
let heading = document.querySelector(".heading");
heading.style.display = "none";
heading.style.textAlign = "center";


let buttons = document.querySelectorAll("button");
buttons.forEach(button =>{
    button.style.color = "white";
    button.style.backgroundColor = "black";
    button.style.borderRadius = "5px";
    button.style.padding = "10px 20px";
    button.style.margin = "5px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "gray";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "black";
    });
})
  


horror.addEventListener("click", () => {
  heading.textContent = "1. The Conjuring (2013), 2. Insidious (2010), 3. The Exorcist (1973)";
  if (heading.style.display === "none") {
    heading.style.display = "block";
  }else{
    heading.style.display = "none";
  }

});

comedy.addEventListener("click", () => {
  heading.textContent = "1. Superbad (2007), 2. The Grand Budapest Hotel (2014), 3. Anchorman (2004)";
   if (heading.style.display === "none") {
    heading.style.display = "block";
  }else{
    heading.style.display = "none";
  }
}); 
 
action.addEventListener("click", () => {
    heading.textContent = "1. Avengers: Endgame (2019), 2. John Wick (2014), 3. The Dark Knight (2008)";
   if (heading.style.display === "none") {
    heading.style.display = "block";
  }else{
    heading.style.display = "none";
  }
});


scienceFiction.addEventListener("click", () => {
  heading.textContent = "1. Interstellar (2014), 2. The Matrix (1999), 3. Inception (2010)";
  if (heading.style.display === "none") {
    heading.style.display = "block";
  }else{
    heading.style.display = "none";
  }
});

thriller.addEventListener("click", () => {
  heading.textContent = "1. The Godfather (1972), 2. Pulp Fiction (1994), 3. The Dark Knight rises (2012)";
  if (heading.style.display === "none") {
    heading.style.display = "block";
  }else{
    heading.style.display = "none";
  }
});


