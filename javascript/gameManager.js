class game_manger {
    constructor() {
        this.robux = 0;
        this.total_robux = 0;
        this.total_times_clicked = 0;
        this.play_minutes = 0;
        this.play_hours = 0;

        this.base_per_click = 1;
        this.click_multiplier = 1;
        this.robux_multiplier = 1;
        this.total_per_click = this.base_per_click * this.click_multiplier
        this.base_per_second = 1
        this.total_per_second = 1

        this.games = [];
        this.upgrades = [];
        this.achievements = [];
        this.init_games_and_upgrades();
        this.cache_elements();
        this.load_game();
        this.wire_ui();
        this.update_derived();
        this.update_ui();
        this.schedule_golden_robux();
        this.start_loops();
    }
    init_games_and_upgrades() {
        this.games = [
            new Game(1, 10, 1, "Arsenal",),
            new Game(2, 50, 2, "Blox fruits",),
            new Game(3, 100, 5, "Adopt me ",),
            new Game(4, 250, 15, "Rivals",),
            new Game(5, 700, 30, "Deepwoken",),
            new Game(6, 1000, 60, "Brookhaven",),
            new Game(7, 1250, 120, "Blade ball",),
            new Game(8, 1800, 250, "Doors",),
            new Game(9, 3500, 500, "Dead rails",),
            new Game(10, 7000, 1000, "Bee Swarm Simulator",),
        ];

        this.upgrades = [
            new upgrade_games(1, 100, 0, 3, "Clicker Bot"),
            new upgrade_games(2, 500, 0.5, 0, "Developer Product"),
            new upgrade_game_production(3, 1000, 10, 0),
            new upgrade_games(4, 1000, 0, 5, "Op Glove"),
            new upgrade_games(5, 3000, 2, 0, "VIP Pass"),
            new upgrade_game_production(9, 3000, 10, 1),
            new upgrade_game_production(10, 5000, 10, 2),
            new upgrade_games(6, 7500, 0, 10, "Turbo Click"),
            new upgrade_games(7, 10000, 4, 0, "Premium"),
            new upgrade_games(8, 20000, 0, 20, "Universal Clicker"),

        ]

        this.achievements = [
            new Achievement("10 keer geklikt!", (manager) => manager.total_times_clicked >= 10, document.getElementById("achievement-1")),
            new Achievement("Passive production", (manager) => manager.base_per_second > 0, document.getElementById("achievement-2")),
            new Achievement("Money! Money!", (manager) => manager.total_robux >= 100, document.getElementById("achievement-3")),
            new Achievement("Final Game", (manager) => manager.games[9].amount >= 1, document.getElementById("achievement-4")),
            new Achievement("Thats alot of time!", (manager) => manager.play_hours >= 1, document.getElementById("achievement-5")),
            new Achievement("6 Digits", (manager) => manager.total_robux >= 1000000, document.getElementById("achievement-6")),
        ];
    }
    cache_elements() {
        this.play_time_minute_display = document.getElementById("play_time_minute")
        this.play_time_hour_display = document.getElementById("play_time_hour")
        this.total_times_clicked_display = document.getElementById("total-times-clicked")
        this.click_button = document.getElementById("click-button");
        this.save_button = document.getElementById("save-button");
        this.delete_save_button = document.getElementById("delete-save-button");
        this.golden_robux_button = document.getElementById("golden-robux");


        this.game_choice = document.getElementById("games-choice");
        this.upgrade_choice = document.getElementById("upgrades-choice");
        this.stat_choice = document.getElementById("stats-choice");
        this.game_section = document.getElementById("games-section");
        this.upgrade_section = document.getElementById("upgrades-section");
        this.stat_section = document.getElementById("stats-section");

    }

    wire_ui() {
        if (this.save_button) {
            this.save_button.addEventListener("click", () => this.save_game());
        }

        if (this.delete_save_button) {
            this.delete_save_button.addEventListener("click", () => {
                if (confirm("Delete your saved game?")) {
                    localStorage.removeItem("cookie_clicker_save");
                    location.reload();
                }
            });
        }

        if (this.click_button) {
            this.click_button.addEventListener("click", () => {
                this.robux += this.total_per_click;
                this.total_robux += this.total_per_click;
                this.total_times_clicked += 1
                this.click_button.classList.add("scale-[1.04]");
                setTimeout(() => this.click_button.classList.remove("scale-[1.04]"), 100);
                this.update_ui();
            });
        }

        if (this.golden_robux_button) {
            this.golden_robux_button.addEventListener("click", () => {
                const reward = Math.max(10, this.total_per_second * 10);
                this.robux += reward;
                this.total_robux += reward;
                this.golden_robux_button.classList.remove("golden-pulse");
                this.golden_robux_button.classList.add("opacity-0");
                setTimeout(() => {
                    this.golden_robux_button.style.display = "none";
                }, 500);
                this.update_ui();
                this.schedule_golden_robux();
            });
        }

        this.games.forEach((game, idx) => {
            if (game.buy_button) {
                game.buy_button.addEventListener("click", () => game.buy(this));
            }
        });

        this.upgrades.forEach((upgrade, idx) => {
            if (upgrade.buyButton) {
                upgrade.buyButton.addEventListener("click", () => upgrade.buy_upgrade(this))
            }
        });

        this.game_choice.classList.add("bg-white");
        this.game_choice.classList.remove("text-gray-300");

        this.game_choice.addEventListener("click", () => {
            this.game_section.classList.remove("hidden");
            this.upgrade_section.classList.add("hidden");
            this.stat_section.classList.add("hidden");
            this.game_choice.classList.add("bg-white");
            this.upgrade_choice.classList.remove("bg-white");
            this.stat_choice.classList.remove("bg-white");
            this.game_choice.classList.remove("text-gray-300")
            this.upgrade_choice.classList.add("text-gray-300")
            this.stat_choice.classList.add("text-gray-300")


        });

        this.upgrade_choice.addEventListener("click", () => {
            this.game_section.classList.add("hidden");
            this.upgrade_section.classList.remove("hidden");
            this.stat_section.classList.add("hidden");
            this.upgrade_choice.classList.add("bg-white");
            this.game_choice.classList.remove("bg-white");
            this.stat_choice.classList.remove("bg-white");
            this.upgrade_choice.classList.remove("text-gray-300")
            this.game_choice.classList.add("text-gray-300")
            this.stat_choice.classList.add("text-gray-300")

        });

        this.stat_choice.addEventListener("click", () => {
            this.game_section.classList.add("hidden");
            this.upgrade_section.classList.add("hidden");
            this.stat_section.classList.remove("hidden");
            this.stat_choice.classList.add("bg-white");
            this.game_choice.classList.remove("bg-white");
            this.upgrade_choice.classList.remove("bg-white");
            this.stat_choice.classList.remove("text-gray-300")
            this.game_choice.classList.add("text-gray-300")
            this.upgrade_choice.classList.add("text-gray-300")

        });


    }

    save_game() {
        const save_data = {
            robux: this.robux,
            total_robux: this.total_robux,
            total_times_clicked: this.total_times_clicked,
            play_minutes: this.play_minutes,
            play_hours: this.play_hours,
            click_multiplier: this.click_multiplier,
            robux_multiplier: this.robux_multiplier,
            games: this.games.map((game) => ({
                amount: game.amount,
                game_cost: game.game_cost,
                game_mult: game.game_mult
            })),
            upgrades: this.upgrades.map((upgrade) => upgrade.purchase),
            achievements: this.achievements.map((achievement) => achievement.achieved)
        };

        localStorage.setItem("cookie_clicker_save", JSON.stringify(save_data));
        this.save_button.textContent = "Saved!";
        setTimeout(() => this.save_button.textContent = "save", 1000);
    }

    load_game() {
        const saved_data = localStorage.getItem("cookie_clicker_save");
        if (!saved_data) return;

        const data = JSON.parse(saved_data);
        this.robux = data.robux ?? this.robux;
        this.total_robux = data.total_robux ?? this.total_robux;
        this.total_times_clicked = data.total_times_clicked ?? this.total_times_clicked;
        this.play_minutes = data.play_minutes ?? this.play_minutes;
        this.play_hours = data.play_hours ?? this.play_hours;
        this.click_multiplier = data.click_multiplier ?? this.click_multiplier;
        this.robux_multiplier = data.robux_multiplier ?? this.robux_multiplier;

        data.games?.forEach((saved_game, index) => {
            if (!this.games[index]) return;
            this.games[index].amount = saved_game.amount ?? this.games[index].amount;
            this.games[index].game_cost = saved_game.game_cost ?? this.games[index].game_cost;
            this.games[index].game_mult = saved_game.game_mult ?? this.games[index].game_mult;
        });

        data.upgrades?.forEach((purchased, index) => {
            if (!purchased || !this.upgrades[index]) return;
            this.upgrades[index].purchase = true;
            this.upgrades[index].card?.classList.add("opacity-50");
        });

        data.achievements?.forEach((achieved, index) => {
            if (!achieved || !this.achievements[index]) return;
            this.achievements[index].achieved = true;
            this.achievements[index].card?.classList.remove("opacity-50");
        });
    }


    update_derived() {
        this.base_per_second = this.games.reduce(
            (total, game) => total + game.per_second_per_item * game.amount * game.game_mult,
            0
        );
        this.total_per_second = this.base_per_second * this.robux_multiplier;
        this.total_per_click = this.base_per_click * this.click_multiplier;
    }

    golden_robux_position() {
        this.golden_robux_button.style.position = "absolute";
        this.golden_robux_button.style.display = "block";

        const max_x = Math.max(0, window.innerWidth - this.golden_robux_button.offsetWidth);
        const max_y = Math.max(0, window.innerHeight - this.golden_robux_button.offsetHeight);

        const random_x = Math.floor(Math.random() * max_x);
        const random_y = Math.floor(Math.random() * max_y);

        this.golden_robux_button.style.left = `${random_x}px`;
        this.golden_robux_button.style.top = `${random_y}px`;
        this.golden_robux_button.classList.add("golden-pulse");
        requestAnimationFrame(() => this.golden_robux_button.classList.remove("opacity-0"));
    }

    schedule_golden_robux() {
        const delay = 30000 + Math.random() * 60000;
        setTimeout(() => this.golden_robux_position(), delay);
    }

    update_ui() {
        this.update_derived();
        let robux_per_click_displays = document.getElementsByClassName("robux-per-click-display")
        for (let display of robux_per_click_displays) { display.textContent = this.total_per_click }
        let robux_per_second_displays = document.getElementsByClassName("robux-per-second-display")
        for (let display of robux_per_second_displays) { display.textContent = this.total_per_second }
        let robux_displays = document.getElementsByClassName("robux-display");
        for (let display of robux_displays) { display.textContent = this.robux }
        let total_robux_displays = document.getElementsByClassName("total-robux-display")
        for (let display of total_robux_displays) { display.textContent = this.total_robux }
        if (this.total_times_clicked_display) {
            this.total_times_clicked_display.textContent = this.total_times_clicked;
        }
        if (this.play_time_minute_display) {
            this.play_time_minute_display.textContent = this.play_minutes;
        }
        if (this.play_time_hour_display) {
            this.play_time_hour_display.textContent = this.play_hours;
        }

        this.games.forEach((game, index) => {
            if (game.amount_display) {
                game.amount_display.textContent = game.amount;
            }
            if (game.my_game_amount_display) {
                game.my_game_amount_display.textContent = game.amount;
            }
            if (game.game_cost_display) {
                game.game_cost_display.textContent = game.game_cost + "R$";
            }
            if (game.per_second_display) {
                game.per_second_display.textContent = game.per_second_per_item;
            }
            if (this.total_times_clicked >= ocean_theme_requirement) {
                document.getElementById("ocean-lock").textContent = "Unlocked";

            }
            if (this.total_robux >= jungle_theme_requirement) {
                document.getElementById("jungle-lock").textContent = "Unlocked";
            }
            if (this.total_robux >= galaxy_theme_requirement) {
                document.getElementById("galaxy-lock").textContent = "Unlocked";
            }
        });

    }

    start_loops() {

        setInterval(() => {
            this.robux += this.total_per_second;
            this.total_robux += this.total_per_second;
        }, 1000);

        setInterval(() => this.update_ui(), 100);

        setInterval(() => {
            this.play_minutes += 1;
            if (this.play_minutes >= 60) {
                this.play_minutes -= 60
                this.play_hours += 1;
            }
            if (this.play_time_minute_display) this.play_time_minute_display.textContent = this.play_minutes
            if (this.play_time_hour_display) this.play_time_hour_display.textContent = this.play_hours
        }, 60000);

        setInterval(() => this.check_achievements(), 500)
    }

    check_achievements() {
        this.achievements.forEach(achievement => achievement.check(this));
    }



}
const manager = new game_manger();
