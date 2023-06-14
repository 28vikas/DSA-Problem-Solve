

let s = "is2 sentence4 This1 a3"


function xyz(s){
    let x = s.split(' ');
    let y = [];

    for (let i = 1; i <= x.length; i++) {
        for (let j = 0; j < x.length; j++) {
            if (x[j].includes(i)) {
                y.push(x[j].slice(0, -1));
            }
        }
    }
    return y.join(' ');
}



console.log(xyz(s))
 
