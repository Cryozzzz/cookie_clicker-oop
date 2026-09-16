var robux = 0
var robux_display = document.getElementById("robux-display");
const click_button = document.getElementById("click-button");

click_button.addEventListener("click", function() {
    robux ++;
    console.log(robux)
    robux_display.textContent = robux;

})
 
const buy_game_button = document.getElementById("buy-game-button");
buy_game_button.addEventListener("click", function() {
    if (robux >= 10) {
        robux -= 10;
        robux_display.textContent = robux;
        // Game purchase logic here
    } else {
        alert("Not enough Robux to buy the game!");
    }
}
)
