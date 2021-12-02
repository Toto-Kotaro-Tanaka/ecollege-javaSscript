function datesDiff(date1, date2) {
    // Constant for milliseconds in a day
    const DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    let date1_mill = date1.getTime();
    let date2_mill = date2.getTime();

    // Calculate the difference in milliseconds
    let difference_mill = Math.abs(date1_mill - date2_mill);

    // Convert back to days and return
    return Math.round(difference_mill / DAY);
}

let current_date = new Date();

let new_years_date = new Date();
new_years_date.setFullYear(new_years_date.getFullYear() + 1);
new_years_date.setMonth(0);
new_years_date.setDate(1);

let days_left = datesDiff(current_date, new_years_date);
console.log(`${days_left} left till new year`);

function getTheDay(date1) {
    let myDate = new Date(date1);
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let n = weekday[myDate.getDay()];
    alert(
        "The day of the week is " +
        n +
        "for the following date: " +
        myDate.toString(),
    );
}