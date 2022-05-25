let day = +prompt("Enter a day number ");
let input= false;

do {
    
    switch (day) {
        case 1:
        console.log("sunday");
       
        input= false;
        break;

    case 2:
        console.log("monday");
        input= false;
        break;
        case 3:
            console.log("tuesday");
            input= false;
            break;
            case 4:
        console.log("יום רביעי");
        input= false;
        break;
        case 5:
            console.log("יום חמישי");
            input= false;
            break;
            case 6:
                console.log("יום שיש");
                input= false;
                break;
                case 7:
                    console.log("יום שבת קודש");
                    input= false;
                    break;
                    
                    default:
                        console.log("number between 1-7, try again");
                        day = +prompt("Enter a day number ");
                        input= true;
}
} while (input==true);
                        
            
 
// }

//  switch (day) {
//     case 1:
//         console.log("sunday");
//         alert("sunday")
//         break;

//     case 2:
//     case 3: 
//     case 4:
//         console.log("monday");
//        break;

//     case 5:
//         console.log("יום חמישי");
//         break;
//     case 6:
//         console.log("יום שיש");
//         break;
//     case 7:
//         console.log("יום שבת קודש");
//         break;

//         default:
//             console.log("number between 1-7, try again");
//          day = +prompt("Enter a day number ");
//          break;
 
// }

// num1 = +prompt("Enter first");
// let num2 = prompt("Enter second");
// action= prompt("enter operator")
// console.log(typeof(num2));
//  num2 = Number(num2);
// console.log(typeof(num2));
// let sum;
// switch (action) {
//     case '+' :
//          sum= num1+num2;
//         console.log(num1 +"+"+num2+"="+ sum);
//         break;
//     case '*' :
//          sum= num1*num2;
//         console.log(sum);
//         break;
//     case '-' :
//          sum= num1-num2;
//         console.log(sum);
//         break;
//     case '/' :
//          sum= num1/num2;
//         console.log(sum);
//         break;

//     default:
//         break;
// }


