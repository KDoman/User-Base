const container = document.querySelector('#container');
const userPanel = document.querySelector('#add-user-panel')
const submitUserAddPanel = document.querySelector('#submit-user-add-panel')
const plusSign = document.querySelector('#plus-Sign');
const inputName = document.querySelector('#inputName');
const inputSurrname = document.querySelector('#inputSurrname');
const inputDate = document.querySelector('#inputDate');
const inputCity = document.querySelector('#inputCity');
const inputPostcode = document.querySelector('#inputPostcode');
const resignation = document.querySelector('#inputResignation');
const deleteQuestionPanel = document.querySelector('#delete-question-panel');
const deleteQuestionPanelYesButton = document.querySelector('#delete-question-panel-button-div-yes');
const deleteQuestionPanelNoButton = document.querySelector('#delete-question-panel-button-div-no');
const deleteQuestionPanelInfoUser = document.querySelector('#delete-question-panel-info-user');







// person class
class Person{
    constructor(name,surname,date,city,postcode){
        this.name = name;
        this.surname = surname;
        this.date = date;
        this.city = city;
        this.postcode = postcode;
    }
    boxUser = () => {
        inputName.innerText = this.name;
        inputSurrname.innerText = this.surname;
        inputDate.innerText = this.date;
        inputCity.innerText = this.city;
        inputPostcode.innerText = this.postcode;

        // creating one div for each user

        let newUserBox = document.createElement('div');
        newUserBox.classList.add('new-user');
        container.append(newUserBox);

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
        let selectUser = document.createElement('div');
        selectUser.classList.add('select-user');        
        let selectUserFirstImg = document.createElement('img');
        selectUserFirstImg.setAttribute('src', 'cross-mark.png');
        selectUser.append(selectUserFirstImg);
        let selectUserSecondImg = document.createElement('img');
        selectUserSecondImg.setAttribute('src', 'edit.png');
        selectUser.append(selectUserSecondImg);

        newUserBox.append(nameUser, surnameUser, dateUser, cityUser, postcodeUser,selectUser);

        nameUser.innerText = this.name;
        surnameUser.innerText = this.surname;
        dateUser.innerText = this.date;
        cityUser.innerText = this.city;
        postcodeUser.innerText = this.postcode;
        
        const userCreate = [nameUser,surnameUser,dateUser,cityUser,postcodeUser,selectUser]


        selectUserFirstImg.addEventListener('click', () => {
            deleteQuestionPanel.style.display = 'block';
            deleteQuestionPanelInfoUser.innerHTML = 
            `<p>Name: ${this.name}</p>
             <p> Surname: ${this.surname}</p>
             <p> City: ${this.city}</p>
             <p> Date of birth: ${this.date}</p>
             <p> Postcode: ${this.postcode}</p>
            `
            deleteQuestionPanelNoButton.addEventListener('click', () => {
                deleteQuestionPanel.style.display = 'none';
            })
            deleteQuestionPanelYesButton.addEventListener('click', () => {
                newUserBox.remove(userCreate)
                deleteQuestionPanelInfoUser.innerHTML = "";
                deleteQuestionPanel.style.display = 'none';
            }) 
        })

    }


}



plusSign.addEventListener('click', () => {
    userPanel.style.display = 'grid';
    resignation.addEventListener('click', () => {
        userPanel.style.display = 'none';
    })
})

submitUserAddPanel.addEventListener('click', () => {
    userPanel.style.display = 'none';
    let newUser = new Person(inputName.value, inputSurrname.value, inputDate.value, inputCity.value, inputPostcode.value);
    newUser.boxUser()
})