// bai 1

let products = [
    {
        name : 'Xiaomi portable charger 20000mah',
        brand : 'Xiaomi',
        price : 428,
        color : 'White',
        category : 'charger'
    },
    {
        name : 'VSmart Active 1',
        brand : 'VSmart',
        price : 5487,
        color : 'Black',
        category : 'Phone'
    },
    {
        name : 'IPhone X',
        brand : 'Apple',
        price : 21490,
        color : 'Gray',
        category : 'Phone'
    },
    {
        name : 'Samsung Galaxy A9',
        brand : 'Samsung',
        price : 8490,
        color : 'Blue',
        category : 'Phone'
    }    
];
// // 1.1
for (let i = 0; i < products.length; i++) {
    console.log(`Name: ${products[i].name}`);
    console.log(`Price: ${products[i].price}`);
}

// //1.2
console.log('----------------------------------------------');
for (let i = 0; i < products.length; i++) {
    let id = i+1;
    let newname = products[i].name;
    let newprice = products[i].price;
    console.log(`#${id}. Name: ${newname}`);
    console.log(`Price: ${newprice}`);
}
let idInput = prompt('Enter product position: ');   
if (idInput < 1 || idInput >= products.length) {
    alert("Not fourd");
}else{
    console.log(`product position is ${idInput}`)  
    console.log(products[idInput-1].name);
    console.log(products[idInput-1].brand);
    console.log(products[idInput-1].price);
    console.log(products[idInput-1].color);
    console.log(products[idInput-1].category);
}


// //1.3
console.log('----------------------------------------------');
let categoryInput = prompt("Enter your category ?(Phone/charger) ");
for (let i = 0; i < products.length; i++) {
    if (categoryInput === products[i].category) {
        console.log(`Name: ${products[i].name}`);
        console.log(`Price: ${products[i].price}`);
    }
}

//1.4
console.log('----------------------------------------------');
products[0].providers = 'PhukienzeroDientuccc';
products[1].providers = 'tgtd ddghn vhstore';
products[2].providers = 'tgtd';   
products[3].providers = 'tgtd';
for (let i = 0; i < products.length; i++) {
    let id = i+1;
    let newname = products[i].name;
    let newprice = products[i].price;
    let newproviders = products[i].providers;
    console.log(`#${id}. Name: ${newname}`);
    console.log(`Price: ${newprice}`);
    console.log(`Providers: ${newproviders}`);
}
// console.log(products);
// const index = products.map(function(e) { return e.providers; })
// console.log(index);
//1.5
console.log('----------------------------------------------');
let providerInput = prompt("Enter your providers ?");
const index = products.map(function(e) { return e.providers; }).indexOf(providerInput);
if (index > -1) {
    for (let i = 0; i < products.length; i++) {
        if (providerInput === products[i].providers) {
            console.log(`Name: ${products[i].name}`);
            console.log(`Price: ${products[i].price}`);
            console.log(`providers: ${products[i].providers}`);
        }
    } 
} else {
    alert("Not fourd");
}




// bai 2

let frontend = [
    {
        id : 1,
        name : 'HTML',
        complete : false
    },
    {
        id : 2,
        name : 'CSS',
        complete : false
    },
    {
        id : 3,
        name : 'Basics of JavaScript',
        complete : false
    },
    {
        id : 4,
        name : 'Node Package Manager (npm)',
        complete : false
    },
    {
        id : 5,
        name : 'Git',
        complete : false
    },
]

console.log(`Hi there, this is your learning tasks tp front-end developer career: `);
for (let i = 0; i < frontend.length; i++) {
    console.log(`${frontend[i].id}. ${frontend[i].name}`);
    console.log(`complete: ${frontend[i].complete}`);
}
console.log("--------------------------------------------------------------------");

a = true;
while(a){
    let input = prompt("Enter your command : (New, Delete, Update, Complete, In, Exit)");

    if (input === "New") { 
        let newtask = prompt("Enter new task: ");
        let id = frontend.length+1;
        let obj = {
            id : id,
            name : newtask,
            complete : false
        }
        frontend.push(obj);
        for (let i = 0; i < frontend.length; i++) {
            console.log(`${frontend[i].id}. ${frontend[i].name}`);
            console.log(`complete: ${frontend[i].complete}`);
        }
        console.log("--------------------------------------------------------------------");
    }
    else if (input === "Update") {
        let idInput = prompt("Enter position: ");
        if (idInput < 1 || idInput >= frontend.length+1) {
            alert("Not fourd");
        }else{
        let newname = prompt('Enter new title');
        frontend[(idInput - 1)].name = newname;
        for (let i = 0; i < frontend.length; i++) {
            console.log(`${frontend[i].id}. ${frontend[i].name}`);
            console.log(`complete: ${frontend[i].complete}`);

        }
        console.log("--------------------------------------------------------------------");
        }
    }
    else if (input === "Delete") {
        let idInput = prompt("Enter position:  ");
        if (idInput < 1 || idInput >= frontend.length+1) {
            alert("Not fourd");
        }else{
            frontend.splice(idInput-1, 1);
            for (let i = 0; i < frontend.length; i++) {
                console.log(`${frontend[i].id}. ${frontend[i].name}`);
                console.log(`complete: ${frontend[i].complete}`);
            }
            console.log("--------------------------------------------------------------------");
        }

    }else if(input === "Complete"){
        let idInput = prompt("Enter position: ");
        if (idInput < 1 || idInput >= frontend.length+1) {
            alert("Not fourd");
        }else{   
        frontend[(idInput - 1)].complete = true;
        for (let i = 0; i < frontend.length; i++) {
            console.log(`${frontend[i].id}. ${frontend[i].name}`);
            console.log(`complete: ${frontend[i].complete}`);
        }
        console.log("--------------------------------------------------------------------");
        }
    }else if(input === "Exit"){
        alert("Exit the program");
        a = false;
    }else if (input === "In") {
        for (let i = 0; i < frontend.length; i++) {
            if (frontend[i].complete === false) {
                console.log(`${frontend[i].id}. [ ] ${frontend[i].name}`);
            }
            if (frontend[i].complete === true) {
                console.log(`${frontend[i].id}. [x] ${frontend[i].name}`);
            }  
        }
    }
    else {
        alert(" New, Delete, Update, Complete, In, Exit ?");
    }

}
