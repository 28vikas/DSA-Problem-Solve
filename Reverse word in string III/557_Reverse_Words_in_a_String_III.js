
const s = "Let's take LeetCode contest";



function xyz(s) {
    const words = s.split(' ');
    let reversedString = "";
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      for (let j = word.length - 1; j >= 0; j--) {
        reversedString += word[j];
      }
      if (i !== words.length - 1) {
        reversedString += ' ';
      }
    }
  
    return reversedString;
  }
  
  console.log(xyz(s));








