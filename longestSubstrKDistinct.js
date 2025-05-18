// You're given a string s and an integer k.
// Your task is to return the length of the longest substring that contains at most k distinct characters.

//eceba, k = 2
function distnctCharsubString(str, k) {
  let uniquecharMap = new Map(),maxLength=0,tempStr='',resultStr='',
    start = 0;
  for (let end = 0; end < str.length; end++) {
    uniquecharMap.set(str[end], (uniquecharMap.get(str[end]) || 0 + 1));
  
    while (uniquecharMap.size > k) {
      uniquecharMap.set(str[start], uniquecharMap.get(str[start]) - 1);
      if (uniquecharMap.get(str[start]) == 0) {
        uniquecharMap.delete(str[start]);
      }
      
     
     start++;
    }
    if(uniquecharMap.size<=k) {
        tempStr = str.slice(start,end+1)
        if(tempStr.length>resultStr.length) {
            resultStr=tempStr
        }
        console.log(resultStr)
        
    }
   
    maxLength = Math.max(maxLength, end-start+1)
  
  }
  return maxLength
}
console.log(distnctCharsubString("eceba", 2));
