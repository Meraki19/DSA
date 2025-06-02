// const majorityElement = (nums) => {
//     let mymap= new Map()
//     for(var i=0;i<nums.length;i++) {
//             mymap.set(nums[i], mymap.get(nums[i])+1 || 1)
//             if(mymap.get(nums[i])>Math.floor(nums.length/2)) {
//                 return nums[i]
//             }

//     }

// }
//the above method is a better approach
//however it takes space complexity as o(n) in worst case
//we can reduce this complexity to o(1) by using a algorithm called as  MOORES VOTING ALGORITHM
//the idea here is that we traverse the array
//and increment a count value when we see the same elemnt and decrement when we see a different element
//this is because count of majority element or minority element is same at one point in time
//Algorithm
//  initialise count, element
//  traverse the array
//  if count is 0 then set the count as 1 (ideally the starting point or when the count get decremented and becomes 0)
//  and set element as current array element
//  if current element in array is same as the element then increment the counter else decrement the counter
//  return the element  variable which will be the majority element
//============== : NOTE : ===================
// If the question states that the array must contain a majority element,
//  the stored element will be that one but if the question does not state so,
//  then we need to check if the stored element is the majority element or not.
//  If not, then the array does not contain any majority element.
// For this you will have to loop through the array again
//check if the obtained element occurance count
// if that is more than array.length/2 then that becomes the majority else no majority element

const majorityElement = (nums) => {
  let count = 0,
    element = null;
  for (var i = 0; i < nums.length; i++) {
    if (count == 0) {
      element = nums[i];
      count = 1;
    } else if (element == nums[i]) {
      count++;
    } else {
      //element = nums[i];
      count--;
    }
  }
  return element;
};

console.log(majorityElement([4, 4, 2, 4, 3, 4, 4, 3, 2, 4]));
