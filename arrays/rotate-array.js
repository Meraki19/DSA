const rotateArray = (nums, k) => {
    //this solution takes time complexity of O(k*n) which would ideally be large if k is large 
    //we should try to solve this in n 
    // while(k>0) {
    //     for(var i=nums.length-1;i>0;i--) {
    //         let temp = nums[i];
    //         nums[i] = nums[i-1]
    //         nums[i-1] = temp
    //     }
    //     k--
    // }
    // return nums
    k= k%nums.length
    const reverseArray = (start, end) => {
      while (start < end) {
        let temp = nums[end];
        nums[end] = nums[start];
        nums[start] = temp;
        start++;
        end--;
      }
    };
    reverseArray(0,nums.length-1)
    
    reverseArray(0,k-1)
    reverseArray(k,nums.length-1)
    return nums
}
console.log(rotateArray([1,2,3,4,5,6,7],3))