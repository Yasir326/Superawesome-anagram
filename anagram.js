function groupAnagrams(words) {
  let result = {};
  for (let word of words) {
    if (typeof word == "string") {
      let cleansed = word.split("").sort().join("");
      if (result[cleansed]) {
        result[cleansed].push(word);
      } else {
        result[cleansed] = [word];
      }
    } else {
      console.error(`${word} is not a string`);
    }
  }
  return Object.values(result);
}

module.exports = { groupAnagrams };
