var current_theme = "default";
var ocean_theme_requirement = 10;

function apply_theme() {
    if (current_theme === "ocean") {
        document.body.classList.add("ocean-theme")
    }
}

const ocean_theme = document.getElementById("thema-2");

ocean_theme.addEventListener("click", function () {

    if (total_times_clicked >= ocean_theme_requirement) {
        current_theme = "ocean";
        apply_theme();
    }
});

const default_theme = document.getElementById("thema-1");

default_theme.addEventListener("click", function () {
    current_theme = "default";

    document.body.classList.remove("ocean-theme");
});