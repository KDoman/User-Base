const container = document.querySelector('#container');

// person class
class Person{
    constructor(name,surname,date,city,postcode){
        this.name = name;
        this.surname = surname;
        this.date = date;
        this.city = city;
        this.postcode = postcode;
    }
}

const userPanel = document.querySelector('#add-user-panel')
const submitUserAddPanel = document.querySelector('#submit-user-add-panel')
const plusSign = document.querySelector('#plus-Sign');
const inputName = document.querySelector('#inputName');
const inputSurrname = document.querySelector('#inputSurrname');
const inputDate = document.querySelector('#inputDate');
const inputCity = document.querySelector('#inputCity');
const inputPostcode = document.querySelector('#inputPostcode');
const resignation = document.querySelector('#inputResignation')

let addUserBox = function () {

    // creating one div for each user
    let newUserBox = document.createElement('div');
    newUserBox.classList.add('new-user');
    container.append(newUserBox);

    // creating div's for each info (name, surrname etc...)
    let nameUser = document.createElement('div');
    nameUser.classList.add('name-user');
    let surnameUser = document.createElement('div');
    surnameUser.classList.add('surname-user');
    let dateUser = document.createElement('div');
    dateUser.classList.add('date-user');
    let cityUser = document.createElement('div');
    cityUser.classList.add('city-user');
    let postcodeUser = document.createElement('div');
    postcodeUser.classList.add('postcode-user');
    // let selectUser = document.createElement('div');
    // selectUser.classList.add('.select-user');

    // adding all div's into one div
    newUserBox.append(nameUser,surnameUser,dateUser,cityUser,postcodeUser)

    // take inner text in inputs to display them on info div's
    let newUser = new Person(inputName.value,inputSurrname.value,inputDate.value,inputCity.value,inputPostcode.value);
    nameUser.innerText = newUser.name;
    surnameUser.innerText = newUser.surname;
    dateUser.innerText = newUser.date;
    cityUser.innerText = newUser.city;
    postcodeUser.innerText = newUser.postcode;
}

// Plus sign on click
plusSign.addEventListener('click',() => {
    userPanel.style.display = 'grid';
    resignation.addEventListener('click',() => {
        userPanel.style.display = 'none';
    })
})

// Submit button on click (plus sign div)
submitUserAddPanel.addEventListener('click',() => {
    addUserBox();
    userPanel.style.display = 'none';
});