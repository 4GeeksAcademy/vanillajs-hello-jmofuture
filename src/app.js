/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generateExcuse();
};

function generateExcuse() {
  let who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let action = ["se comió", "orinó", "aplastó", "rompió"];
  let what = ["mi tarea", "mi teléfono", "el coche"];
  let when = [
    "antes de la clase",
    "mientras dormía",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  let excuse = `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}.`;
  document.getElementById("excuse").innerHTML = excuse;
}
