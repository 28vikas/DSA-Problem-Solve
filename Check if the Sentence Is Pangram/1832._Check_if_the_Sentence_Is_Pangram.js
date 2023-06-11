

// let sentence = "thequickbrownfoxjumpsoverthelazydog"

let sentence = "leetcode"


let alphabet = "abcdefghijklmnopqrstuvwxyz"

function xyz(sentence){
  let alpha = alphabet.split('');
  for(let i=0; i<alpha.length; i++){
      if(sentence.indexOf(alpha[i]) === -1){
          return false;
      }
  }
  return true;
}


console.log(xyz(sentence))