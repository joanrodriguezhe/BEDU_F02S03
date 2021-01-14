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

