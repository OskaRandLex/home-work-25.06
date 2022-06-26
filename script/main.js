const itemList = [
    {name: 'Bike', year: '2013', producer: 'Germany', price: 230},
    {name: 'Car', year: '2019', producer: 'Ukraine', price: 1400},
    {name: 'Computer', year: '2003', producer: 'Italy', price: 930},
    {name: 'Mouse', year: '2020', producer: 'France', price: 130},
    {name: 'Gamepad', year: '2022', producer: 'Turkey', price: 68}
]
const priceButton = document.getElementById('sort-price');
const nameButton = document.getElementById('sort-name');
const yearButton = document.getElementById('sort-year');
const producerButton = document.getElementById('sort-producer');
const clearButton = document.getElementById('clear');
const tableDiv = document.querySelector('.table');

priceButton.addEventListener("click", priceFunc);
yearButton.addEventListener("click", yearFunc);
nameButton.addEventListener("click", nameFunc);
producerButton.addEventListener("click", prodFunc);
clearButton.addEventListener("click", clearFunc);

function clearFunc() {
    let row = document.createElement('tr');
    row.innerHTML = `<th>Name</th><th>Year</th><th>Producer</th><th>Price</th>`;
    tableDiv.innerHTML = ' ';
    tableDiv.appendChild(row);
}

function yearFunc() {

    itemList.sort((a, b) => {
        if(a.year > b.year) return 1;
        if(a.year < b.year) return -1;
        if(a.year === b.year) return 0;
    });

    clearFunc();
    let countItem = itemList.length;
    for(i = 0; i < countItem; i++) {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${itemList[i].name}</td><td>${itemList[i].year}</td><td>${itemList[i].producer}</td><td>${itemList[i].price}</td>`;
        tableDiv.appendChild(row);
    }
};

function priceFunc() {

    itemList.sort((a, b) => {
        
        if(a.price > b.price) return 1;
        if(a.price < b.price) return -1;
        if(a.price === b.price) return 0;
        console.log(itemList);
        return itemList;
    });

    console.log(itemList);
    clearFunc();
    let countItem = itemList.length;
    for(i = 0; i < countItem; i++) {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${itemList[i].name}</td><td>${itemList[i].year}</td><td>${itemList[i].producer}</td><td>${itemList[i].price}</td>`;
        tableDiv.appendChild(row);
    }
};

function nameFunc() {

    itemList.sort((a, b) => {
        
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        if(a.name === b.name) return 0;
        console.log(itemList);
        return itemList;
    });

    console.log(itemList);
    clearFunc();
    let countItem = itemList.length;
    for(i = 0; i < countItem; i++) {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${itemList[i].name}</td><td>${itemList[i].year}</td><td>${itemList[i].producer}</td><td>${itemList[i].price}</td>`;
        tableDiv.appendChild(row);
    }
};

function prodFunc() {

    itemList.sort((a, b) => {
        
        if(a.producer > b.producer) return 1;
        if(a.producer < b.producer) return -1;
        if(a.producer === b.producer) return 0;
        console.log(itemList);
        return itemList;
    });

    console.log(itemList);
    clearFunc();
    let countItem = itemList.length;
    for(i = 0; i < countItem; i++) {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${itemList[i].name}</td><td>${itemList[i].year}</td><td>${itemList[i].producer}</td><td>${itemList[i].price}</td>`;
        tableDiv.appendChild(row);
    }
};


