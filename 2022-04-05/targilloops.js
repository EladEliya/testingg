let number = +prompt("Enter an integer number ");
number = Math.floor(number);
 let temp = false;

// console.log(Math.floor( number/10));
// while (number >= 1){
   
// temp += (number % 10);
// number =Math.floor( number/10);

// }

// console.log("the sum of numbers: "+ temp );

for (let index = 2; index < number; index++) {
    if (number % index == 0){
        console.log(number + " / "+ index + " = "+ (number/index));
        console.log("לא מספר ראשוני");
        temp = false;
        break;
    }else {
        temp=true

    }

}
if(temp){
    console.log("המספר הוא ראשוני");
}
