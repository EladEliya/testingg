function showFullName() {
let first= document.getElementById("firstName");
    let last = document.getElementById("lastName");
    console.log(first.value + " " + last.value);
    
}

function showData() {
    const inputs = document.getElementsByTagName("input");
  
for (let index = 0; index < inputs.length; index++) {
    console.log(inputs[index].value); 
} 

let cars = ["ford", "renault", "dodge"];

    // console.log(inputs[0].value +" "+ inputs[1].value);
    // console.log(inputs.);
    
}


// let input1 = document.getElementById("idName")  //  <input type="text" placeholder="First name" id="idName">
// let input2 = document.getElementsByClassName("className")//<input type="text" placeholder="First name" class="className">
// let input3 = document.getElementsByTagName("title of tag(input)")//<input type="text" placeholder="First name" id="firstName">