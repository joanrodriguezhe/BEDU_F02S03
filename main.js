//Ejemplo 1
function calculateAge(birthYear) {
    let age = 2021 - birthYear;
    return age
}

function yearsUntilRetirement(birthYear, name) {
    let age = calculateAge(birthYear);
    var retirement = 65 - age;
    console.log(`${name} retires in ${retirement} years.`);
}

yearsUntilRetirement(1995, 'José A.');

//Reto 1

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(5, 3));

//Ejemplo 2

const whatDoYouDo = function (job, name) {
    switch (job) {
        case 'developer':
            return `${name} develops cool apps`;
        case 'designer':
            return `${name} designs awesome websites`;
        default:
            return `${name} does something else`;
    }
}

console.log(whatDoYouDo('developer', 'John Doe'));
console.log(whatDoYouDo('designer', 'Jane Doe'));
console.log(whatDoYouDo('retired', 'Mark Doe'));


//Ejemplo 03
(function logName(lastName) {
    let fullName = `John ${lastName}`;
    console.log(fullName)
})('Doe')

