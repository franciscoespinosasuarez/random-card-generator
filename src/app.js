/* eslint-disable */
import "bootstrap";
import "./style.css";

randomCard();
function randomCard() {
  //write your code here
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  const simbolos = ["♦", "♥", "♠", "♣"];

  let randomSymbol = Math.floor(Math.random() * 4);

  let randomNumber = Math.floor(Math.random() * 13);

  //SELECTORES
  const cardNumber = document.querySelector("#numero");
  //const cardSymbol = document.querySelectorAll(".simbolo");
  const simbolo1 = document.querySelector("#simbolo1");
  const simbolo2 = document.querySelector("#simbolo2");

  if (randomSymbol < 2) {
    console.log("color rojo");
    simbolo1.classList.remove("color-black");
    simbolo2.classList.remove("color-black");
    simbolo1.classList.add("color-red");
    simbolo2.classList.add("color-red");
    cardNumber.classList.remove("color-black");
    cardNumber.classList.add("color-red");
  } else {
    simbolo1.classList.remove("color-red");
    simbolo2.classList.remove("color-red");
    simbolo1.classList.add("color-black");
    simbolo2.classList.add("color-black");
    cardNumber.classList.remove("color-red");
    cardNumber.classList.add("color-black");
  }

  cardNumber.innerHTML = `${numeros[randomNumber]}`;
  simbolo1.innerHTML = `${simbolos[randomSymbol]}`;
  simbolo2.innerHTML = `${simbolos[randomSymbol]}`;
}

//BOTON CARTA ALEATORIA
const boton = document.querySelector("#boton1");

boton.addEventListener("click", randomCard);

//TEMPORIZADOR

const boton2 = document.querySelector("#boton2");

const countdownNumber = document.querySelector("#countdown");

let totalTime = 10;

boton2.addEventListener("click", cuenta);

function cuenta() {
  countdownNumber.innerHTML = totalTime;

  if (totalTime == 0) {
    countdownNumber.innerHTML = "";
    totalTime = 10;
    randomCard();
  } else {
    totalTime -= 1;
    setTimeout(cuenta, 1000);
  }
}
