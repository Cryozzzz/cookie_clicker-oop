var robux = 0;
var robux_per_second = 0;
var game_1_production = 0;  
var game_2_production = 0;
var robux_per_click = 1;
var total_robux = robux;
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




class Game {
    cost;
    per_second_per_item;
    name;
    amount;

    constructor(cost, per_second_per_item, name, amount) {
        this.cost = cost;
        this.per_second_per_item = per_second_per_item;
        this.name = name;
        this.amount = amount;
    }

    buy() {
        if (robux >= this.cost) {
            robux -= this.cost;
            total_robux += this.cost ;
            // Game purchase logic here
            this.per_second_per_item += 1;
            this.amount += 1;
           
        } else {
            alert("Not enough Robux to buy " + this.name + "!");
        }
    }
}

var game_1 = new Game(10, 1, "Game 1", 0);
var game_2 = new Game(20, 2, "Game 2", 0);

function update_ui(){
    robux_per_second = game_1_production + game_2_production;
    game_1_production = game_1.per_second_per_item * game_1.amount;
    game_2_production = game_2.per_second_per_item * game_2.amount;

    robux_per_second_display.textContent = robux_per_second;
    robux_display.textContent = robux;
    total_robux_display.textContent = total_robux;
}

const buy_game_button_1 = document.getElementById("buy-game-button-1");
const buy_game_button_2 = document.getElementById("buy-game-button-2");
buy_game_button_1.addEventListener("click", game_1.buy.bind(game_1));
buy_game_button_2.addEventListener("click", game_2.buy.bind(game_2));



function update_robux_per_second() {
    robux += robux_per_second;
    robux_per_second = game_1_production + game_2_production;
    robux_display.textContent = robux;
    total_robux = robux;
    robux_per_second_display.textContent = robux_per_second;;
    
    console.log(robux_per_second)
    update_ui();
}
setInterval(update_robux_per_second, 1000);
    