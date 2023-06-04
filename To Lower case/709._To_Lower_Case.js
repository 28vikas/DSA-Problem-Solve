




let s = "Hello"

function xyz (s){
let output = "";
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let upperCase = "ABCDEFGHJIKLMNOPQRSTUVWXYZ"


    for(let i = 0; i<s.length; i++){
        for(let j = 0; j<26; j++){
            if(s[i] === lowerCase[j]){
                output = output + s[i];
            }
    
            else if(s[i] === upperCase[j]){
                output = output + lowerCase[j]
    
            }
        }
    
       } 
       return output;

}

   console.log(xyz(s));

