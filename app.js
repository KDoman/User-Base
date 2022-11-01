const container = document.querySelector('#container');


class Person{
    constructor(name,surname,date,city,postcode){
        this.name = name;
        this.surname = surname;
        this.date = date;
        this.city = city;
        this.postcode = postcode;
    }
    
    addName = () => {
        let nameBox = document.createElement('div');
        nameBox.classList.add('name-user')
        nameBox.append(this.name);
        
    }
    addSurname = () => {
        let surnameBox = document.createElement('div');
        surnameBox.classList.add('surname-user')
        surnameBox.append(this.surname);
        
    }
    addDate = () => {
        let dateBox = document.createElement('div');
        dateBox.classList.add('date-user')
        dateBox.append(this.date);
    }
    addCity = () => {
        let cityBox = document.createElement('div');
        cityBox.classList.add('city-user')
        cityBox.append(this.city);
    }
    addPostcode = () => {
        let postcodeBox = document.createElement('div');
        postcodeBox.classList.add('postcode-user')
        postcodeBox.append(this.postcode);
    }
    // addInfoBox = () => {
    //     const newUserDiv = document.createElement('div');
    //     newUserDiv.classList.add('new-user');
    //     container.append(newUserDiv);
    //     newUserDiv.append(this.name);
    //     newUserDiv.append(this.surname);
    //     newUserDiv.append(this.date);
    //     newUserDiv.append(this.city);
    //     newUserDiv.append(this.postcode);
    // }
}




const userPanel = document.querySelector('#add-user-panel')
const submitUserAddPanel = document.querySelector('#submit-user-add-panel')
const plusSign = document.querySelector('#plus-Sign');
const inputName = document.querySelector('#inputName');
const inputSurrname = document.querySelector('#inputSurrname');
const inputDate = document.querySelector('#inputDate');
const inputCity = document.querySelector('#inputCity');
const inputPostcode = document.querySelector('#inputPostcode');



plusSign.addEventListener('click',() => {
    userPanel.style.display = 'grid';
    inputName.value = this.name;
    inputSurrname.value = this.surname;
    inputDate.value = this.date;
    inputCity.value = this.city;
    inputPostcode.value = this.postcode;
    let user = new Person(this.name,this.surname,this.date,this.city,this.postcodeCity);
    submitUserAddPanel.addEventListener('click',() => {
        user.addName();
        user.addSurname();
        user.addDate();
        user.addCity();
        user.addPostcode();
        const newUserDiv = document.createElement('div');
        newUserDiv.classList.add('new-user');
        container.append(newUserDiv);
        newUserDiv.append(this.name);
        newUserDiv.append(this.surname);
        newUserDiv.append(this.date);
        newUserDiv.append(this.city);
        newUserDiv.append(this.postcode);
        userPanel.style.display = 'none';
    })
})


// plusSign.addEventListener('click',() => {
//     userPanel.style.display = 'grid';
//     inputName.innerText = this.name;
//     inputSurrname.innerText = this.surname;
//     inputDate.innerText = this.date;
//     inputCity.innerText = this.city;
//     inputPostcode.innerText = this.postcode;
//     let user = new Person(this.name,this.surname,this.date,this.city,this.postcodeCity);
//     user.addName();
//     user.addSurname();
//     user.addDate();
//     user.addCity();
//     user.addPostcode();
// })



// // const user1 = new Person('adam','lolo','ddas','dsadas','dsadas');
// // const user2 = new Person('adaaam','lolo','ddas','dsadas','dsadas');
// // const user3 = new Person('adaaam','lolo','ddas','dsadas','dsadas');


// user1.addName();
// user1.addSurname();
// user1.addDate();
// user1.addCity();
// user1.addPostcode();

// user2.addName();
// user2.addSurname();
// user2.addDate();
// user2.addCity();
// user2.addPostcode();

// user3.addName();
// user3.addSurname();
// user3.addDate();
// user3.addCity();
// user3.addPostcode();