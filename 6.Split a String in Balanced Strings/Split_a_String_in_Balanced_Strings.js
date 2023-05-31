


let  s = "RLRRLLRLRL"
// let s =  s = "RLRRRLLRLL"
// let s = "LLLLRRRR"

function xyz(s){
 result = 0;
 counter = 0;
 for(let i = 0; i<s.length; i++){
    if(s[i] === 'R'){
        counter++
    }else {
        counter--;
      
    }if(counter === 0){
        result++
    }
 }
 return result;
}


console.log(xyz(s));