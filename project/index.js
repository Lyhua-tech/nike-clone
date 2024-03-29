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
// const array = [191, 19, "919", null, "hdia"]
// function counttruthy(array){
//     let count = 0;
//     for(let i=0;i< array.length;i++){
//         if (i){
//             count += 1;
//         }
//     }
//     if (count == 0){
//         return "no truthy value.";
//     }
//     else{
//         return count;
//     }
// }
// console.log(counttruthy(array))

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
// console.log(calculateGrade(100));

// function showStar(n){
//     for(let i = 1; i<=n; i++){
//         let result = "*"
//         console.log(result.repeat(i));
//     }
// }
// console.log(showStar(5))

// function primNumber(num){
//     const array = [];
//     for(let i = 2; i <=num; i++){
//         for(let j = 1; j <=num; j++){
//             if (i % j == 0){
//                 array.push(i);
//             }
//         }
//     }
// }
// program to check if a number is prime or not

// take input from the user
// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n <= 3) return true;

//     if (n % 2 === 0 || n % 3 === 0) return false;

//     for (let i = 5; i * i <= n; i = i + 6) {
//         if (n % i === 0 || n % (i + 2) === 0) return false;
//     }

//     return true;
// }

// function primeNumbers(n) {
//     let primes = [];

//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             primes.push(i);
//         }
//     }

//     return primes;
// }

// console.log(primeNumbers(100));
// function primeNumber(num){
//     const array = []
//     for(let i = 3; i<= num; i+=2){
//         if (i <= 3){
//             array.push(i-1)
//         }
//         if (i == 3){
//             array.push(i)
//         }
//         if (i % 3 != 0){
//             array.push(i)
//         }
//     }
//     for(let i = 0; i<array.length; i++){
//         if (num % array[i] == 0){
//             console.log(array[i])
//         }
//     }
// }
// console.time('primeNumber runtime');
// primeNumber(30);
// console.timeEnd('primeNumber runtime');