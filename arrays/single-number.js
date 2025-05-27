const singleNumber = (nums)=> {
    let res=0
    for(var i=0;i<nums.length;i++) {
        res = res^nums[i]
    }
    return res
}

console.log(singleNumber([4,1,2,1,2]))

//using the xor property
// XOR is self inversive meaning 4^4 is 0 
//hence those will cancel out resulting in the single number

//========== NOTE ================
//if you do a xor operation btwn two decimals js automacially converts them to binary does the 
//XOR operation and then converts the resultant binary back to decimal
//if you wish to convert a number to binary then u can use toString method like 5.toString(2) which 
//result in binary.
//if you want to convert a binary to number use parseInt parseInt(10101,2)