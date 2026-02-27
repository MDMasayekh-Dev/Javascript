let playerOne= document.querySelector(".playerOne");
let buttonOne= document.querySelector(".buttonOne");
let inputOne= document.querySelector(".inputOne");
let errorOne= document.querySelector(".errorOne");
let PLAYERONE= document.querySelector(".PLAYERONE");



let playerTwo= document.querySelector(".playerTwo");
let buttonTwo= document.querySelector(".buttonTwo");
let inputTwo= document.querySelector(".inputTwo");
let errorTwo= document.querySelector(".errorTwo");
let PLAYERTWO= document.querySelector(".PLAYERTWO");



let playerThree= document.querySelector(".playerThree");
let buttonThree= document.querySelector(".buttonThree");
let inputThree= document.querySelector(".inputThree");
let errorThree= document.querySelector(".errorThree");
let PLAYERTHREE= document.querySelector(".PLAYERTHREE");


buttonOne.addEventListener("click", () => {
   if(!inputOne.value) {
    errorOne.innerHTML = "Please enter a something";
}else if(isNaN(inputOne.value)){
    errorOne.innerHTML = "Please enter a number";
}else if (!(inputOne.value <= 10 && inputOne.value > 0)){

errorOne.innerHTML = "Please enter a number between 1 and 10";

}else{
   PLAYERONE.style.display = "none";
   PLAYERTWO.style.display = "block";
}
});
