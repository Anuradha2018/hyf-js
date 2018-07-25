function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}

const cars = generateCars(10);
console.log(cars);

const avgSpeedCars = cars.filter(function(car){
    return car.speed > 30 && car.speed < 60;
});
console.log('avgSpeedCars', avgSpeedCars);

const makersOfNonYellowCars = cars.filter(function(car){
    car.color !== 'lightyellow';
}).map(function(car){
    return car.make;
});

console.log(makersOfNonYellowCars);

function danishVersion(car){
    return{
        "mærke" :car.make,
        "farve" :car.color,
        "fart" : car.speed,
    }
}

const printDanishVersion = cars.map(danishVersion);
console.log(printDanishVersion);
