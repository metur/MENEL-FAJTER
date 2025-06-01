// const { game_start } = require('./menels/Game');
import "./menels/game.js";
// import { game_start } from './menels/Game.js';
// import(game_start)

// import require from 'cli-interact';
// var query = require('cli-interact').query;
import { game_start } from "./menels/game.js";
import cliInteract from "cli-interact";

const query = cliInteract.question;

function Main(){
console.clear()
console.log(logo)
console.log("Witaj w Menel Fajter v1!")
console.log("Gra polega na tym, aby zabic jak najwiecej meneli w określonym limicie czasowym.")
console.log("W grze możesz ulepszać swoje umiejętności, zdobywać pieniądze i walczyć z menelami.")
console.log("Aby zacząć grać, wpisz 's', aby wyjść z gry, wpisz 'q'.")
var answer = query('Czy chcesz zacząć grać? (s/q): ');
console.log('you meneled:', answer);
// return answer == true ? console.log("yes") : Main()

switch(answer) {
  case "s":
    game_start()
    Main()
  case "q":
    // code block
    return;
  case "y":
    console.log("DUPSON")
    Main()
  default:
    Main()
}

}
let logo = `
888             888              
888             888              
888             888              
88888b.  .d88b. 88888b.  .d88b.  
888 "88bd88""88b888 "88bd88""88b 
888  888888  888888  888888  888 
888  888Y88..88P888 d88PY88..88P 
888  888 "Y88P" 88888P"  "Y88P"  

 .d888d8b        888     888                   
d88P" Y8P        888     888                   
888              888     888                   
888888888 .d88b. 88888b. 888888 .d88b. 888d888 
888   888d88P"88b888 "88b888   d8P  Y8b888P"   
888   888888  888888  888888   88888888888     
888   888Y88b 888888  888Y88b. Y8b.    888     
888   888 "Y88888888  888 "Y888 "Y8888 888     
              888                              
         Y8b d88P                              
          "Y88P"                               
`
Main()