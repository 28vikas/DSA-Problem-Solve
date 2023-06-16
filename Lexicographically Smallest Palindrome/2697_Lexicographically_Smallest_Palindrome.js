

let s = "egcfe";
// let s = "abcd"




function xyz(s){
  
    let n= s.length;
    let arr = s.split("");
    for (let i=0; i<(arr.length-1)/2; i++){
        if(arr[i] !=arr[n-i-1]){
           if(s.charCodeAt(i) > s.charCodeAt(n-i-1)){
               arr[i] =  arr[n-i-1];
           }else{
               arr[n-i-1] =  arr[i];
           }
        }
    }
    return arr.join("");
}



console.log(xyz(s))