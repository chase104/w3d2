const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
    companion: {
		name: "Velma",
		type: "Bat",
        companion: {
			name: "Tim",
			type: "Parasite",
            belongings: [ "small potion", "small tums"]
		}  
	}
}

// I want to remove the potion from the adventurere belongings

const removeAdventurerBelonging = (thingToRemove) => {
    // adventurer.belongings.forEach((item, indexOfTheItem) => {
    //     if (item.toLocaleLowerCase() === thingToRemove.toLocaleLowerCase()) {
    //         // 1 index of thing,  2 number of things to remove
    //         adventurer.belongings.splice(indexOfTheItem, 1)
    //     }
    // })
    for(let i=0; i<adventurer.belongings.length; i++) {
        if (adventurer.belongings[i].toLocaleLowerCase() === thingToRemove.toLocaleLowerCase()) {
                    // 1 index of thing,  2 number of things to remove
                    adventurer.belongings.splice(i, 1)
                }
    }
}
removeAdventurerBelonging("potion")
removeAdventurerBelonging("tums")


const returnParasiteCanFight = () => {
    // check if the parasite has a weapon
    // if true, return true, else false
    // an array of weapons
    return adventurer.companion.companion.belongings.includes("small sword");
    
    // if (adventurer.companion.companion.belongings.includes("small sword")) {
    //     return true;
    // } else {
    //     return false;
    // }
}

console.log(returnParasiteCanFight());


console.log(adventurer);


// adventurer.companion.companion.type; // "Parasite"

// let parasiteBelongins = adventurer.companion.companion.belongings;

// adventurer.companion.companion.belongings; //["small sword", "small potion", "small tums"]

// parasiteBelongins.forEach((item) => {
//     console.log(item);
// })

// for (let i =0; i<parasiteBelongins.length; i++) {
//     console.log(parasiteBelongins[i])
// }

// let thisCompanion = adventurer.companion;
// thisCompanion.name // "Velma"

// let myArr = [20, 30, 50];

// for(let i=0; i<myArr.length; i++) {
//     console.log(myArr[i])
// }


// for(let i=0; i<adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i])
// }



// adventurer.belongings.unshift("helmet")



// let user = {
//     name: "Jerry",
//     email: "asdfqwerdfsa",
//     favoriteMovies: [3445323453, 56345346345, 452342536435],
//     theFavoriteMovie: {
//         title: "Titanic",
//         year: 1997,
//         director: "James Cameron"
//     }
// }


// display movies

// user.favoriteMovies.forEach((movieId) => {
//     // go ask API for movie information

//     // with that information display to screen
// })

// const removeFavorite = (id) => {
//     // find ID
//     // id is clicked id
//     const newArrayWithoutThisMovie = user.favoriteMovies.filter((movieId) => {
//         if (!movieId === id) {
//             return movieId
//         }
//     })
//     user.favoriteMovies = newArrayWithoutThisMovie;
//     // send to database to update information there
// }