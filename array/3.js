const getNum = (arr = [], num) => {
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        while (arr[i]) {
            if(arr[i]%10 === num) {
                count++
            }
            arr[i] = Math.floor(arr[i]/10)
        }
    }
    return count
};
let getNumResult = getNum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1);
console.log('getNumResult==>', getNumResult);