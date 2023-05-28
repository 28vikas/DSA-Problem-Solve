

let jewels = "aA"; 
let stones = "aAAbbbb";

function xyz(jewels,stones){
    count = 0;
    for(let i = 0; i<jewels.length; i++){
        const temp = jewels[i];
        for(let j = 0; j<stones.length; j++){
            if(temp === stones[j]){
             count++
            }
        }
    }return count;
}


console.log(xyz(jewels, stones))
