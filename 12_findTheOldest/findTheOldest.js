const findTheOldest = function(people) {
    people.forEach(person => {
        if (!person.yearOfDeath) {
            person.age = new Date().getFullYear() - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });

    let ages = people.map(person => person.age);
    let ageSortedList = people.sort((a, b) => a.age - b.age);
    return ageSortedList[ageSortedList.length - 1];
};
// Do not edit below this line
module.exports = findTheOldest;
