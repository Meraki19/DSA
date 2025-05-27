const unionOfSortedArray = (arr1,arr2)=>{
    let mySet = new Set()
    for(var i=0;i<arr1.length;i++) {
            mySet.add(arr1[i])
    }
    for(var j=0;j<arr2.length;j++) {
          mySet.add(arr2[j])
    }
    //console.log(mySet)
    return Array.from(mySet)
}
console.log(unionOfSortedArray([1,2,3,4,5],[2,3,4,4,5,6]))
//TO DO USING TWO POINTERS