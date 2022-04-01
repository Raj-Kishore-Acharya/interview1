var ele = document.getElementById('mainDrop');
var shipName = document.getElementById('shipName');
var shipType = document.getElementById('shipType')
var homePort = document.getElementById('homePort')
var image = document.getElementById('image')

async function info() {
    const result =await fetch('db.json')
    const name = await result.json()
    var data = ele.options[ele.selectedIndex].text
    name.forEach((res)=> {
        if(res.ship_id === data) {
            console.log(res);
            image.setAttribute('src',res.image)
            shipName.innerText = res.ship_name
            shipType.innerText = res.ship_type
            homePort.innerText = res.home_port
        }
    })
}



async function info1() {
    const result =await fetch('db1.json')
    const name = await result.json()
    name.forEach(element => {
        var childOpt = document.createElement('option');
        childOpt.setAttribute('value',element)
        childOpt.innerText = element;
        ele.appendChild(childOpt);
    });
}

info1()




