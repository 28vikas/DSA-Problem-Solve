


let s = ["h","e","l","l","o"]

function xyz(s){
    for (let i = 0, j = s.length - 1; i < j;) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s;
}


console.log(xyz(s));