// function speed(n){
//     let result = Math.round(n/10) - 7;
//     let point = (result * 10) / 5;
//     if (result == 0){
//         return "no point";
//     }
//     else if((result) > 0){
//         if (point >= 12){
//             return 'No more lcience';
//         }
//         else{
//             return point
//         }
//     }
// }
// console.log(speed(90));

// function oddOreven(num){
//     return (num % 2 !== 0) ? 'odd' : 'even';
// }
// console.log(oddOreven(97));
const array = [191, 19, "919", null, "hdia"]
function counttruthy(array){
    let count = 0;
    for(let i=0;i< array.length;i++){
        if (i){
            count += 1;
        }
    }
    if (count == 0){
        return "no truthy value.";
    }
    else{
        return count;
    }
}
console.log(counttruthy(array))

// function calculateGrade(marks){
//     switch (marks){
//         case 100:
//             return "A";
//         case 90:
//             return "B";
//         case 80:
//             return "C";
//         case 70:
//             return "D";
//         case 60:
//             return "E";
//         default:
//             return "F";
//     }
// }
// console.log(calculateGrade(80));