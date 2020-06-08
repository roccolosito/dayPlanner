$(document).ready(function () {

    // Retrieving date & time from Moment.JS
    const today = moment().format('LLLL');

    // Code to have date & time displayed on the webpage 
    let currentTime = $('#currentTime');
    currentTime.text(today);

    // Calling the compareTime() function
    compareTime();

    // Comparing the current hour to the correlating timeBLock so that past, present & future
    // times are color-coordinated
    function compareTime() {
        var nowTime = parseInt(moment().format('HH'));

        //Start from 9AM, till 5PM
        for (time = 9; 17 >= time; time++) {
            var timeBlock = parseInt($("#" + time + "hr").attr("data-index"));
            console.log(timeBlock)

            if (timeBlock < nowTime) {
                $("#" + time + "hr").addClass("past");
            } else if (timeBlock == nowTime) {
                $("#" + time + "hr").addClass("present");
            } else if (timeBlock > nowTime) {
                $("#" + time + "hr").addClass("future");
            }
        }

        // "background", "salmon"

}})