let number=[];
for (let i=0; i<20; i++){
    let randomNum = Math.round(Math.random()*100);
    number.push(randomNum);
}
let sumOdd=0;
let sumEven=0;
for (let i=0; i<number.length; i++){
    if (number[i]%2===0){
        sumEven+=number[i];
    }else{
        sumOdd+=number[i];
    }
}
alert(`Tổng số chẵn là: ${sumEven}`);
alert(`Tổng số lẻ là: ${sumOdd}`);
