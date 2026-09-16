var robux = 0;
var robux_per_second = 0;
var robux_per_click = 1;
var total_robux = robux + robux_spent;
var robux_spent = 0;
var total_robux_display = document.getElementById("total-robux-display");
var robux_per_click_display = document.getElementById("robux-per-click");
var robux_display = document.getElementById("robux-display");
var robux_per_second_display = document.getElementById("robux-per-second");
const click_button = document.getElementById("click-button");

click_button.addEventListener("click", function() {
    robux ++;
    console.log(robux)
    robux_display.textContent = robux;

})


const buy_game_button_1 = document.getElementById("buy-game-button-1");
buy_game_button_1.addEventListener("click", function() {
    if (robux >= 10) {
        robux -= 10;
        robux_spent += 10;
        robux_display.textContent = robux;
        // Game purchase logic here
        robux_per_second ++;
        robux_per_second_display.textContent = robux_per_second;
        console.log(robux_per_second)
    } else {
        alert("Not enough Robux to buy the game!");
    }
}
)

const buy_game_button_2 = document.getElementById("buy-game-button-2");
buy_game_button_2.addEventListener("click", function() {
    if (robux >= 20) {
        robux -= 20;
        robux_spent += 20;
        robux_display.textContent = robux;
        // Game purchase logic here
        robux_per_second += 2;
        robux_per_second_display.textContent = robux_per_second;
    } else {
        alert("Not enough Robux to buy the game!");
    }
}
)

function update_robux_per_second() {
    robux += robux_per_second;
    robux_display.textContent = robux;
    total_robux = robux + robux_spent;
    total_robux_display.textContent = total_robux;

    console.log(robux_per_second)
}
setInterval(update_robux_per_second, 1000);
