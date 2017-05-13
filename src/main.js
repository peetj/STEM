let $ = document;
/**
 * Express all quantities in seconds
 */
const ONE_PLANCK_TIME_SECOND  = 0.00000000000000000000000000000000000000000001;
const ONE_YOCTO_SECOND  = 0.000000000000000000000001;
const ONE_ZEPTO_SECOND  = 0.000000000000000000001;
const ONE_ATTO_SECOND  = 0.000000000000000001;
const ONE_FEMTO_SECOND = 0.000000000000001;
const ONE_PICO_SECOND  = 0.000000000001;
const ONE_NANO_SECOND  = 0.000000001;
const ONE_MICRO_SECOND  = 0.000001;
const ONE_MILLI_SECOND  = 0.001;
const ONE_CENTI_SECOND  = 0.01;
const ONE_DECI_SECOND = 0.1;
const ONE_SECOND = 1;
const ONE_MINUTE = 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_WEEK = ONE_DAY * 7;
const ONE_MONTH = ONE_DAY * 30;
const ONE_YEAR = ONE_WEEK * 52;
const ONE_DECADE = ONE_YEAR * 10;
const ONE_CENTURY = ONE_DECADE * 10;
const ONE_MILLENIUM = ONE_CENTURY * 10;

let ordersOfMagnitude = [
    ONE_PLANCK_TIME_SECOND,
    ONE_YOCTO_SECOND,
    ONE_ZEPTO_SECOND,
    ONE_ATTO_SECOND,
    ONE_FEMTO_SECOND,
    ONE_PICO_SECOND,
    ONE_NANO_SECOND,
    ONE_MICRO_SECOND,
    ONE_MILLI_SECOND,
    ONE_CENTI_SECOND,
    ONE_DECI_SECOND,
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
    ONE_WEEK,
    ONE_MONTH,
    ONE_YEAR,
    ONE_DECADE,
    ONE_CENTURY,
    ONE_MILLENIUM
];


function howMany(x, y){
    return y/x;
}

function formatNumber (n) {
    return numeral(n).format('0,0') === "NaN" ? numeral(n).format('0,0e+0') : numeral(n).format('0,0');
}

window.onload = function() {
    // Setup events
    $.getElementById('time-start').onchange = function(e) {
        // Get x and y
        let x = ordersOfMagnitude[parseInt(e.target.value,10)];
        let y = ordersOfMagnitude[parseInt($.getElementById('time-end').value, 10)];

        // Work out the answer
        let answer = howMany(x, y);

        // Set the value
        $.getElementsByClassName('answer-span')[0].innerHTML = formatNumber(answer);
    }

    $.getElementById('query-type').onchange = function(e) {

    }

    $.getElementById('time-end').onchange = function(e) {
        // Get x and y
        let x = ordersOfMagnitude[parseInt($.getElementById('time-start').value,10)];
        let y = ordersOfMagnitude[parseInt(e.target.value, 10)];

        // Work out the answer
        let answer = howMany(x, y);

        // Set the value
        $.getElementsByClassName('answer-span')[0].innerHTML = formatNumber(answer);
    }
}
