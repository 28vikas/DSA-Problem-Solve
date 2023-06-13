

let  s = "a1c1e1";

// let  s = "a1b2c3d4e";

function xyz(){

       const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   let arr = s.split("");
   for(let i=0; i<arr.length; i+=2){
       arr[i+1] = alphabet[alphabet.indexOf(arr[i])+ +arr[i+1]]
   } 
   return arr.join("");
}



console.log(xyz(s));