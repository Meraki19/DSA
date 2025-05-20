const printNamesNTimesUsingRecurrsion = (username, n) => {
  if (n == 0) return;
  console.log(username);
  printNamesNTimesUsingRecurrsion(username, n - 1);
};
//printNamesNTimesUsingRecurrsion('sreejith',4)

const sumOfFirstNNaturalNumber = (n) => {
  //this is funcational recurrsion wehere u return the function itself and this gives a result
  function Sum(x) {
    if (x == 0) {
      return 0;
    }
    return x + Sum(x - 1);
  }
  return Sum(n);
};
//console.log(sumOfFirstNNaturalNumber(5))

const sumOfFirstNNaturalNumbers = (n) => {
  //Parameterised way recurrsion
  function Sum(x, i) {
    if (x == 0) {
      return i;
    }
    return Sum(x - 1, i + x);
  }
  return Sum(n, 0);
};
//console.log(sumOfFirstNNaturalNumbers(5))

const factorialOfNumberFunctionalRecurrsion = (n) => {
  //funcational recurrsion
  if (n == 1) {
    return 1;
  }
  return n * factorialOfNumberFunctionalRecurrsion(n - 1);
};

//console.log(factorialOfNumberFunctionalRecurrsion(5))

const factorialOfNumberParameterisedRecursion = (n, i) => {
  if (n == 1) {
    return i;
  }
  return factorialOfNumberParameterisedRecursion(n - 1, n * i);
};
//console.log(factorialOfNumberParameterisedRecursion(5,1))

//[1,2,3]
const reverseArray = (arr) => {
  //optimal way using 2 ptr approach, ie u r not creating a new array u r jus swapping position
  //in the same array.
  //the same can be done using a for loop and then pushing items to a new array
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};
//console.log(reverseArray([1,2,3]))

//Since our idea is to learn recurrsion ,lets try solve the proble using recursion

const reverseArrayUsingRecurssion = (arr) => {
  function reverse(upArr, start, end) {
    if (start >= end) {
      return upArr;
    }
    let temp = upArr[start];
    upArr[start] = upArr[end];
    upArr[end] = temp;

    return reverse(upArr, start + 1, end - 1);
  }

  return reverse(arr, 0, arr.length - 1);
};
//console.log(reverseArrayUsingRecurssion([1,2,3,4,5]))

const checkStringIsAPalliandrome = (str) => {
  function isPal(s, start, end) {
    if (start > end) {
      return "Palliandrome";
    }
    if (s[start] !== s[end]) {
      return "Not a palliandrom";
    }
    return isPal(str, start + 1, end - 1);
  }
  return isPal(str, 0, str.length - 1);
};

//console.log(checkStringIsAPalliandrome('ACBA'))

var isPalindrome = function (s) {
  //this is a two pointer approach
  //here we are using so much condition to avoid the regex so that code takes less time to run
  //if possible we can avoid the lowercase method as well
  //both take time complexity of O(3n) ~ n but space complexity  o(n) (
  // since we use s.toLowerCase or s.replace it returns a new string hence space complexity become o(n) )
  //even after that the time the below one take is 2ms approx where as other other one where we may use
  //replace or lowercase will take 6ms because of space taken each time to return a new stirng
  //also because regex oeprations are heavy oepration

  //If we avoide the .tolowercase method as well then our space complexity is jus O(1) which is the most
  //optimal
  str = s.toLowerCase();
  //s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  let left = 0,
    right = str.length - 1;
  while (left < right) {
    while (
      left < right &&
      !(
        (str[left].charCodeAt() >= 97 && str[left].charCodeAt() <= 122) ||
        (str[left].charCodeAt() >= 48 && str[left].charCodeAt() <= 57)
      )
    ) {
      left++;
    }
    while (
      left < right &&
      !(
        (str[right].charCodeAt() >= 97 && str[right].charCodeAt() <= 122) ||
        (str[right].charCodeAt() >= 48 && str[right].charCodeAt() <= 57)
      )
    ) {
      right--;
    }
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("';"));
