/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let day_counter = 0;
let daily_rate = 0;
let new_total_cost = 0;
let full_btn = document.getElementById("full");
let half_btn = document.getElementById("half");
let clear_btn = document.getElementById("clear-button");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var num_btns = document.querySelectorAll("li").length;

for (var i = 0; i < num_btns; i++) {
    document.querySelectorAll("li")[i].addEventListener("click", function(event) {
        if (!event.target.classList.contains("clicked")) {
            event.target.classList.add("clicked");
            day_counter += 1;
            total_cost();
        }
    });
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function clear_all() {
    for (var i = 0; i < num_btns; i++) {
        document.querySelectorAll("li")[i].classList.remove("clicked");
    }
    
    day_counter = 0;
    new_total_cost = 0;
    total_cost();
}

clear_btn.addEventListener("click", clear_all)

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half_btn.addEventListener("click", function() {

    daily_rate = 20;
    half_btn.classList.add("clicked");
    full_btn.classList.remove("clicked");

    total_cost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full_btn.addEventListener("click", function(){

    daily_rate = 35;
    full_btn.classList.add("clicked");
    half_btn.classList.remove("clicked");

    total_cost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function total_cost() {

    let cal_cost = document.getElementById("calculated-cost");
    new_total_cost = daily_rate * day_counter
    cal_cost.innerHTML = new_total_cost;
}
