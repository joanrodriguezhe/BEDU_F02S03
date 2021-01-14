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

yearsUntilRetirement(1995,'José A.');

