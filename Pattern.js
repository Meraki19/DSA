const rectangularPattern = (n) => {
  for (var i = 0; i < n; i++) {
    let row = "";
    for (var j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
};
//rectangularPattern(3)

const RightAngleTrianglePattern = (n) => {
  for (var i = 0; i < n; i++) {
    let row = "";
    for (var j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
};
//RightAngleTrianglePattern(5)

const rightAngleNumberPyramid = (n) => {
  for (var i = 0; i < n; i++) {
    let row = "";
    for (var j = 0; j <= i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
};
//rightAngleNumberPyramid(5)
const RightAngleNumberPyramidII = (n) => {
  for (var i = 0; i < n; i++) {
    let row = "";
    for (var j = 0; j <= i; j++) {
      row += i + 1;
    }
    console.log(row);
  }
};
//RightAngleNumberPyramidII(5)
const invertedRightAngleTriangle = (n) => {
  for (var i = n; i > 0; i--) {
    let row = "";
    for (var j = 0; j < i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
};
//invertedRightAngleTriangle(5)

const invertedRightAngleNumberTriangle = (n) => {
  for (var i = n; i > 0; i--) {
    let row = "";
    for (j = 0; j < i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
};
//invertedRightAngleNumberTriangle(10)

const christmasTree = (n) => {
  let whitespace = n;
  for (var i = 0; i < n; i++) {
    let row = "";
    whitespace = whitespace - 1;
    for (var k = 0; k < whitespace; k++) {
      row += " ";
    }
    for (var j = 0; j < 1 + 2 * i; j++) {
      row += "*";
    }
    //after space is actully note requierd
    for (var k = 0; k < whitespace; k++) {
      row += " ";
    }
    console.log(row);
  }
};
// christmasTree(9);
const invertedChristmasTree = (n) => {
  let whitespace = 0;

  for (var i = n; i > 0; i--) {
    let row = "";
    whitespace = whitespace + 1;
    for (var k = 1; k < whitespace; k++) {
      row = row + " ";
    }

    for (j = 2 * i - 1; j > 0; j--) {
      row += "*";
    }
    //after space is actully note requierd
    for (var k = 1; k < whitespace; k++) {
      row = row + " ";
    }
    console.log(row);
  }
};
//invertedChristmasTree(9);

const diamondTree = (n) => {
  christmasTree(n);
  invertedChristmasTree(n);
};
//diamondTree(9)
const halfDiamond = (n) => {
  for (var i = 0; i < 2 * n; i++) {
    let row = "";
    let stars = i;
    if (i > n) {
      stars = 2 * n - i;
    }
    for (var j = 0; j < stars; j++) {
      row = row + "*";
    }
    console.log(row);
  }
};
//halfDiamond(3);
const OneZeroTree = () => {};

const testTree = (n) => {
  let emptyspace = 2 * n - 2;
  for (var i = 1; i <= n; i++) {
    let row = "";
    let num = "";

    for (var j = 1; j <= i; j++) {
      row = row + `${j}`;
    }
    for (var k = 0; k < emptyspace; k++) {
      row = row + "0";
    }
    for (var j = 1; j <= i; j++) {
      num = j + num;
    }
    emptyspace = emptyspace - 2;
    console.log(row + num);
  }
};
//testTree(7)

const increasingNumberTrianglePattern = (n) => {
  let start = 0;
  for (var i = 1; i <= n; i++) {
    let row = "";
    for (var j = 1; j <= i; j++) {
      start = start + 1;
      row = row + start;
    }

    console.log(row);
  }
};
//increasingNumberTrianglePattern(6)
const letterTrainglePattern = (n) => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  for (var i = 0; i < n; i++) {
    let row = "";
    for (var j = 0; j <= i; j++) {
      row = row + letters[j];
    }
    console.log(row);
  }
};
//letterTrainglePattern(5)

const reverseLetterTraingle = (n) => {
  let count = n;
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  for (var i = 0; i < n; i++) {
    let row = "";
    for (var j = 0; j < count; j++) {
      row = row + letters[j];
    }
    count = count - 1;
    console.log(row);
  }
};
//reverseLetterTraingle(5)

const alphaRampPattern = (n) => {
  let char = 65;
  for (var i = 0; i < n; i++) {
    let row = "";
    for (var j = 0; j <= i; j++) {
      row = row + String.fromCharCode(char);
    }
    char = char + 1;
    console.log(row);
  }
};
//alphaRampPattern(5)

const alphaHillPattern = (n) => {
  let space = 2 * n - 2;
  for (var i = 1; i <= n; i++) {
    let row = "";
    let char = 65;
    for (var k = 0; k < space / 2; k++) {
      row = row + "0";
    }
    let center = (2 * i) / 2; //2
    for (var j = 0; j < 2 * i - 1; j++) {
      row = row + String.fromCharCode(char); //ab
      if (j == center - 1) {
        char = char - 1;
      } else {
        char = char + 1;
      }
    }
    for (var k = 0; k < space / 2; k++) {
      row = row + "0";
    }
    space = space - 2;
    console.log(row);
  }
};
//alphaHillPattern(5);

const alphaTrainglePattern = (n) => {
  for (var i = 0; i < n; i++) {
    let row = "";
    let char = 65 + n - 1 - i;
    for (j = 0; j <= i; j++) {
      row = row + String.fromCharCode(char);
      char = char + 1;
    }
    console.log(row);
  }
};
//alphaTrainglePattern(3)
const symmetricVoidPattern = (n) => {
  let space = 0;
  let starlength;
  for (var i = 0; i < 2 * n; i++) {
    let row = "";

    if (i >= n) {
      starlength = i - n + 1;
      space = space - 2;
    } else {
      starlength = n - i;
    }
    for (var j = 0; j < starlength; j++) {
      row = row + "*";
    }
    for (var k = 0; k < space; k++) {
      row = row + " ";
    }
    for (var j = 0; j < starlength; j++) {
      row = row + "*";
    }
    if (i < n) {
      space = space + 2;
    }
    console.log(row);
  }
};
//symmetricVoidPattern(6);

const symmetricButterFlyPattern = (n) => {
  let space = 2 * n;
  let count = 0;
  for (var i = 0; i < 2 * n; i++) {
    let row = "";
    if (i >= n) {
      space = space + 2;
      count = count - 1;
    } else {
      space = space - 2;
      count = i;
    }

    for (var j = 0; j <= count; j++) {
      row = row + "*";
    }
    for (var k = 0; k < space; k++) {
      row = row + " ";
    }
    for (j = 0; j <= count; j++) {
      row = row + "*";
    }

    console.log(row);
  }
};

//symmetricButterFlyPattern(6)

const hollowRectanglePattern = (n) => {
  for (var i = 0; i < n; i++) {
    let row = "";
    for (var j = 0; j < n; j++) {
      if (i == 0 || i == n - 1) {
        row = row + "*";
      } else {
        if (j == 0 || j == n - 1) {
          row = row + "*";
        } else {
          row = row + " ";
        }
      }
    }
    console.log(row);
  }
};
//hollowRectanglePattern(10);


//TBC
const theNumberPattern = (n) => {
  iterations = n + (n - 1);
  for (var i = 0; i < iterations; i++) {
    let row = "";
    for (var j = 0; j < iterations; j++) {
      if (i == 0 || i == iterations-1) {
        row = row + n;
      }
      else {
        if(j==0 || j==iterations-1) {
            row=row +n
        } else {
            row = row + " "
        }
      }
    }
    console.log(row)
  }
};
theNumberPattern(6)