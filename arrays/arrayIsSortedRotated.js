const checkArraySortedRotated = (arr)=> {
//logic
//rotation means you either move an element from front or back 
//if moving the element from front then u put that element at back 
//if moving the element from back then you put it at right
//now non drecreasing sorted array means that the array is increasing linearly 
//and there is no sudden decrease in the elements.
//note that non drecreasing can have same numbers if it was not allowed then that array is called stricly increasing

//question is we need to check if the array was orignally a sorted array and then some roation was done on it to make it 
//non sorted.
//so logic is
// 1) find out if there is a sudden decrease in the value, 
//if it was a sorted array then current element should be less than next element so 
//when we find that current element is greater than previous element then there is a sudden drop or decrease 
//that is the point where rotation has been done. So if we split from that point then we get two parts
// 2) does the first  of one part and the last element of other part connect  correctly 
// means the first element of one part should be greater than the last element of other part.

//NOTE: that if there is more than one point where u find decrease in value then that array can never be made from a 
// non dercreasing sorted array ,how much roation u do



    let count= 0;
    for(var i=0;i<=arr.length-1;i++) {
        if((arr[i]>arr[i+1])) {
            count +=1
        }
        if(count>1) {return false}
    }
    if(count==0) {return true}
    if(count==1 &&  arr[arr.length-1]<=arr[0]) {
       return true
    }
    return false
}
console.log(checkArraySortedRotated([1,2,3,4,5]))