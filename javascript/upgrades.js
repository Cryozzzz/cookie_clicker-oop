class upgrade_games {
    robux_multiplier;
    click_multiplier;
    upgrade_cost;
    purchase

    constructor(id, upgrade_cost, robux_mult = 0, click_mult = 0, name = "") {
        this.id = id;
        this.upgrade_cost = upgrade_cost
        this.robux_mult = robux_mult
        this.click_mult = click_mult
        this.purchase = false
        this.name = name;
        this.card = document.getElementById(`upgrade-${id}`);
        this.buyButton = document.getElementById(`upgrade-button-${id}`);
    }

    buy_upgrade(manager) {
        if (this.purchase) return;
        if (manager.robux >= this.upgrade_cost) {
            manager.robux -= this.upgrade_cost;
            manager.click_multiplier += this.click_mult;
            manager.robux_multiplier += this.robux_mult;
            this.purchase = true
            this.card.classList.add("opacity-50");
            manager.update_derived();
            manager.update_ui();
        }
        else {
            alert("you're BROKE")
        }
    }



}



class upgrade_game_production {
    constructor(id, upgrade_cost_game, production_mult, game_index) {
        this.id = id;
        this.upgrade_cost_game = upgrade_cost_game;
        this.production_mult = production_mult;
        this.game_index = game_index;
        this.purchase = false;
        this.card = document.getElementById(`upgrade-${id}`);
        this.buyButton = document.getElementById(`upgrade-button-${id}`);
    }

    buy_upgrade(manager) {
        if (this.purchase) return;

        if (manager.robux >= this.upgrade_cost_game) {
            manager.robux -= this.upgrade_cost_game;
            this.purchase = true;
            manager.games[this.game_index].game_mult *= this.production_mult;
            this.card.classList.add("opacity-50");
            manager.update_derived();
            manager.update_ui();
        } else {
            alert("you're BROKE");
        }
    }
}



