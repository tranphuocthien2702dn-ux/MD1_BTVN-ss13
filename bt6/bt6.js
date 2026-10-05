let arr = [3, 6, 4, 8, 3, 7, 3, 9, 5, 3, 7, 3, 8, 6, 2, 1, 7, 4, 5, 3, 6];
let k = Number (prompt("Nhập số nguyên K"));
let kCount=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]===k){
        kCount++;
    }
}
alert(`Số lần xuất hiện của K trong mảng là: ${kCount}`);