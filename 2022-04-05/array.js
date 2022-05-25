let arr = [25,23,40,800,956,200,1022,32,48];
// for (let index = 0; index < 10 ; index++) {
//     arr.push(+prompt("Enter number")) 
       
// }
console.log(Math.max()); 






let max = arr[0];

console.log(arr);

for (let index = 1; index < arr.length; index++) {
    if (max<=arr[index]){
        max= arr[index];
    }
  
}
console.log("max number is: "+ max);

