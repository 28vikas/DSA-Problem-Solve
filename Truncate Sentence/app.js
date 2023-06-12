let  s = "Hello how are you Contestant", k = 4
// let s = "What is the solution to this problem", k = 4
// let  s = "chopper is not a tanuki", k = 5





function  xyz(s) {
      const array = s.split(' ');
    
    array.length = k;

    return array.join(' ');
}



console.log(xyz(s))