const { groupAnagrams } = require("./anagram");

const original = console.error;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = original;
});

describe("Group Anagrams", () => {
  it("groups anagrams together", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"],
    ]);
  });

  it("returns empty array if an empty array is passed in", () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
  });

  it("it throws the error with the correct message", () => {
    groupAnagrams(["aba", "bba", 3, "aab"]);
    expect(console.error).toHaveBeenCalled();
    expect(console.error.mock.calls[0][0]).toContain(
      "3 is not a string"
    );
  });

  it("it continues processing even after error is thrown", () => {
    expect(groupAnagrams(["abc", 2, "cba", "aa"])).toEqual([
      ["abc", "cba"],
      ["aa"],
    ]);
  });
});
