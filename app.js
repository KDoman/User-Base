const container = document.querySelector('#container');
const boxUserAdd = document.createElement('div')
boxUserAdd.classList.add('box-user');

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
        boxUserAdd.append(nameBox)
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
}
container.append(boxUserAdd)
boxUserAdd.append(nameBox)




const user1 = new Person('adam','lolo','ddas','dsadas','dsadas');
const user2 = new Person('adaaam','lolo','ddas','dsadas','dsadas');
const user3 = new Person('adaaam','lolo','ddas','dsadas','dsadas');


user1.addName();
user1.addSurname();
user1.addDate();
user1.addCity();
user1.addPostcode();

user2.addName();
user2.addSurname();
user2.addDate();
user2.addCity();
user2.addPostcode();

user3.addName();
user3.addSurname();
user3.addDate();
user3.addCity();
user3.addPostcode();