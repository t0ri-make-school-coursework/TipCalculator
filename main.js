/*jslint browser */

/********************************

        Default Variables

********************************/
let billTotal = document.getElementById('amount').value;
let tipValue = document.getElementById('percent').value;
let peopleAmount = document.getElementById('people').value;

/********************************

        DOM Variables

********************************/
let percentInputValue = document.getElementById('percent');
let peopleInputValue = document.getElementById('people');

let tipDecreaseButton = document.getElementById('tip-decrease');
let tipIncreaseButton = document.getElementById('tip-increase');

let peopleDecreaseButton = document.getElementById('people-decrease');
let peopleIncreaseButton = document.getElementById('people-increase');

let tipOutput = document.getElementById('tip');
let totalOutput = document.getElementById('total');

let tipEachOutput = document.getElementById('tipeach');
let totalEachOutput = document.getElementById('totaleach');


/********************************

            Tip

********************************/
let refreshPercentInputValue = function() {
    percentInputValue.innerHTML = tipValue;
};

// tip decrease
tipDecreaseButton.addEventListener('click', function() {

    tipValue = Number(tipValue) - 5;
    console.log('tip decrease! tip value: ' + tipValue);

    refreshPercentInputValue();
});

// tip increase
tipIncreaseButton.addEventListener('click', function() {

    tipValue = Number(tipValue) + 5;
    console.log('tip increase! tip value: ' + tipValue);

    refreshPercentInputValue();
});


/********************************

            People

********************************/
let refreshPeopleInputValue = function() {
    peopleInputValue.innerHTML = peopleAmount;
};

// people decrease
peopleDecreaseButton.addEventListener('click', function() {

    peopleAmount = Number(peopleAmount) - 1;
    console.log('people decrease! tip value: ' + peopleAmount);

    refreshPeopleInputValue();
});

// people increase
peopleIncreaseButton.addEventListener('click', function() {

    peopleAmount = Number(peopleAmount) + 1;
    console.log('people increase! tip value: ' + peopleAmount);

    refreshPeopleInputValue();
});



/********************************

            Calculate

********************************/
// // call
// document.getElementById('calculate').addEventListener('click', calculate);
//
// // function
// function calculate() {
//     // calculating tools
//     let totalTipInputValue = Number(billTotal) * (Number(tipValue) / 100);
//     let totalBillInputValue = Number(billTotal) + Number(totalTipInputValue);
//
//     let eachBillInputValue = Number(totalBillInputValue) / Number(peopleAmount);
//     let eachTipInputValue = Number(totalTipInputValue) / Number(peopleAmount);
//
//     // dom
//     totalOutput.innerHTML = "$" + Number(totalBillInputValue).toFixed(2);
//     tipOutput.innerHTML = "$" + Number(totalTipInputValue).toFixed(2);
//
//     totalEachOutput.innerHTML = "$" + Number(eachBillInputValue).toFixed(2);
//     tipEachOutput.innerHTML = "$" + Number(eachTipInputValue).toFixed(2);
// };
