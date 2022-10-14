let string = "abcde";
console.log(string[1]);

let  array = ["a", "b", "c", "d", "e"];
console.log(array[2]);
console.log(array.join());
let array2 = array.join(""); // confertue masiv v stroku i dilut po simvolu v sereduni join()
console.log(array2);

array.push("f"); // vstavlyae simvol v kinec masiva
console.log(array);
array.pop(); // zaburae ostanniy simvol z masiva
let c = array.push("k");
console.log(c); // vuvodit kilkist simvoliv v masive

// push(), pop() - zminyut masive
// unshift() - dobavlyae elementu v pochatok masiva
// shift() - vudalyae pershiy element i zmishchue indeksu

let num = String(7); // perevod chisla v String
let num2 = 5;
console.log(num + num2); // vuvede 75 yak String

// arr1.push(arr2) dobavlyae v masiv arr1 odin element masiva arr2
// arr1.push(...arr2) - dobavlyae vsi elementu do masiva arr1 - pravilno
// const arr3 = [...arr1, ...arr2];  - odin masiv yakiy zednav dva masiva

// (...) - spred operator

// console.log(Math.max(4, 6, 90)) - vuvestu same bilshe chislo
// console.log(Math.max(...array)) - vuvestu same bilshe chislo, obovyazkovo potribno spread operator



let string2 = "Hello world";
console.log(string2);
console.log(string2.split(" ")); // tilku dilut ale ne perestvorue
console.log(string2);
string2 = string2.split(" "); // perestvoruemo stroku
console.log(string2);


// string2.length - dovzhina stroku
// string2.slice(2, 5) - vurizae z strichku strichku
// string2.replace("Hello","By") - zaminyae 1 slovo na druge 
// .replaceAll - zaminyae vsi slova v teksti na druge slovo
// string2.charAt(0) - vuvodit odin simvol z stroku po indeksu
// string2.repeat(3) - povtor 3 razu string2
// string2.trim() - vudalyae probilu z kraiv
// string2.toUpperCase - perevid bukv v veluki bukvi