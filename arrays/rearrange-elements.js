// const rearrangeElements = (nums)=> {
//     let positivenumbers=[], negativenumbers= []
//     for(let i=0;i<nums.length;i++) {
//         if(nums[i]>0) {
//             positivenumbers.push(nums[i])
//         } else {
//             negativenumbers.push(nums[i])
//         }
//     }

//     for(let i=0;i<nums.length;i+=2) {
//         nums[i] = positivenumbers[i/2]
//         nums[i+1] = negativenumbers[i/2]
//     }
//     return nums
// }

//console.log(rearrangeElements([3,1,-2,-5,2,-4]))

const rearrageElements= (nums)=> {
    //another approach 
    // both appraoch almost take same time and space complexity , time comoplecity of this one is o(n) and space complexity is o(n)
    //previous one time complexity is O(n+n) = O(2n)~ o(n) and space complxity is o(n)
    let posindex=0, negIndex=1
    let res= new Array(nums.length)
    for(let i=0;i<nums.length;i++) {
        if(nums[i]<0) {
            res[negIndex] = nums[i]
            negIndex+=2
        } else {
            res[posindex] = nums[i]
            posindex+=2
        }
    }
    return res
}
console.log(rearrageElements([3,1,-2,-5,2,-4]))