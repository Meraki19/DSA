function longestSubstring(str) {
    let result ='',tempresult='';
   let tempStr = 0,
     start = 0,
     end = 0;
   var stringMap = new Map();
   if (str.length == 0) return 1;
   while (end < str.length) {
     if (stringMap.has(str[end])) {
       start = start + 1;
       if (stringMap.size > tempStr) {
         tempStr = stringMap.size;
       }
       if(result.length>tempresult.length) {
        tempresult = result
       }
       result=""
       stringMap.clear();
       end = start;
     } else {
        result=result+str[end]
       stringMap.set(str[end]);
       end = end + 1;
     }
   }
   if (result > tempresult) {
     return result
   } else {
     return tempresult;
   }
}

console.log(longestSubstring("dvdf"));
