var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


function timeTracker() {

    var currentHour = moment().hour();

