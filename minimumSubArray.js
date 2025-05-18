function minSubArray(arr,target) {
    if(arr.length==0) return 0
    let count=Infinity,tempcount=0 ,start =0, end=0 ,tempArrSum=0
    while(end<arr.length) {
        tempArrSum = tempArrSum+ arr[end]
        
        while(tempArrSum>=target) {
            tempArrSum= tempArrSum-arr[start]
            tempcount = end-start+1
            count = Math.min(count,tempcount)
            start++
           tempcount=tempcount-1
           
        }
            end++  
       
    }
    return count===Infinity?0:count

}
console.log(minSubArray([1,2,3,4,5],15))