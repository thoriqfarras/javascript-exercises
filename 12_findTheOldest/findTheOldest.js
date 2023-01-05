const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        const age = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        if (age > oldestAge) {
            oldest = person; 
        }
    }, {
        name: null,
        yearOfBirth: 0,
        yearOfDeath: 0,
    })
};

// Do not edit below this line
module.exports = findTheOldest;
