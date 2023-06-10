
let s = "Hello World"
// let s = "   fly me   to   the moon  "
// let s = "luffy is still joyboy"




function xyz(s){
    let count = 0

    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === ' ') {
            continue 
        } else if(s[i] !== ' ') {
            count += 1

            if(s[i-1] === ' ') {
                break
            } else {
                continue
            }
        } 
    }

    return count
}


console.log(xyz(s));