


let s = "book"
// let  s = "textbook"

  
    

function xyz(){

    let n = s.length;
    let j = n/2;
    count1 = 0;
    count2 = 0;
    vowels = "aeiouAEIOU"
    for(let i = 0; i<n/2; i++){
           
    
            ch1 = s.charAt(i);
            ch2 = s.charAt(j+i)
             if(vowels.indexOf(ch1) != -1)
                count1++
            if(vowels.indexOf(ch2) != -1)
                count2++
             
        }
      return count1 == count2;    
}



console.log(xyz(s));