

// let allowed = "ab", words = ["ad","bd","aaab","baa","badab"]

let allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"];''

function xyz(allowed){
    let result = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i]
  
      for (let j = 0; j < word.length; j++) {
        const char = word[j];
  
        if (!allowed.includes(char)) break;
        else if (j === word.length - 1) result.push(word)
      }
    }
  
    return result.length;
}


console.log(xyz(allowed))