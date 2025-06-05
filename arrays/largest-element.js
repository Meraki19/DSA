const largestElementInArray = (arr)=> {
    let left= 0 ,right=1,largest=arr[0]
    for(var i = 0;i<arr.length;i++) {
        largest = Math.max(largest, arr[i])
    }
    return largest
}

// console.log(largestElementInArray([1, 3, 2, 7, 5]))

const largestThroughRecurrsion = (arr) => {
    function findLargest(index, largest) {
        if(index==arr.length) {
           return largest
        }
       return findLargest(index+1, Math.max(arr[index],largest))
    }
   return findLargest(0,arr[0])
}

console.log(largestThroughRecurrsion([1, 3, 2, 7, 10]))

