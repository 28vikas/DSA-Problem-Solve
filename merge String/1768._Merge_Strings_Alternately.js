


let word1 = "abc", word2 = "pqr"
// let word1 = "ab", word2 = "pqrs"
// let word3 = word1 = "abcd", word2 = "pq"
str = "";

let biggestWord = word1.length >word2.length? word1:word2;


function xyz(word1, word2){

    for(let i = 0; i<biggestWord.length; i++){

        if(i<word1.length){
            str += word1[i]
         
        }
        if(i<word2.length){
            str += word2[i]
        } 
    }
    return str;
}

console.log(xyz(word1, word2))



