// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}

console.log(maxOfTwoNumbers(2, 10));

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arrWords) {
  if (arrWords.length === 0) {
    return null;
  }

  let palabra = "";
  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i].length > palabra.length) {
      palabra = arrWords[i];
    }
  }
  return palabra;
}

console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNum) {
  let sum = 0;
  for (let i = 0; i < arrNum.length; i++) {
    sum += arrNum[i];
  }
  return sum;
}

console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNum2) {
  if (arrNum2.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arrNum2.length; i++) {
    sum += arrNum2[i];
  }
  let average = sum / arrNum2.length;
  return average;
}

console.log(averageNumbers(numbers2));

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordsArr, wordSearch) {
  if (wordsArr.length === 0) {
    return null;
  } else if (wordsArr.includes(wordSearch)) {
    return true;
  } else {
    return false;
  }
}

console.log(doesWordExist(words2, `subset`));
