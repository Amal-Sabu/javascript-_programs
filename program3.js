//Most Commonly Occurring Character
//The function mostCommonCharacter should return the most commonly occurring character in a string.
//If there are 2 or more such characters, then return the character which comes first alphabetically
const mostCommonCharacter = (str) => {
    const arr = [..."abcdefghijklmnopqrstuvwxyz"];
    const hash = new Map();
    arr.forEach((e) => hash.set(e, 0));
    const strArr = [...str.toLowerCase()];
    strArr.forEach((e) => {
      if (hash.has(e)) hash.set(e, hash.get(e) + 1);
    });
    return [...hash].reduce((a, e) => (e[1] > a[1] ? e : a))[0];
  };
  