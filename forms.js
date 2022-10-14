let row = 10;
let str = ""; 

for(let i = 1; i <= row; i++){
    str += " ".repeat(row - i);
    
    for(let j = 1; j <= i; j++){
        str += j % 10;
    }

    for(let k = i - 1; k >= 1; k--){
        str += k % 10;
    }

    str += "\n";
}
console.log(str);

let row2 = 5;
let str2 = ""; 

for(let i = 1; i <= row2; i++){ 
    str2 += " ".repeat(row2 - i);
    for(let j = 1; j <= i; j++){
        str2 += j;
    }

    for(let k = i - 1; k >= 1; k--){
        str2 += k;
    }

    str2 += "\n";
}

for(let i = row2 - 1; i >= 1; i--){
    str2 += " ".repeat(row2 - i);
    for(let j = 1; j <= i; j++){
        str2 += "*";
    }

    for(let k = i - 1; k >= 1; k--){
        str2 += "*";
    }

    str2 += "\n";
}


console.log(str2);