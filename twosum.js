
var twoSum = function(nums, target) {
    if(nums.length==0) return []
    
    let maMap = new Map()
    for(var i=1;i<nums.length;i++) {
        let x = target -nums[i]
        if(maMap.has(x)) {
            return [i, maMap.get(x)]
        }
        maMap.set(nums[i],i)
    }


};
console.log(twoSum([3,2,4],6))