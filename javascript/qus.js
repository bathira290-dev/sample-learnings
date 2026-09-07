// let arr = [10, 20, 30, 40, 50];
// for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
// }
// console.log(arr);

// duplicate number 
// let numbers = [10, 20, 30, 20, 40, 10, 50, 30];

// let duplicates = [];
// let occu = {};
// for (let value of numbers) {
//    if (occu[10]) {
//        occu[10] = ++occu[10];
//    } else {
//        occu[10] = 1;
//     }
// }
// for (let key in occu) {
//    if (occu[key] > 1) {
//        duplicates.push(key);
//     }
// }
// console.log(duplicates);

// target 
// let numbers = [10, 20, 10, 30, 10, 40, 20];
// let target = 10;
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] == target) {
//        count++;
//    }
// }
// console.log(count);


// Find All Pairs Whose Sum is 10.

// let numbers = [2, 8, 3, 7, 5, 5, 1, 9];
// let target = 10;
// let pairs = [];

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] + numbers[j] === target) {
//             pairs.push([numbers[i], numbers[j]]);
//         }
//     }
// }
// console.log(pairs);

// Replace Negative Numbers with 0.
//  let numbers = [10, -5, 20, -8, 30, -2];
//  for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             numbers[i] = 0;
//         }
//     }
//    console.log(numbers);

    // Count Numbers Greater Than 50.

    // let numbers1 = [25, 75, 40, 90, 55, 30];
    // let count = 0;
    // for (let i = 0; i < numbers1.length; i++){
    //     if (numbers1[i] > 50) {
    //         count++;
    //     }
    // }
    // console.log(count);

    //Reverse an Array Without Using Array Methods

    // let numbers2 = [10, 20, 30, 40, 50];
    // let reversedArray = [];
    // for (let i = numbers2.length - 1; i >=0; i--){
    //     reversedArray.push(numbers2[i]);
    // }
    // console.log(reversedArray);

    // Find the Least Repeated Number.
    // let numbers3 = [10, 20, 10, 30, 20, 10, 40, 30];
    // let occu = {};
    // for (let value of numbers3) {
    //     occu[value] = (occu[value] || 0) + 1;
    // }
    // let leastRepeated = null;
    // let minCount = Infinity;
    // for (let key in occu) {
    //     if (occu[key] < minCount) {
    //         minCount = occu[key];
    //         leastRepeated = key;
    //     }
    // }
    // console.log(leastRepeated);

    //Find Common Elements Without Using includes().
//   let arr1 =[10, 20, 30, 40];
//   let arr2 = [20, 30, 50, 60];
//   let commenElements = [];
//   for (let i =0; i < arr1.length; i++) {
//     for (let j =0; j < arr2.length; j++) {
//         if ( arr1[i] === arr2[j]) {
            
//         }
//     }
// }
// console.log(commenElements);


 //Move all the zeros to the end of the array.

//   const arra = [0, 2, 5, 0, 2, 10, 6, 0, 22];
//   for (let i = 0; i < arra.length; i++) {
//     if (arra[i] === 0) {
//         arra.splice(i, 1);
//         arra.push(0);
//     }
// }
// console.log(arra);


 // Print square pattern
// for (let i = 0; i < 5; i++) {
//     let row = "";
//     for (let j = 0; j < 5; j++) {
//         row = row + "*";
//     }
//     console.log(row);
//}


//Print Increasing Triangle
//  for (let i = 0; i < 5; i++) {
//         let row = "";
//         for (let j = i; j >=0; j--) {
//             row = row + "*";
//         }
//         console.log(row);
//     }


    //Print Hollow Square.
    // let n = 5;
    // for (let i = 0; i < n; i++){
    //     let row = "";
    //     for (let j = 0; j < n; j++){ 
    //         if(i === 0 || i === n - 1 || j === 0 || j === n - 1){
    //             row = row + " * ";
    //         } else {
    //             row = row + "   ";
    //         }
    //     }
    //     console.log(row);
    // }   


    //Print Same Number in Each Row
    //  let n = 5;
    // for (let i = 1; i <= n; i++) {
    //     let row = "";
    //     for (let j = 0; j < i; j++) {
    //         row = row + i + " ";
    //     }
    //     console.log(row);
    // }



    // Print the following pattern: 
// let count = 1;
// for (let i = 1; i <= 4; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row = row + count + " ";
//         count++;
//     }
//     console.log(row);
// }