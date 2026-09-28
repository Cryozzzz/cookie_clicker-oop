var current_theme = "default";
var ocean_theme_requirement = 10;
var jungle_theme_requirement = 1000;

function apply_theme() {

    document.body.classList.remove("ocean-theme");
    document.body.classList.remove("jungle-theme");

    if (current_theme === "ocean") {
        document.body.classList.add("ocean-theme")
    }

    if (current_theme === "jungle") {
        document.body.classList.add("jungle-theme");
    }
}

const ocean_theme = document.getElementById("thema-2");
const jungle_theme = document.getElementById("thema-3");

ocean_theme.addEventListener("click", function () {

    if (total_times_clicked >= ocean_theme_requirement) {
        current_theme = "ocean";
        apply_theme();
    }
});

jungle_theme.addEventListener("click", function () {

    if (total_robux >= jungle_theme_requirement) {
        current_theme = "jungle";
        apply_theme();
    }

});

const default_theme = document.getElementById("thema-1");

default_theme.addEventListener("click", function () {
    current_theme = "default";

    document.body.classList.remove("ocean-theme");
    document.body.classList.remove("jungle-theme");
});