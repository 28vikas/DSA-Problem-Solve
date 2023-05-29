




let sentence  = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

function xyz(sentence){
    let max = 0
for(let i = 0; i<sentence .length; i++){
    
   let x = sentence[i].split(" ").length;

    if(x>max){
        max = x;
    }
    
   
}return max;


}


console.log(xyz(sentence));