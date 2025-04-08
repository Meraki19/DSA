//one approach that you did  two sum inside three sum and use set
// function threeSum(arr) {
//     arr.sort((a,b)=> a-b)
//     let mySet =new  Set(), result = []

//     for (var i=0;i<arr.length;i++) {
//         if(i==0 || arr[i]!==arr[i-1]) {
//         target =arr[i]
//         let temp = new Set()
//         for(var j=i+1;j<arr.length;j++) {

//             let compliment= 0-target -arr[j]
//             if(mySet.has(compliment)) {
//                 let srotedtemp= [arr[j],compliment,arr[i]].sort((a,b)=> a-b)
//                 let keys = srotedtemp.join(',')
//                 if(!temp.has(keys)) {
//                         result.push(srotedtemp)
//                         temp.add(keys)
//                 }
//             }
//            mySet.add(arr[j])
//         }
//         mySet.clear()
//     }
//     }
//     return result
// }
//  Please note that both approach uses o(n^2) but the below one is better due to less memory usage
//optimal apprach -> two pointer approach
// sort the array
// loop through the array
// fix left and right ends
// now calculate the sum using arr[i] + arr[left] + arr[right]
// if sum is 0 you have a valid triplet
//     -> push that to an array
//     -> then check if elements after left and right indicies are same as of current left and right 4
//     -> if left has same then increment left to go to the next left element (skip duplicates)
//     -> if right has the same then decrement right to to the next right element(skip duplicates)
// if sum is not 0 then it can be greter than 0 or less than 0
// if greater than 0 then right --
// if less than 0 increment left ie left ++

function optimalThreeSume(arr) {
  let sortedArr = arr.sort((a, b) => a - b),
    result = [];
  for (var i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i - 1]) continue;
    let left = i + 1,
      right = sortedArr.length - 1;
    while (left < right) {
      let sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
      if (sum == 0) {
        result.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
        while (left < right && sortedArr[left] == sortedArr[left + 1]) left++;
        while (left < right && sortedArr[right] == sortedArr[right - 1])
          right--;
        left++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
console.log(optimalThreeSume([-1, 0, 1, 2, -1, -4]));
