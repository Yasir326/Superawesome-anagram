const fs = require("fs");

const CHUNK_SIZE = 10000000; // 10MB

async function streamFile(filename) {
  const stream = fs.createReadStream(filename, {
    highWaterMark: CHUNK_SIZE,
  });

  stream.on("error", function (error) {
    console.error("Error reading file", error);
  });

  let words = null;
  for await (const data of stream) {
    words = data.toString("utf8").split("\n");
  }

  return words;
}

module.exports = { streamFile}
