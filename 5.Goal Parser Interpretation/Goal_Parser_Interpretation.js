let command = "G()(al)"
// let command = "G()()()()(al)"
// let command = "(al)G(al)()()G"

function xyz(command){
    result = ""
    for(let i = 0; i<command.length; i++){
        if(command[i] == "G"){
            result = result + "G"
            
        }else if(command[i] == "(" && command[i+1] == ")" ){
            result = result + "o"

        }else if(command[i] == "(" && command[i+1] == "a" && command[i+2] == "l" && command[i+3] == ")"){
            result = result + "al"
        }
    }
    return result;
}

console.log(xyz(command));
