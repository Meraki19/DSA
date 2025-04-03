function maxProductSubArray(arr) {
    let minProduct = arr[0],
    maxProduct = arr[0],
    res= arr[0]
    for(var i=1;i<arr.length;i++) {
       if(arr[i]<0) {
        //    let temp= maxProduct;
        //    maxProduct= minProduct;
        //    minProduct= temp
        [maxProduct, minProduct] = [minProduct, maxProduct]
       }
       minProduct = Math.min(arr[i],minProduct*arr[i])
       maxProduct= Math.max(arr[i],maxProduct*arr[i])
       res = Math.max(res,maxProduct)
    }
   return res
}

console.log(maxProductSubArray([1,2,4,-2,-3,5]));
