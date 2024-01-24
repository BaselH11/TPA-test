function checkAnswer(array ,target){
    for(let i=0 ; i < array.length ; i++ ){
       for(let j= i+1; j< array.length ; j++){
            const sum = array[i] + array[j] ;
            if (sum == target){
                return [i , j] ;
            }
       }
    }
    return[];
}


const array = [2, 7, 11, 15];
const target = 9;
const output =  checkAnswer(array, target);

console.log(output);