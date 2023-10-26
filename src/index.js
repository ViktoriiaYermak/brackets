module.exports = function check(str, bracketsConfig) {
  const string = [];
  const openBrackets = [];
  const closeBrackets = [];

  for (const [open, close] of bracketsConfig) {
    openBrackets.push(open);
    closeBrackets.push(close);
  }

  for (const char of str) {
    if (openBrackets.includes(char) && closeBrackets.includes(char)) {
      if (string.length > 0 && string[string.length - 1] === char) {
        string.pop();
      } else {
        string.push(char);
      }
    } else if (openBrackets.includes(char)) {
      string.push(char);
    } else if (closeBrackets.includes(char)) {
      const lastOpen = string.pop();
      const expectedOpen = openBrackets[closeBrackets.indexOf(char)];
      if (lastOpen !== expectedOpen) {
        return false;
      }
    }
  }
  return string.length === 0;
};