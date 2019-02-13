// VARIABLES
const car = {
    make: 'Audi',
    model: 'Roadster',
    color: 'brown',
    mileage: 0,
    isworking: true,

    driveTowork(){
        alert(`Old Mileage: ${this.mileage}`);
    this.mileage += 10;
    alert(`New Mileage: ${this.mileage}`);
    },
}

// FUNCTIONS

document.onkeyup = (event) => {
    // Captures The Key Press, Converts It To Lower Case, And Saves It To A Variable
    let letter = String.fromCharCode(event.keyCode).toLocaleLowerCase();

    if(letter === "D") {
        car.driveToWork();
        rewritestats();
    }

}