let userArr = [];

function sendForm() {
    let form = document.forms["myForm"];
    let firstName = form.elements["wall"];
    let lastName = form.elements["lastName"];
    let age = form.elements["age"];

  


    let user ={
        "first": firstName.value,
        "lastName":lastName.value,
        "age": age.value,
    };

    userArr.push(user);
    console.log(userArr[0]);
    alert(userArr[0].first+" "+userArr[0].lastName+" "+userArr[0].age);

}