const findTheOldest = function(people) {
    let peopleByAge = people.sort((firstPerson, secondPerson) => {
        let currentYear = 2023
        if (firstPerson.yearOfDeath == undefined) {
            firstPerson.yearOfDeath = currentYear
        }
        if (secondPerson.yearOfDeath == undefined) {
            secondPerson.yearOfDeath = currentYear
        }
        firstPersonAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth
        secondPersonAge = secondPerson.yearOfDeath - secondPerson.yearOfBirth
        if (firstPersonAge < secondPersonAge) {
            return 1
        } else {
            return -1
        }
    })
    return peopleByAge[0]
};

// Do not edit below this line
module.exports = findTheOldest;
