$(document).ready(function () {

    // Retrieving date & time using Moment.JS
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

        // Start from 9AM & go to 5PM (e.g., regular business hours)
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

        // Get stored plans from localStorage
        // Parsing the JSON string to an object
        let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
      
        // If plans were retrieved from localStorage, update the plan array to it
        if (storedPlans !== null) {
            planTextArr = storedPlans;
        };
        // save input to scheduler
        $('.saveBtn').click(function (e) {
            event.preventDefault();
            var input = $(this).prev();
            var storedPlans = input.val();
            var key = input.attr("data-index");
            localStorage.setItem(key, storedPlans);
        });


        // Function to auto-refresh page after 5 minutes to ensure time-block
        // colors update every hour without having to manually refresh the page.
        setTimeout(function () {
            location.reload();
        }, 300000);

    }
})