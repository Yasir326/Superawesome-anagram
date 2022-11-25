const readline = require("readline-sync");

const { streamFile } = require("./readfile");
const { groupAnagrams } = require("./anagram");

const fileName = readline.question("Please enter a file name ");

streamFile(`Data/${fileName}`).then((words) =>
  groupAnagrams(words).forEach((row) => console.log(row.join(", ")))
);
