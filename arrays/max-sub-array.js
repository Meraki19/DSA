const maxsubArray = (nums)=> {
    //KADENS ALGORITHM - works only for max sub array
    let maxsum= Number.MIN_SAFE_INTEGER, sum =0
    for(var i=0;i<nums.length;i++) {
        sum= sum+nums[i]
       maxsum = Math.max(maxsum,sum)
        if(sum<0) {
            sum=0
        }
    }
    return maxsum
}

console.log(maxsubArray([-2,-3,4,-1,-2,1,5,-3]))