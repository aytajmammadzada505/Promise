//task 1
function sehrliQutuAc(num) {
    return new Promise((resolve, reject) => {
        if (num === 7) {
            resolve("Təbriklər, sehrli rəqəmi tapdın!")
        }
        else {
            reject("Təəssüf ki, səhv rəqəm!")
        }
    })
}

sehrliQutuAc(7)
    .then(result => console.log(result))
    .catch(error => console.error(error)) 

sehrliQutuAc(3)
    .then(result => console.log(result))
    .catch(error => console.error(error))
    
//task 2
async function balYoxla(bal) {
    try {
        if (bal < 0 || bal > 100) {
            throw new Error("Yanlış bal daxil edildi!")
        }
        if (bal >= 50) {
            return "İmtahandan keçdin!"
        }
        else {
            return "Kəsildin!"
        }
    }
    catch (error) {
        console.error(`Xəta baş verdi: ${error.message}`)
    }
}
balYoxla(65)
    .then(result => console.log(result))
    .catch(error => console.log(error))

balYoxla(40)
    .then(result => console.log(result))
    .catch(error => console.log(error))

//task 3
function sifarisVer(metbexHazirdirmi) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (metbexHazirdirmi) {
                resolve("Sifarişiniz hazırdır, nuş olsun!")
            } else {
                reject("Üzr istəyirik, mətbəx bağlandı!")
            }
        }, 2000)
    })
}

async function anaProqram(metbexHazirdirmi) {
    try {
        const order = await sifarisVer(metbexHazirdirmi);
        console.log(order);

    }
    catch (xeta) {
        console.log("xeta bas verdi");
    }
}
anaProqram(true); 
anaProqram(false); 


//task 4
const student1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Əli finişə çatdı!")
    }, 2000)
})

const student2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Vəli finişə çatdı!")
    }, 1000)
})

const student3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Pirməmməd finişə çatdı!")
    }, 3000)
})
Promise.all([student1, student2, student3])
    .then(result => console.log(result))
    .catch(error => console.log(error))

//task 5


