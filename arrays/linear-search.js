const linearSearch = (nums,num)=> {
for(var i=0;i<nums.length-1;i++) {
    if(arr[i]==num) {
        return i
    }
}
return -1
}
linearSearch([1,2,3,4,5],4)