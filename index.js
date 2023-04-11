

users = [
    {
        name: "George",
        id: 1234,
        email: "George@George.com",
        points: 50,
        passing: false
    },
    {
        name: "Jenny",
        id: 4321,
        email: "Jenny@Jenny.com",
        points: 90,
        passing: true
    },
    {
        name: "Brit",
        id: 4444,
        email: "Brit@Brit.com",
        points: 90,
        passing: true
    }

]

// for (let i=0; i<users.length; i++) {
//         //user[0].id 1234  FALSE
//         //user[1].id 4321  FALSE
//         //user[2].id 4444  TRUE
//     if (users[i].points > 80) {
//         // i = 2
//         //    index of where to remove, number to remove
//         users.splice(i, 1);
    
//     }
// }
for (let i=users.length-1; i>=0; i--) {
    //user[2].id 4444  TRUE
    //user[1].id 4321  FALSE
    //user[0].id 1234  FALSE
    if (users[i].points > 80) {
        // i = 2
        // index of where to remove, number to remove
        users.splice(i, 1);
    }
}

console.log(users);

let names = [
    "George", 
    "Jenny", 
    "Brit"
]

let rentalYears = [
    2011,
    2007,
    2015,
    2009,
    2020
]

// check the average year

const checkAverageYear = (yearArray) => {
    let totalYears = 0;

    yearArray.forEach((item) => {
        totalYears += item;
    })
    
    let averageYears = totalYears/rentalYears.length;
    console.log(Math.floor(averageYears));
}


checkAverageYear(rentalYears)
// remove everything before some year
const filterByYear = (yearArray, yearToFilterBy) => {
    let newerCars = yearArray.filter((item) => {
        if (item > yearToFilterBy) {
            return item
        }
    });
    yearArray = [...newerCars]
    console.log(yearArray);
}

filterByYear(rentalYears, 2010)

// check average  year again
checkAverageYear(rentalYears)





let myRentalCar = {
    make: "Toyota",
    year: 2011,
    features: ["All-wheel drive", "seatbelts",  "bluetooth"],
}

// remove seatbelts
// myRentalCar.features.splice(1,1);
myRentalCar.features.splice(myRentalCar.features.indexOf("seatbelts"),1);

// let goodItems = []
// for (let i=myRentalCar.features.length-1; i>=0; i--) {
//     if (myRentalCar.features[i] !== "seatbelts"){
//         // myRentalCar.features.splice(i,1);

//         goodItems.push(myRentalCar.features[i])
//     }
// }
// myRentalCar.features = goodItems;
// .includes   returnes true or false if its in there

// myRentalCar.features.forEach((item, indexOfItem) => {
//     if (item === "seatbelts") {
//         myRentalCar.features.splice(indexOfItem, 1)
//     }
// })


// change make to "Ford"
myRentalCar.make = "Ford";
// change year to 2013
myRentalCar.year = 2008
// add property owner: "Enterprize"
myRentalCar["owner"] = "Enterprize";
// check if rental car is newer than 2010 AND has bluetooth
// if yes, set renterIsHappy: true
let isNewerCar = myRentalCar.year > 2010;
// includes method
let hasBluetooth = myRentalCar.features.includes("bluetooth");

myRentalCar.renterIsHappy = myRentalCar.year > 2010 && myRentalCar.features.includes("bluetooth")
// if (isNewerCar && hasBluetooth) {
//     myRentalCar.renterIsHappy = true
// } else {
//     myRentalCar.renterIsHappy = false
// }


console.log(myRentalCar);

// remove seatbelts from the car





let rentalCars = [
    {
        make: "Toyota",
        year: 2011,
        features: ["All-wheel drive", "seatbelts", "bluetooth"]
    },
    {
        make: "Toyota",
        year: 2007,
        features: ["sound system", "seatbelts", "bluetooth"]
    },
    {
        make: "Ford",
        year: 2015,
        features: ["sunroof", "seatbelts"]
    },
    {
        make: "Hyundai",
        year: 2009,
        features: ["heated seats", "seatbelts"]
    },
    {
        make: "Hyundai",
        year: 2020,
        features: ["heated seats", "seatbelts", "bluetooth"]
    }
]

// user selects cars from 2010+
let newerCars = []
for (let i=0; i<rentalCars.length; i++) {
    if (rentalCars[i].year >= 2010 && rentalCars[i].make.toLocaleLowerCase() === "hyundai") {
        // push to new array
        newerCars.push(rentalCars[i])
    }
}
// console.log(newerCars);

// make a new array with only these cars

// user selects cars from 2010 AND only Hyundai



// We are removing all cars older than 2012 from our fleet

// loop backwards with splice if year is < 2012

const removeOldCars = (arrayToChange) => {
    let newArray = arrayToChange.filter((carObject) => {
        // return the car object IF it is new
        if (carObject.year > 2011) {
            return carObject
        }
        // IF it is old, do nothing
    })
    console.log(newArray);
    rentalCars = newArray;
}

removeOldCars(rentalCars)

console.log({rentalCars});




let movies = [
    {

        name: "Titanic",
        releaseYear: 1997,
        director: "James Cameron",
        actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
        starActor: {
            name: "Leonardo Dicaprio",
            age: 5,
            born: 1889,
            linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",
            headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"
    
        },
        budgetInMillions: 200
    
    }
]