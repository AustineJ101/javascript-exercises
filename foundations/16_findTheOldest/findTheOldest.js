const findTheOldest = function(people){
    let currentYear = new Date().getFullYear();

    for(let person of people){
        if(person.yearOfDeath == undefined){
            person["age"] = currentYear - person.yearOfBirth;
        }else{
            person["age"] = person.yearOfDeath - person.yearOfBirth;
        }
    }

    people.sort((a,b) => b.age - a.age);

    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
