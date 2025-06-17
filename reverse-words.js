function reverseWords(sentence) {
  const words = sentence.split(" ");

  const reversedWords = words.reverse();

  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}

function reverseWord(string) {
  let result = "";

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
}
