






// function xyz(arr){0
 

//     let result = "";
//     for(let i = 0; i<arr.length; i++){
  
//         if(arr[i] == "i"){
//             result = result + "z";
        
//         }else{
//             result = result + arr[i]
//         }
        
            
//         }
//         return result;
// }


// let arr = "vikais"

// console.log(result);




let address = "1.1.1.1"


function xyz(address){
    let str = "";

    for( i=0; i<address.length; i++){
     if(address[i] === "."){
        str = str+ "[.]";
     }else{
        str = str + address[i];
     }
    
    }return str;
}


console.log(xyz(address));



