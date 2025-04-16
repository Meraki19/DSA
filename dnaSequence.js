//Approach
//since this involves finding a substring or a continous items 
// we use sliding window technique
//we need to find sub string of lenght 10 that are repeating 
//loop through the string till start index is less or equal to string length - 10 (minimum length
//of substring required is 10)
//create a set
//check if each substring formed exist in the set 
//if it does add it to the result i.e you have found a repeating pattern of substring in the given string
//else add it to the set
// note : if you need to avoid duplicate instead of result array create a result set 

function dnaSequence(str) {
    if(str.length<10) return []
    let mySet = new Set(), result = new Set()
    for(let i=0;i<=str.length-10;i++) {
        let end = i+10;
        let dnasubSequence = str.slice(i,end)
       if(mySet.has(dnasubSequence)) {
        result.add(dnasubSequence)
       }
       mySet.add(dnasubSequence)
    }
    return [...result]
}

console.log(dnaSequence("AAAAAAAAAAAAA"))
