// Напиши фунцию changeCase(string) которая заменяет регистр каждого символа
//  в строке на противоположный
// Например JavaScript взамен на jAVAsCRIPT


// ===========

const invertedSringletters = function (string) {
  const letters = string.split('');
  console.log(letters);
  let invertedSring = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedSring += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedSring;
};

console.log(invertedSringletters('JavaScript5'));
console.log(invertedSringletters('gdfgdgFFFbfbfdyjyjFFFF'));

