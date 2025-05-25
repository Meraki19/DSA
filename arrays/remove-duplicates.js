const removeDuplicates = (nums) => {
    
    let start=0 ,end =start+1
    while (end < nums.length) {
        if (nums[start] !== nums[end]) {
            //the swapping logic is not necessary as we are not interested in elements 
            //that comes after the last unique elements

          //let temp = nums[end];
          //nums[end] = nums[start + 1];
          nums[start + 1] = nums[end];
          start++;
        }
      end++
    }
    return nums
}
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))