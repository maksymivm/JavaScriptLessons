// perevernutu chislo, yaksho chislo videmne minus mae butu speredu, 
//yaksho zakinch na 0 - nulya nemae buty speredu

function reverseNumber(x){
   
        return Math.sign(x) * parseInt(String(x).split("").reverse().join(""));
        
}
console.log(reverseNumber(-4500));
//console.log(Math.sign(-45))