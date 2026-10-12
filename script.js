// Dark Mode
const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.innerHTML = "Light Mode";
    }
    else {
        themeButton.innerHTML = "Dark Mode";
    }

});


// Wet Waste Tips
const wetWaste = document.getElementById("wetWaste");

wetWaste.addEventListener("click", function() {

    document.getElementById("wasteResult").innerHTML =
        "Wet Waste: Fruit peels and vegetable scraps can be composted. Keep wet waste separate from dry waste.";

});


// Dry Waste Tips
const dryWaste = document.getElementById("dryWaste");

dryWaste.addEventListener("click", function() {

    document.getElementById("wasteResult").innerHTML =
        "Dry Waste: Keep paper, cardboard and recyclable items separate. Make sure they are clean and dry.";

});


// E-Waste Tips
const eWaste = document.getElementById("eWaste");

eWaste.addEventListener("click", function() {

    document.getElementById("wasteResult").innerHTML =
        "E-Waste: Old batteries, mobile phones and electronic items should be taken to an authorized collection centre.";

});


// Environmental Awareness Quiz
const quizForm = document.getElementById("quizForm");

quizForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let answer = document.getElementById("answer").value;

    var message = "";

    if (answer == "reduce") {
        message = "Correct Answer! Reduce and reuse products to protect the environment.";
    }
    else {
        message = "Wrong Answer! The correct answer is Reduce and reuse products.";
    }

    document.getElementById("quizResult").innerHTML = message;

});


// Eco-Friendly Activity
const activityForm = document.getElementById("activityForm");

activityForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let activity = document.getElementById("activity").value;

    var message = "";

    if (activity == "") {
        message = "Please select an activity.";
    }
    else {
        message = "Great Job! Your selected activity is: " + activity;
    }

    document.getElementById("activityResult").innerHTML = message;

});


// Display Current Year
document.getElementById("year").innerHTML = new Date().getFullYear();
