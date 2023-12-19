/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1,numero2){
        return Math.max(numero1,numero2);
        }

export function findLongestWord(array){
    let longestWord = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i].length > longestWord.length){ 
        longestWord = array[i];
}}
return longestWord; 
}
export function sumArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    } 
    return sum;
}

export function averageNumbers(array){
    if (array == 0) {
        return undefined;
    }
    let average = sumArray(array)/array.length;
    return average;
}

export function averageWordLength(array){
    // let counter = 0;
    // for(let i = 0; i < array.length; i++){
    //     if (array[i].length > counter) {
    //         counter = array[i].length
    //     }
    // }
    // return counter;
    let letterCount = 0;
    let letterSum = 0;
    if (array == 0) {
        return undefined;
    } else {
    for(let i = 0; i < array.length; i++){
        letterCount = array[i].length;
        letterSum += letterCount; 
    }
    return (letterSum/array.length);
}
}

export function uniquifyArray(array){
    let newArray = [];
    if (array == 0) {
        return undefined;
    } else if (array.length === 1) {
        return array;
    } else {
    for(let i = 0; i < array.length; i++){
        if (array.indexOf(array[i]) != -1 ) {
            newArray.push(array[i]);
        }
    }}
    return newArray;
}
export function doesWordExist(array, palabra){
    return array.includes(palabra);
}

export function howManyTimes(array, palabra){
    if (array.length === 0) {
        return undefined;
    }
    let howManyTimesCounter = 0;
    for (let i=0; i < array.length; i++){
    if (array[i] === palabra) {
            howManyTimesCounter += 1;
        }
    }
    return howManyTimesCounter;
}

export function greatestProduct(){
    
}





