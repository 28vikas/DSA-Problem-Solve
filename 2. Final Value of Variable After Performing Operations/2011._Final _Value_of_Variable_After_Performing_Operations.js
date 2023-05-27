




let operations = ["--X"]

function xyz(operations){
    let X = 0;
    for(let i = 0; i<operations.length; i++){
        if(operations[i] === "X++" || operations[i] === "++X"){
            X++;
        }else{
            X--;
           
        }
    
   }return X;

};


console.log(xyz(operations))