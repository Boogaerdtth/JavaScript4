const age = 30;
const isFemale = false;
const driverStatus = "bb";
const name = "bram"
// const name = "sarah"
const totalAmount = 20;

if (age >= 18) {
    console.log("Persoon mag naar binnen");
} else {
    console.log("Persoon mag niet naar binnen");
}
if (isFemale) {
    console.log("U gaat door voor de koelkast");
} else {
    console.log("u mag niet naar deze ladies night");
}
if (driverStatus == "bob") {
    console.log("u mag wegrijden");
} else {
    console.log("beter niet wegrijden");
}

if (age >= 18 && age < 26) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("betalen, Vriend!");
}

if (name === "bram" || name === "sarah") {
    console.log("Gratis bier!");
} else {
    console.log("Je doet niet meer aan onze ludieke actie!");
}

if (totalAmount > 100) {
    console.log('gratis champi!!')
} else if (totalAmount > 50) {
    console.log('Gratis portie Nachos!!');
} else if (totalAmount > 25) {
    console.log('Gratis portie vegabitterballen!!');
} else {
    console.log('U krijgt niks extras')
}