function maxArea(arr) {
    let temp=0, area =0 , start=0,end=arr.length
    while(start<end) {
        let length = Math.min(arr[start],arr[end])
         let breadth=  end-start
          area = length*breadth
                
        if(temp<area) {
            temp= area
        }

        if(arr[start]<arr[end]) {
            start++;
           
        }else {
            end--
        }
    }
    if(temp<area) {
        return area
    } else {
        return temp
    }
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))