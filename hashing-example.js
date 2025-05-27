//Hasing is indexing data to a fixed size value called hash
//  MAP DATA STRUCUTRE  is a build in object that uses  hashmap(hashtable) under the hood
//the time complexity for average case is o(1) and worst case is o(n) 
// and space complexity is o(n) for primitive key and value  where n is the number of enteries.
// When you say space complexity is o(n) we mean that each entry is differnt its kind of a worst case 
//if the elements repeat then obivously the same previous entry would be used hence it wont be o(n) it wlll be reduced
//eg array [1,2,2,2,3,4,4,4,4] here n = 9 (no.of elements)  but snice enteries repeat like 1->1, 2->3, 3->1 , 4->4
//space complexit is o(4) i.e we only take the unique enteries
//if either the key or the value has  complex data type liek array, object , space complexity would be 
// O(m*n) where m represenet the enteries and n represen each key-value pair 
//In js we dont have the seperation of ordered hashmap and un orderred hashmap like Java or C++ instead
// the Map  DATA STRUCTURE is implemented such that it maintain the order of insertion 
//set data structure is also similar to map but it stores only UNIQUE values

// note:  plain object in js is an example of hashtable 

//Problem count frequency of each element
// [10,5,10,15,10,5] -> 10 occurs three times

const frequencyArray = (arr) => {
  //loop through the arr
  //if item already present increment the frequency if not add the element to the map with 1 frequency
  //keep track of max element whwenever a increment happens for a number check the previous max and current
let mymap = new Map();
let maxElement= '', count=0;
  for (var i = 0; i < arr.length; i++) {
    if (mymap.has(arr[i])) {
      mymap.set(arr[i], mymap.get(arr[i]) + 1);
    
    } else {
      mymap.set(arr[i], 1);
    }
    if(count< mymap.get(arr[i]))  {
       count = mymap.get(arr[i])
       maxElement = arr[i]

    }
  }
  return maxElement
};
console.log(frequencyArray([10,5,10,15,10]))
