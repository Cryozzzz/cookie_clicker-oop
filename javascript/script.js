

class Game {
    id;
    cost;
    per_second_per_item;
    name;
    amount;

    constructor(id, game_cost, per_second_per_item, name, amount = 0) {
        this.id = id;
        this.game_cost = game_cost;
        this.per_second_per_item = per_second_per_item;
        this.game_mult = 1
        this.name = name;
        this.amount = amount;
        this.my_game_amount_display = document.getElementById(`my-game-${id}-amount`)
        this.amount_display = document.getElementById(`game_${id}_amount`);
        this.game_cost_display = document.getElementById(`game_${id}_cost`);
        this.per_second_display = document.getElementById(`game_${id}_per_second_per_item`);
        this.buy_button = document.getElementById(`buy-game-button-${id}`);

    }

    buy(manager) {
        if (manager.robux >= this.game_cost) {
            manager.robux -= this.game_cost;
            this.amount += 1;
            this.game_cost = Math.round(this.game_cost * 1.15);
            manager.update_derived();
            manager.update_ui();
        } else {
            alert("Not enough Robux to buy " + this.name + "!");
        }

    }
}
















