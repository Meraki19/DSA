function longestPalindrome(str) {
    if(str.length==0) return ""
    if(str.length==1) return str
  let oddPal = "", temp = "", max=""
  for (var i = 0; i < str.length; i++) {
    oddPal = getPal(str, i - 1, i + 1);
    evenPal = getPal(str, i, i+1)
    let max = Math.max(oddPal.length,evenPal.length) === oddPal.length ? oddPal : evenPal
    if (temp.length < max.length) {
      temp = max;
    }
  }
  if(temp =="" && max == "") return str[0]
  if (temp.length < max.length) {
    return max;
  } else {
    return temp;
  }
}

function getPal(str, left, right) {
  let pal = "";
  while (left >= 0 && right < str.length ) {
    if (str[left] === str[right]) {
      pal = str.slice(left, right + 1);
    } else {
        return pal
    }
    left--;
    right++;
  }
  return pal;
}

console.log(longestPalindrome("abbddddaabbbaa"));
