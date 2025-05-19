const countNumbers = (n) => {
  let number = n,
    count = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    count = count + 1;
  }
  return count;
};
//console.log(countNumbers(12345));

const reverseNumber = (n) => {
  let number = Math.abs(n);
  let reminder = 0,
    reversed = 0;
  let INT_MAX = 2147483647;

  while (number > 0) {
    reminder = number % 10; // r = 2
    number = Math.floor(number / 10); // 543
    reversed = reversed * 10 + reminder; //10=>
  }
  if (reversed > INT_MAX) {
    return 0;
  }
  return n < 0 ? -reversed : reversed;
};
//console.log(reverseNumber(-120))

const palliandromeNumber = (n) => {
  let number = Math.abs(n);
  let reminder = 0,
    rev = 0;
  while (number > 0) {
    reminder = number % 10;
    number = Math.floor(number / 10);
    rev = rev * 10 + reminder;
  }

  if (rev === n) {
    return "palliandrome";
  } else {
    return "Not a palliandrome";
  }
};
//console.log(palliandromeNumber(-121))

//run loop from i 0 to i n1/n2 (which is lower)
//deivide each n1 and n2 wiht i
//if modulus of both 0 then store the i value in a variable
//next time u find another variable fina the max of previous and the current

const greatestCommonDivisor = (n1, n2) => {
  let smallestnumber = Math.min(n1, n2);
  for (var i = smallestnumber; i >= 1; i--) {
    //please note you can do for loop from 1 to smallest number as well , but this will
    //have more iteration comapred to the loop smallest number to 1
    //eg 15,20 -> starting from 1 to smallest number it will have to go through 15 iterations
    //but starting with smallestnumber to 1 it has to go throug 10 iterations

    if ((n1 % i == 0) & (n2 % i == 0)) {
      return i;
      //in case going with i=0 to smallest number you have
      // assign i to a variable and later after loop is finishe return the variable
      // gcd = i (each time if conditions evaluates to true this will get the largetst number)
    }

    //return gcd
  }
};
//console.log(greatestCommonDivisor(9,56))

//Finding GCD Most Optimal Approach - Euclidan algorithm
const gcd = (n1, n2) => {
  while (n1 !== 0 && n2 !== 0) {
    if (n1 > n2) {
      n1 = n1 - n2;
    } else {
      n2 = n2 - n1;
    }
  }
  if (n1 == 0) {
    return n2;
  }
  return n1;
};
//console.log(gcd(9,54))

//AmstrongNumber
const armStrongNumber = (n) => {
  //find the number of digits
  //use modulus to get each number
  //power that number and store it adding it to result
  let number = n,
    final,
    l,
    r;
  l = number.toString().length;
  while (n > 0) {
    r = n % 10;
    n = Math.floor(n / 10);
    final = final + r ** l;
  }
  console.log(153);
  if (final === n) {
    return true;
  }
  return false;
};
//armStrongNumber(153)

const allDivisors = (n) => {
  let result = [];
  //Brute force appraoch
  //loop through i=1 to i=n
  //divide the number (n) with i
  //check if reminder is 0 if yes -> push the divisor to a arrray
  //once done return the array
  //here the loop runs n times O(n)

  //optimal apprach
  //instead of running from 1-> n
  // we can store the quotient and divisor to an arrya if modulus is 0
  //the number will be divisible by both divisor and quotient
  //we have to loop till sqrt of the number because after this it will be jus the reverse
  //this way we will be able to reduce the iteration to approx half
  
  for (var i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      let quotient = n / i;
      if (i == Math.sqrt(n)) {
        return (result = [...result, i]);
      }
      result = [...result, i, quotient];
    }
  }
  return result;
};

//console.log(allDivisors(7));

const primeNumber = (n)=> {
    //brute force 
    //loop through from i =1 to n 
    //divide the number by i value and see if anything gives reminder 0 
    //if yes break the lopp and return its not prime 
    //if only number and 1 are divisible to i then its a priem

    // for(var i=2;i<=n;i++) { 
    //     if(i !==n && n%i==0) {
    //         return false
    //     }
    // }
    // return true

    //optimal apprach 
    //instead of iterating through i n times we can iterate till sqrt of n 
    //because if n has a factor greater than its sqrt it will also have a factor lesser than the sqrt (note : same principle as the all divisor problem)

    for(var i=2;i<Math.sqrt(n);i++) {
        if(i!==n && n%i==0) {
            return false
        }
        return true
    }
}

console.log(primeNumber(123))

