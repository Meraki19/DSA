const missingNumber = function (nums) {
  let rangeEnd = nums.length;
  let p = 0,
    test = 0;
  for (var i = 0; i <= rangeEnd; i++) {
    test = test + i;
    if (nums[i] !== undefined) {
      p = p + nums[i];
    }
  }
  return test - p;
};


console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));