for(let i = 1; i <= 10; i++){  //vivod parnih chisel vid 2 do 10
    if(i % 2 == 0){
        console.log(i);
    }
}

let k = 10;
for (let i = 1; i <= k; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j == 0 && j < i) {
      break;
    } else if (j == i) {
      console.log(i);
    }
  }
}

let text = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
let transcript = "";
for (let i = 0; i < text.length; i += 3){
      transcript += text[i] 
  }
  console.log(transcript);


  // Задача с интервью*
  // У вас есть массив со скобками, предположим 
  // [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] количество элементов и последовательность может быть разной.
  // Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

  let leftC = 0;
  let rightC = 0;
  let arr2 =  ['(', ')', '(', ')', ')', '('];
  for (let i = 0; i < arr2.length; i++){
      if (arr2[i] == "("){
        leftC++;        
      }      
      if (arr2[i] == ")"){
         rightC++;         
       }
      }
      if (leftC > rightC){
        console.log("We need ) more");
      } else if (rightC > leftC){
        console.log("We need ( more");
      } else{
        console.log ("Everything OK")}

  // zapovnitu masiv chislami ne kratnimu 5
const arr3 = [];
let x = 0;
for (let i = 0; i <= 20; i++){
    if (i % 5 != 0){
      arr3[x] = i;   // arr3.push(i) - metod zapisi elementov v masiv
      x++;
    }
} 
console.log(arr3)
  

  
