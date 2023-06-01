



// let s = "codeleet"
// let indices = [4,5,6,7,0,2,1,3]

s = "abc", indices = [0,1,2]

function xyz(s,indices){
    let s_new = ''
    for(let i = 0; i<s.length; i++){
        s_new += s[indices.indexOf(i)]; 

    }
    return s_new;
}

console.log(xyz(s,indices))