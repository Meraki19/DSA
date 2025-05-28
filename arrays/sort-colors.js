const sortColors= (nums)=> {
    //dutch national flag algorithm - sorting algthm
    //wors for exactly three elements
    let start=0,end=0, t=nums.length-1
    while(end<=t) {
        if(nums[end]==0) {
            let temp= nums[end]
            nums[end] = nums[start]
            nums[start]= temp
            start++
            end++
        } else if(nums[end]==1) {
            end++
        }
        else {
            let temp = nums[t]
            nums[t]= nums[end]
            nums[end]= temp
            t=t-1
      
        }
      
    }
    return nums
}   

console.log(sortColors([1,2]))

