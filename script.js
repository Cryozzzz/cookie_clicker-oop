var robux = 0;
var total_robux = 0;
var base_robux_per_second = 0;
var total_robux_per_second = 0;
var base_robux_per_click = 1;
var total_robux_per_click = 1;
var robux_multiplier = 1.0
var click_multiplier = 1.0
var total_times_clicked = 0
var play_time = 0
var total_robux_display = document.getElementById("total-robux-display");
var robux_per_click_display = document.getElementById("robux-per-click");
var robux_display = document.getElementById("robux-display");
var robux_per_second_display = document.getElementById("robux-per-second");
const click_button = document.getElementById("click-button");

var game_1_production = 0;
var game_2_production = 0;
var game_3_production = 0;
var game_4_production = 0;
var game_5_production = 0;
var game_6_production = 0;
var game_7_production = 0;
var game_8_production = 0;
var game_9_production = 0;
var game_10_production = 0;

function calculate_robux_per_second() {
    total_robux_per_second = base_robux_per_second * robux_multiplier 
    
}
setInterval(calculate_robux_per_second, 10)


click_button.addEventListener("click", function () {
    robux += total_robux_per_click;
    total_robux += total_robux_per_click;
    total_times_clicked++
    update_ui();
});

class Game {
    cost;
    per_second_per_item;
    name;
    amount;

    constructor(game_cost, per_second_per_item, name, amount) {
        this.game_cost = game_cost;
        this.per_second_per_item = per_second_per_item;
        this.name = name;
        this.amount = amount;
    }

    buy() {
        if (robux >= this.game_cost) {
            robux -= this.game_cost;
            base_robux_per_second + this.per_second_per_item
            this.amount += 1;
            this.game_cost = Math.round(this.game_cost * 1.15);
            update_ui();
        } else {
            alert("Not enough Robux to buy " + this.name + "!");
        }
    }
}

var game_1 = new Game(10, 1, "Game 1", 0);
var game_2 = new Game(50, 2, "Game 2", 0);
var game_3 = new Game(100, 5, "Game 3", 0);
var game_4 = new Game(250, 15, "Game 4", 0);
var game_5 = new Game(700, 30, "Game 5", 0);
var game_6 = new Game(1000, 60, "Game 6", 0);
var game_7 = new Game(1250, 120, "Game 7", 0);
var game_8 = new Game(1800, 250, "Game 8", 0);
var game_9 = new Game(2000, 500, "Game 9", 0);
var game_10 = new Game(20, 1000, "Game 10", 0); 

const games = [game_1, game_2, game_3, game_4, game_5, game_6, game_7, game_8, game_9, game_10];
const game_amount_displays = [
    document.getElementById("game_1_amount"),
    document.getElementById("game_2_amount"),
    document.getElementById("game_3_amount"),
    document.getElementById("game_4_amount"),
    document.getElementById("game_5_amount"),
    document.getElementById("game_6_amount"),
    document.getElementById("game_7_amount"),
    document.getElementById("game_8_amount"),
    document.getElementById("game_9_amount"),
    document.getElementById("game_10_amount")
];
const game_cost_displays = [
    document.getElementById("game_1_cost"),
    document.getElementById("game_2_cost"),
    document.getElementById("game_3_cost"),
    document.getElementById("game_4_cost"),
    document.getElementById("game_5_cost"),
    document.getElementById("game_6_cost"),
    document.getElementById("game_7_cost"),
    document.getElementById("game_8_cost"),
    document.getElementById("game_9_cost"),
    document.getElementById("game_10_cost")
];

function update_ui() {

    base_robux_per_second = 0; 

    games.forEach((game) => {
        base_robux_per_second += game.per_second_per_item * game.amount;
    });

    game_1_production = game_1.per_second_per_item * game_1.amount;
    game_2_production = game_2.per_second_per_item * game_2.amount;
    game_3_production = game_3.per_second_per_item * game_3.amount;
    game_4_production = game_4.per_second_per_item * game_4.amount;
    game_5_production = game_5.per_second_per_item * game_5.amount;
    game_6_production = game_6.per_second_per_item * game_6.amount;
    game_7_production = game_7.per_second_per_item * game_7.amount;
    game_8_production = game_8.per_second_per_item * game_8.amount;
    game_9_production = game_9.per_second_per_item * game_9.amount;
    game_10_production = game_10.per_second_per_item * game_10.amount;

    robux_per_second_display.textContent = total_robux_per_second;
    robux_per_click_display.textContent = total_robux_per_click;
    robux_display.textContent = robux;
    total_robux_display.textContent = total_robux;

    games.forEach((game, index) => {
        if (game_amount_displays[index]) {
            game_amount_displays[index].textContent = game.amount;
        }
        if (game_cost_displays[index]) {
            game_cost_displays[index].textContent = game.game_cost + "R$";
        }
    });
}

const buy_game_button_1 = document.getElementById("buy-game-button-1");
const buy_game_button_2 = document.getElementById("buy-game-button-2");
const buy_game_button_3 = document.getElementById("buy-game-button-3");
const buy_game_button_4 = document.getElementById("buy-game-button-4");
const buy_game_button_5 = document.getElementById("buy-game-button-5");
const buy_game_button_6 = document.getElementById("buy-game-button-6");
const buy_game_button_7 = document.getElementById("buy-game-button-7");
const buy_game_button_8 = document.getElementById("buy-game-button-8");
const buy_game_button_9 = document.getElementById("buy-game-button-9");
const buy_game_button_10 = document.getElementById("buy-game-button-10");

buy_game_button_1.addEventListener("click", game_1.buy.bind(game_1));
buy_game_button_2.addEventListener("click", game_2.buy.bind(game_2));
buy_game_button_3.addEventListener("click", game_3.buy.bind(game_3));
buy_game_button_4.addEventListener("click", game_4.buy.bind(game_4));
buy_game_button_5.addEventListener("click", game_5.buy.bind(game_5));
buy_game_button_6.addEventListener("click", game_6.buy.bind(game_6));
buy_game_button_7.addEventListener("click", game_7.buy.bind(game_7));
buy_game_button_8.addEventListener("click", game_8.buy.bind(game_8));
buy_game_button_9.addEventListener("click", game_9.buy.bind(game_9));
buy_game_button_10.addEventListener("click", game_10.buy.bind(game_10));

function update_robux_per_second() {
    robux += total_robux_per_second;
    total_robux += total_robux_per_second;
}
setInterval(update_ui, 10)
setInterval(update_robux_per_second, 1000);







const game_choice = document.getElementById("games-choice");
const upgrade_choice = document.getElementById("upgrades-choice");
const stat_choice = document.getElementById("stats-choice");

const game_section = document.getElementById("games-section");
const upgrade_section = document.getElementById("upgrades-section");
const stat_section = document.getElementById("stats-section");

game_choice.addEventListener("click", function () {
    game_section.classList.remove("hidden");
    upgrade_section.classList.add("hidden");
    stat_section.classList.add("hidden");
});

upgrade_choice.addEventListener("click", function () {
    game_section.classList.add("hidden");
    upgrade_section.classList.remove("hidden");
    stat_section.classList.add("hidden");
});

stat_choice.addEventListener("click", function () {
    game_section.classList.add("hidden");
    upgrade_section.classList.add("hidden");
    stat_section.classList.remove("hidden");
});


class upgrade_games{
    robux_mulitplier;
    click_multiplier;
    upgrade_cost;
    purchase

    constructor(upgrade_cost,robux_mulitplier,click_multiplier,purchase ){
        this.upgrade_cost = upgrade_cost
        this.robux_mulitplier = robux_mulitplier
        this.click_multiplier = click_multiplier
        this.purchase = purchase


    }

    buy_upgrade() {
        if(robux <= this.upgrade_cost ){
            robux -= this.upgrade_cost
            this.purchase = true
        }
    }



}



let achievement_1 = false
let achievement_2 = false
let achievement_3 = false
let achievement_4 = false
let achievement_5 = false
let achievement_6 = false

function achievement_1_requirement() {
    if (total_times_clicked >= 10) {

        achievement_1 = true

    }

}


function achievement_2_requirement() {
    if (total_robux >= 100) {

        achievement_2 = true

    }
}

function achievement_3_requirement() {
    if (play_time === 60) {

        achievement_3 = true

    }
}

function achievement_4_requirement() {
    if (game_1.amount === 50) {

        achievement_4 = true

    }
}

function achievement_5_requirement() {
    if (game_10.amount === 1) {

        achievement_5 = true
        

    }
}

function achievement_6_requirement() {
    if (total_robux >= 1000000) {

        achievement_6 = true

    }
}

function achievement_checker() {


    achievement_1_requirement()
    achievement_2_requirement()
    achievement_3_requirement()    
    achievement_4_requirement()
    achievement_5_requirement()
    achievement_6_requirement()

}
setInterval(achievement_checker, 10)





























































































