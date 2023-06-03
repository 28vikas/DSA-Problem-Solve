

let word1 = ["ab", "c"], word2 = ["a", "bc"]

// let word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]

// let word1 = ["a", "cb"], word2 = ["ab", "c"]

function compareWords(word1, word2) {
  var str1 = "";
  var str2 = "";



  for (var i = 0; i < word1.length; i++) {
    for (var j = 0; j < word1[i].length; j++) {
      str1 += word1[i][j];
    }
  }

 
  for (var i = 0; i < word2.length; i++) {
    for (var j = 0; j < word2[i].length; j++) {
      str2 += word2[i][j];
    }
  }

  
  if (str1.length !== str2.length) {
    return false;
  }
  
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }

  return true;
}



console.log(compareWords(word1, word2));

  