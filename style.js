$(document).ready(function () {

    // Retrieving date & time from Moment.JS
    const today = moment().format('LLLL');
    
    // Code to have date & time displayed on the webpage 
    let currentTime = $('#currentTime');
    currentTime.text(today);

//   // build calendar by row for fix set of hours
//   for (let hour = 9; 17 => hour; hour++) {
//     // index for array use offset from hour
//     let index = hour - 9;
    
    // build row components
    let rowDiv = $('<div>');
    rowDiv.addClass('row');
    rowDiv.addClass('plannerRow');
    rowDiv.attr('hour-index',hour);

})