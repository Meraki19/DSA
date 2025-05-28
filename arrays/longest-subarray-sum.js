//Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
longestSubarrayWithGivenSum = (arr,k)=> {
    let sum=0, start=0,end=0, maxCount=0
    while(end<arr.length) {
        sum= sum+arr[end]
   
    if(sum>k) {
        sum=sum-arr[start]
        start= start+1
    }
     if(sum==k) {
        maxCount=Math.max(maxCount,end-start+1)
    }
    end++
      
       
    }
    return maxCount
}
console.log(longestSubarrayWithGivenSum([2, 2, 2, 2, 2, 2, 2, 2], 6));
console.log(longestSubarrayWithGivenSum([5, 5, 5, 5, 5], 10));