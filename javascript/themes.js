var current_theme = "default"; 
var ocean_theme_requirement = 10; 
var jungle_theme_requirement = 1000; 
var galaxy_theme_requirement = 2000; 
 
function apply_theme() { 
 
    document.body.classList.remove("ocean-theme"); 
    document.body.classList.remove("jungle-theme"); 
    document.body.classList.remove("galaxy-theme"); 
 
    if (current_theme === "ocean") { 
        document.body.classList.add("ocean-theme") 
    } 
 
    if (current_theme === "jungle") { 
        document.body.classList.add("jungle-theme"); 
    } 
    if (current_theme === "galaxy") { 
        document.body.classList.add("galaxy-theme"); 
    } 
} 
 
const ocean_theme = document.getElementById("theme-2"); 
const jungle_theme = document.getElementById("theme-3"); 
const galaxy_theme = document.getElementById("theme-4"); 
 
function clear_theme_selection() { 
    document.getElementById("theme-1").classList.remove("theme-selected"); 
    document.getElementById("theme-2").classList.remove("theme-selected"); 
    document.getElementById("theme-3").classList.remove("theme-selected"); 
    document.getElementById("theme-4").classList.remove("theme-selected"); 
} 
 
ocean_theme.addEventListener("click", function () { 
 
    if (manager.total_times_clicked >= ocean_theme_requirement) {
        current_theme = "ocean"; 
        clear_theme_selection();
        ocean_theme.classList.add("theme-selected");
        apply_theme(); 
    } 
}); 
 
jungle_theme.addEventListener("click", function () { 
 
    if (manager.total_robux >= jungle_theme_requirement) {
        current_theme = "jungle"; 
        clear_theme_selection();
        jungle_theme.classList.add("theme-selected");
        apply_theme(); 
    } 
 
}); 
 
galaxy_theme.addEventListener("click", function () { 
 
    if (manager.total_robux >= galaxy_theme_requirement) {
        current_theme = "galaxy"; 
        clear_theme_selection();
        galaxy_theme.classList.add("theme-selected");
        apply_theme(); 
    } 
 
}); 
 
const default_theme = document.getElementById("theme-1"); 

default_theme.classList.add("theme-selected");
 
default_theme.addEventListener("click", function () { 
    current_theme = "default"; 
 
    document.body.classList.remove("ocean-theme"); 
    document.body.classList.remove("jungle-theme"); 
    document.body.classList.remove("galaxy-theme");

    clear_theme_selection();
    default_theme.classList.add("theme-selected");
});