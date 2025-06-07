const longestConsecutiveSubArray = (nums)=> {
    //solve this problem in n complexity 
    //hence cant use sorting
    //you need to return the length of longest consecutive subarray
    let mySet = new Set(nums), count=1,maxleng=0
    for(var i =0;i<nums.length;i++) {
        //starting point only if previous number doesnt exist
        if(!mySet.has(nums[i]-1)) {
            let k = nums[i]+1
            count=1
            while(mySet.has(k)) {
                count++
                k=k+1
            }
          
        }
        maxleng= Math.max(maxleng,count)
     
    }
    console.log(maxleng)

}

longestConsecutiveSubArray( [100, 200, 1, 3, 2, 4])