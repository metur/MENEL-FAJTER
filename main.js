#!/usr/bin/env node
import "./menels/game.js";
import { game_start } from "./menels/game.js";
import { logo } from "./menels/pics.js";
import cliInteract from "cli-interact";

const query = cliInteract.question;

while (true) {
  // Clear the console and display the logo
  // This is a workaround for Windows compatibility
  if (process.platform === "win32") {
    console.log("\x1Bc");
  } else {
    console.clear();
  }
console.clear()
console.log(logo)
console.log("Witaj w Menel Fajter v1!")
console.log("Gra polega na tym, aby zabic jak najwiecej meneli w określonym limicie czasowym.")
console.log("W grze możesz ulepszać swoje umiejętności, zdobywać pieniądze i walczyć z menelami.")
console.log("Aby zacząć grać, wpisz 's', aby wyjść z gry, wpisz 'q'.")
var answer = query('Czy chcesz zacząć grać? (s/q): ');
console.log('y0u m3n3l3d: ', answer);

switch(answer) {
  case "s":
    game_start()
    continue
  case "q":
    process.exit(0)
  default:
    continue
}

}

