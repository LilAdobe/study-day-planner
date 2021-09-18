var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


var container = $(".container")
var currentTime = moment().format("HH");
var saveButton = $(".saveBtn");
var timeBlock = $(".time-block");





timeBlock.each(function () {
    var el = $(this);
    var newClass = getClass(el);el.children().eq(1).addClass(newClass);
});



function getClass(element) {
    var id = element.attr("id");
    if (parseInt(id) === parseInt(currentTime)) {
        return "present";
    }
    else if (parseInt(id) < parseInt(currentTime)) {
        return "past";
    }
    else {
        return "future";
    }
}

function getClass(element){
    const id = element.attr("id")
    switch(id) {
        case parseInt(id) === parseInt(currentTime):
            return "present"
        case parseInt(id) < parseInt(currentTime):
            return "past";
            default :"future";
    }
}


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



saveButton.on("click", function () {
    var saved = $(event.target).siblings(".description").val();
    var id = $(event.target).parent().attr("id");

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


