
async function info() {
    const result =await fetch('db.json')
    const name = await result.json()
    console.log(name);
}

info()


async function info1() {
    const result =await fetch('db1.json')
    const name = await result.json()
    console.log(name);
}

var details = info1()
console.log(details);


