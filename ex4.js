function isBracketCorrect(str) {
  const stack = [];
  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (
        (char === ')' && last !== '(') ||
        (char === ']' && last !== '[') ||
        (char === '}' && last !== '{')
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBracketCorrect("{[]}"));
console.log(isBracketCorrect("{(])}")); 
console.log(isBracketCorrect("{([[])]}")); 
console.log(isBracketCorrect("{([])}"));
