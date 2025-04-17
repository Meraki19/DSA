function minSubArray(arr,target) {
    if(arr.length==0) return 0
    let count=0,tempcount=0 ,start =0, end=0 ,tempArrSum=0
    while(end<arr.length) {
        tempArrSum = tempArrSum+ arr[end]
        tempcount = tempcount+1
        while(tempArrSum>=target) {
            tempArrSum= tempArrSum-arr[start]
            if(count == 0) count=tempcount
            count = Math.min(count,tempcount)
            start++
            tempcount=tempcount-1
           
        }
            end++  
       
    }
    return count

}
console.log(minSubArray([1,1,1,1,1,1,1,1],11))