const secondLargestNumber = (nums) => {
    let largest = -Infinity
    let secondLargest= -Infinity
    for(let i=0;i<nums.length;i++) {
        if(nums[i]>largest) {
            secondLargest= largest;
            largest= nums[i]
        }
        else if(nums[i]>secondLargest && nums[i]<largest) {
            secondLargest=nums[i]
        }
    }
    return secondLargest === -Infinity ? -1: secondLargest
}

//console.log(secondLargestNumber([2]))

const secondSmallestNumber = (nums)=> {
    let smallest = Infinity
    let secondSmallest = Infinity
    for(let i=0;i<nums.length;i++) {
        if(nums[i]<smallest) {
            secondSmallest = smallest
            smallest= nums[i]
        }
        else if(nums[i]<secondSmallest && nums[i]>smallest) {
            secondSmallest= nums[i]
        }
    }
    return secondSmallest===Infinity ? -1 : secondSmallest
}

console.log(secondSmallestNumber([5,2,11,4,9,8]))