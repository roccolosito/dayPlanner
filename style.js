$(document).ready(function () {

    // Retrieving date & time from Moment.JS
    const today = moment().format('LLLL');

    // Code to have date & time displayed on the webpage 
    let currentTime = $('#currentTime');
    currentTime.text(today);

    // function addTimeBlock() {
    //     var tb = $("<tr>");
    //     // var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
    //     tb.append($("<td>").text());
    //     $('.plannerContainer').append(tb);
    // };  

    // addTimeBlock(["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]);

    

    //   // build calendar by row for fix set of hours
    //   for (let hour = 9; 17 => hour; hour++) {
    //     // index for array use offset from hour
    //     let index = hour - 9;

    // // build row components
    // let rowDiv = $('<div>');
    // rowDiv.addClass('row');
    // rowDiv.addClass('time-block');
    // rowDiv.attr('hour-index', hour);

    // // Create time-block column & add to 
    // let timeBlock = $('<div>');
    // timeBlock.addClass('col-md-1');

    // // create timeBlock element (contains time)
    // const timeBox = $('<span>');
    // // can use this to get value
    // timeBox.attr('class', 'timeBox');

    // // format hours for display
    // let displayHour = 0;
    // let ampm = "";
    // if (hour > 12) {
    //     displayHour = hour - 12;
    //     ampm = "pm";
    // } else {
    //     displayHour = hour;
    //     ampm = "am";
    // }

    // // populate timeBox with time
    // timeBox.text(`${displayHour} ${ampm}`);

})