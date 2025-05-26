const moveZerors = (nums)=> {
    if(nums.length==0) {return nums}
    let start=0 ,end=0
    while(end<nums.length) {
        if(nums[end]!==0) {
            let temp = nums[end]
            nums[end] = nums[start]
            nums[start] = temp
            start++ 
        }
        end++
    }
return nums
}
console.log(moveZerors([1,2]))