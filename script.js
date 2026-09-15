var robux = 0
var robux_display = document.getElementById("robux-display");
const click_button = document.getElementById("click-button");

click_button.addEventListener("click", function() {
    robux += 1;
    console.log(robux)
    robux_display.textContent = robux;

})
 
function buyUpgrade() {
    if (robux >= 10) {
        robux -= 10;
        robux_display.textContent = robux;
        // Upgrade logic here
    } else {
        alert("Not enough Robux to buy the upgrade!");
    }
}

