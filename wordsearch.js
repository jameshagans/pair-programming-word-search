const transpose = function (matrix) {
  let newArray = [];
  for(let x = 0; x < matrix[0].length; x++) {
    newArray.push([]);
    
  }
  let tmp = matrix[0].length;
  
  for(let r = 0; r < matrix.length; r++) {
    for(let c = 0; c < tmp; c++){
      newArray[c].push(matrix[r][c]);
    }
  }
  return newArray;
};


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log('horizontal line: ', horizontalJoin); 
    for (l of horizontalJoin) {
        if (l.includes(word)) return true    
      }

        let transposed = transpose(letters)
        const verticleJoin = transposed.map(vs => vs.join(''))
        //console.log('verticleJoin: ', verticleJoin)
        //if(letters.includes(word));
        for (l of verticleJoin) {
            if (l.includes(word)) return true    
          }
        return false;
     
}
module.exports = wordSearch

/*console.log(wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK')); 


module.exports = wordSearch




/*let test =  [['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
]
console.log(transpose(test));*/