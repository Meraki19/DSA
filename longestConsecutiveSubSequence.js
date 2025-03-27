function LongestConsecutiveSubSequence(arr) {
//edge case
if(arr.length==0) return 0
let sequenceSet = new Set(arr)
let maxLength=0;
for(let num of sequenceSet) {
    //start of a sequence -> arr[i]-1 is in set 
    if(!sequenceSet.has(num-1)) {
        let count =1
        // if the you get start of a sequence
        //find the net element by adding +1 to current element
        let nextNumber = num+1
        //terminate the lopp when the next number doesnt exist in the set
       while(sequenceSet.has(nextNumber)) {
        //incerement count if next number found 
        count =count+1
        nextNumber= nextNumber+1
       }
       maxLength = Math.max(maxLength, count);
    }
    
}
return maxLength

}

console.log(LongestConsecutiveSubSequence([9,1,4,7,3,-1,0,5,8,-1,6]))

//starting points
3
