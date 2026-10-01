class Achievement {
    constructor(name, condition, card) {
        this.name = name;
        this.condition = condition;
         this.card = card;
        this.achieved = false;
    }


    check(manager){
        if(!this.achieved && this.condition(manager)) {
            this.achieved = true;
            this.card.classList.remove("opacity-50");
        }
    }
}

