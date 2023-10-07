/* Your Code Here */
const hourlyRate = 70; 
function calculateWages(startDateStr, endDateStr, hourlyRate) {
    // Parse the date strings to Date objects
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
  
    // Calculate the time difference in milliseconds
    const timeDifference = endDate - startDate;
  
    // Calculate the number of days worked
    const daysWorked = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    console.log(`Days Worked: ${daysWorked}`);

    // Calculate the number of hours worked
    const hoursWorked = (timeDifference / (1000 * 60 * 60)) % 24;
    console.log(`Hours Worked: ${hoursWorked}`);

    // Calculate the total wages
    const totalWages = hoursWorked * hourlyRate;
    console.log(`Total Wages: ${totalWages}`);
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

