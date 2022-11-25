# Super Awesome Anagram 🚀

This project takes in a file and returns a [stream](https://www.tutorialspoint.com/nodejs/nodejs_streams.htm) and reads only the provided number of bites at once. It then groups the words which are anagrams and then outputs everything to the console.

## Getting Started 🏁

This project is build using [Javascript](https://www.javascript.com/) and [Nodejs](https://nodejs.org/en/), so you will need to ensure it is installed on your machine and ensure it matches the version provided in the `.nvmrc`.

### Running the project

1. `npm i`
2. `npm run dev`
    * enter the name of the file (*assumption made all files will be in data folder*)
    * press the return key.

### Testing

Unit test have been added for the `anagram` module.
These can be run via:

1. `npm run test`


## Big O analysis

The time complexity of running this program is `O(n)` which is `linear time`. The reason for this is that there is only a single loop which processes the anagram that recieves the words from the `stream` as an `array`. 

## Data structure

I used a `hashmap` or `object` to store the result of the anagram as it has fast insertion. Also the data was stored in the following `key value pair`: 
    `{"aa": ["aa"], "abc": ["abc", "cba"]}`
which meant it was easy to look up a particular group as well as return all the values.

## Todo
 I need more time to do the following:

 1. add integration tests for `index.js`
 2. Create a github actions pipeline.
