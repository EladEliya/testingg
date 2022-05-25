let num = +prompt("הכנס מספר שלם:  ");

console.log(`assembly number:  ${getAssembly(num)}`);



function getAssembly(x) {
    let sum = 1;
for (let i = 2; i <= x; i++) {
    sum*=i;
       
}
return sum;

    
}