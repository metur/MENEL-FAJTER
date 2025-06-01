import Player from "./player.js";
import Menel from "./menel.js";
import cliInteract from "cli-interact";
import { angry_hobo, mug, karate2, karate3, karate4, waepon } from "./pics.js";

let score;
let money;
let time;
let menels = [];

const query = cliInteract.question;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function game_start() {
    score = 0;
    money = 0;
    time = 210; // 3.5 minutes
    menels = [];
    for (let i = 0; i < 5; i++) {
        let menel = new Menel("Menel " + (menels.length + 1));
        menels.push(menel);
    }
    let player = new Player(query('Podaj swoje imię: '));
    game(player);
}

async function game(player) {
    if (player.hp <= 0) {
        console.log("Zabito cie, koniec gry. Twoj wynik: ", score);
        query("press any key...");
        return;
    }
    time -= 1;
    console.clear();
    console.log("Menel Fajter v1");
    console.log("Time left:", time);
    console.log("Menels left:", menels.length);
    console.log("Score:", score);
    console.log("Money:", money);
    console.log(player);
    console.log("q - quit game");
    console.log("h - hit menels");
    console.log("d - dodaj menela");
    console.log("u - wypij Harnasia (20)");
    console.log("p - pokaz meneli");
    console.log("a - wypij V.I.Pa (10)");
    console.log("s - wypij Rompera (50)");
    console.log("Uogin - łogiń");
    let answer = query('Łogiń!..: ');

    function fight() {
        for (let i = 0; i < player.hits; i++) {
            if (menels.length === 0) {
                console.log("Nie ma zadnych meneli, dodaj jakiegos wpisujac d");
                break;
            }
            const losowy_menel = menels[Math.floor(Math.random() * menels.length)];
            losowy_menel.hp -= player.atk;
            console.log("Uderzyles menela: ", losowy_menel.name, " jego hp: ", losowy_menel.hp);
            if (losowy_menel.hp <= 0) {
                console.log("Zabiles menela: ", losowy_menel.name);
                score += 1 * menels.length;
                money += 10;
                menels = menels.filter(m => m !== losowy_menel);
            }
        }
        menels.forEach(menel => {
            if (menel.hp > 0) {
                player.hp -= menel.atk;
                console.log("Menel ", menel.name, " uderza cie, twoje hp: ", player.hp);
            }
        });
    }

    function dodaj_menela() {
        let menel = new Menel("Menel " + (menels.length + 1));
        menels.push(menel);
        console.log("Dodano menela, aktualnie jest ich: ", menels.length);
        console.log(menels);
    }

    switch (answer) {
        case "q":
            console.log("gaem ends, thks fr plng");
            query("press any key...");
            return;
        case "h":
            fight();
            query("press any key...");
            break;
        case "c":
        case "problemsolved":
            money += 666;
            score = -2137;
            break;
        case "Uogin":
            console.log("Łogiiń! :DDD");
            query("press any key...");
            break;
        case "d":
            dodaj_menela();
            query("press any key...");
            break;
        case "u":
            if (money < 20) {
                console.log("Nie masz wystarczajaco pieniedzy, potrzebujesz 20");
                query("press any key...");
                break;
            }
            player.hp += Math.floor(Math.random() * 20 + 5);
            if (player.hp > 100) player.hp = 100;
            money -= 20;
            console.clear();
            console.log(mug);
            console.log("Zwiekszono hp do: ", player.hp);
            query("press any key...");
            break;
        case "p":
            console.clear();
            console.log(angry_hobo);
            query("");
            console.clear();
            console.log("Meneli status:");
            console.log(menels);
            query("press any key...");
            break;
        case "a":
            if (money < 10) {
                console.clear();
                console.log("Nie masz wystarczajaco pieniedzy, potrzebujesz 10");
                query("press any key...");
                break;
            }
            player.atk += 1;
            console.clear();
            console.log(waepon);
            console.log("Zwiekszono wartosc ataku do: ", player.atk);
            money -= 10;
            query("press any key...");
            break;
        case "s":
            if (money < 50) {
                console.log("Nie masz wystarczajaco pieniedzy, potrzebujesz 50");
                query("press any key...");
                break;
            }
            money -= 50;
            player.hits += 1;
            console.clear();
            console.log(karate2);
            query("");
            console.clear();
            console.log(karate3);
            query("");
            console.clear();
            console.log(karate4);
            console.log("Zwiekszono ilosc hitow do: ", player.hits);
            query("press any key...");
            break;
        default:
            console.log("Nie rozumiem, wpisz s aby zaczac, q aby wyjsc");
    }

    if (time <= 0) {
        console.log("Czas sie skonczyl, twoj wynik: ", score);
        query("press any key...");
        return;
    }
    await game(player);
}

export default "menel fajter game started";