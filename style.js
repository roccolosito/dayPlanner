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

        // Save plans inputs to Local Storage.
        $('.saveBtn').click(function(e) {
            event.preventDefault();
            var input = $(this).prev();
            var storedPlans = input.val();
            var key = input.attr("data-index");
            saveData(key, storedPlans);
        });

        function saveData(key, storedPlans) {
            localStorage.setItem(key, storedPlans);
        }

        function getData(key) {
            return localStorage.getItem(key);

        }

        // Function to auto-refresh page after 5 minutes to ensure time-block
        // colors update every hour without having to manually refresh the page.
        setTimeout(function () {
            location.reload();
        }, 300000);

    }
})