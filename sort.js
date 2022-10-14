// const arr = [2, 4, 65, 76, 3, 89, 0]

// for(let i = 0; i < arr.length - 1; i++){
//     for(let j = i + 1; j < arr.length; j++){
//         if (arr[i] > arr[j]){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);
//console.log(arr[arr.length- 1], arr[0]); //vuvid pershogo i ostannogo chisla


// let n = 5;
// let str = '';

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         str += j ;
//     }
//     str += '\n';
// }
// console.log(str);

let n = 5;
let str = '';
// potribno pererobutu piramidku
for (let i = 1; i <= n; i++) {
    str += " ".repeat(n - 1);
    for (let j = 1; j <= i; j++) {
        str += j ;
    }
    // for (let j = i - 1; j >= 1; j--) {
    //     str += j;
    // }
    str += '\n';
}
console.log(str);


