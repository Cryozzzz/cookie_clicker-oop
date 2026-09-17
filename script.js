// var robux = 0
// var robux_display = document.getElementById("robux-display");
// const click_button = document.getElementById("click-button");

// click_button.addEventListener("click", function() {
//     robux ++;
//     console.log(robux)
//     robux_display.textContent = robux;

// })
 
// const buy_game_button = document.getElementById("buy-game-button");
// buy_game_button.addEventListener("click", function() {
//     if (robux >= 10) {
//         robux -= 10;
//         robux_display.textContent = robux;
//         // Game purchase logic here
//     } else {
//         alert("Not enough Robux to buy the game!");
//     }
// }
// )


class MiniGame {
    
    constructor(players, map){
        this.players = players;
        this.map = map;
    }

    displayWhatsInsideThisMiniGame(){
        console.log(this.players);
        console.log(this.map);
    }   
}

gtaMiniPlayers = ["Damir", "Anas", "Erfan"];
gtaMiniMapLosSantos = "Los Santos";
const gtaMini = new MiniGame(gtaMiniPlayers, gtaMiniMapLosSantos);

gtaMini.displayWhatsInsideThisMiniGame();