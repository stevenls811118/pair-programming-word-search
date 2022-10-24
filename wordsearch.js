const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  let verticalarray = [];

  for (let i = 0; i < letters[0].length; i++) {
    verticalarray.push([]);
  }

  for (i of letters) {
    for (let j =0; j < i.length; j++) {
      verticalarray[j].push(i[j])
    }
  }

  const verticalJoin = verticalarray.map(ls => ls.join(''));

  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;    
}

module.exports = wordSearch

// CODED BY: Clayton Van Imschoot and Steven Shi