
const areStringEqual = function(firstString, secondString) {
  if (firstString !== secondString) {
    return false;
  }
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== secondString[i]) {
      return false;
    }
  }
  return true;
};


const calculateHash = function(myText, largePrime, randomNumber) {
  let hash = 0;
  for (let i = 0; i <= myText.length - 1; i++) {
    hash = (hash * randomNumber + myText.charCodeAt(i)) % largePrime;
  }
  return hash;
};

interface PositionsProps {
  position: number
}

export const rabinKarpSearch = function(sentence, stringToSearch) {
  const largePrime = 337;
  const randomNumber = 50;
  const stringPositions: PositionsProps[] = [];
  const stringToSearchHash = calculateHash(
      stringToSearch,
      largePrime,
      randomNumber,
  );
  let text;
  let sentenceHash;
  // Loop through our sentence
  for (let i = 0; i <= sentence.length - stringToSearch.length; i++) {
    text = sentence.slice(i, i + stringToSearch.length);
    sentenceHash = calculateHash(text, largePrime, randomNumber);
    if (areStringEqual(text, stringToSearch)) {
      console.log(text, stringToSearch);
      stringPositions.push({position: i});
    }
    // If the hash is not same, then continue to next step
    if (stringToSearchHash !== sentenceHash) continue;
  }
  return stringPositions.length !== 0;
};
