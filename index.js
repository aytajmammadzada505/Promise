
//task 1
let num = 7;

const sehrliQutuAc = new Promise((resolve, reject) => {
    if (num === 7) {
        resolve("Təbriklər, sehrli rəqəmi tapdın!")
    }
    else {
        reject("Təəssüf ki, səhv rəqəm!")
    }
})

sehrliQutuAc
    .then(result => console.log(result))
    .catch(error => console.error(error)) */

    
//task 2
