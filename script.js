let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


let container = $(".container")
let time = moment().format("HH");
let sb = $(".saveBtn");
let tb = $(".time-block");



tb.each(function () {
    let el = $(this);
    let newClass = getClass(el); el.children().addClass(newClass);
});



function getClass(element) {
    const id = element.attr("id")
    switch (true) {
        case parseInt(id) === parseInt(time):
            return "present"
            break
        case parseInt(id) < parseInt(time):
            return "past"
            break
        default:
           return "future"
    }
}



sb.on("click", function () {
    const saved = $(event.target).siblings(".description").val();
    const id = $(event.target).parent().attr("id");

    localStorage.setItem(id, saved);
});

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#22 .description").val(localStorage.getItem("22"));


// tB.each(function () {

//     if (parseInt(time) === parseInt($(this).attr("id"))) {
//         $(this).children("description").addClass("present");
//     }
//     else if (parseInt($(this).attr("id")) < parseInt(time)) {
//         $(this).children("description").addClass("past");
//     }
//     else {
//         $(this).children("description").addClass("future");
//     }
// });








// function getClass(element) {
//     var id = element.attr("id");
//     switch (id) {
//         case (parseInt(id) === parseInt(currentTime)):
//             return 'present';
//         case (parseInt(id) < parseInt(currentTime)):
//             return 'past';
//         default:
//         return 'future'

//     }
// }
