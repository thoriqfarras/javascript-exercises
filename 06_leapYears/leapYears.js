const leapYears = function(year) {
    /* Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing) */
    /* if (year % 4 == 0) {
        if (year % 400 == 0) {
            return true;
        } else if (year % 100 == 0) {
            return false;
        } else return true;
    } else return false; */

    // had a glimpse of the one-liner TOP had and this is what I come up with:
    return (year % 4 == 0  && year % 100 != 0) || (year % 4 == 0 && year % 400 == 0);

    // this is what TOP had:
    // return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
    // much cleaner no? :')
};

// Do not edit below this line
module.exports = leapYears;
