

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
        //user[0].id 1234  FALSE
        //user[1].id 4321  FALSE
        //user[2].id 4444  TRUE
    if (users[i].points > 80) {
        // i = 2
        //    index of where to remove, number to remove
        users.splice(i, 1);
    }
}

console.log(users);

let names = [
    "George", 
    "Jenny", 
    "Brit"
]