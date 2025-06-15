
var setZeroes = function(matrix) {
    let setfirstRowHasZero = false
    let setfirstColHasZero = false
   for(let i=0 ;i<matrix[0].length;i++) {
    if(matrix[0][i]==0) {
        setfirstRowHasZero = true
        break;
    }
   }
   for(let j=0;j<matrix.length;j++) {
    if(matrix[j][0]==0) {
        setfirstColHasZero = true
        break
    }
   }
   for(let i=0;i<matrix.length;i++) {
    for(let j=0;j<matrix[i].length;j++) {
        if(matrix[i][j]==0) {
            matrix[0][j]=0
            matrix[i][0]=0
        }
    }
}
    for(let i=1;i<matrix.length;i++) {
        for(let j=1;j<matrix[i].length;j++) {
            if(matrix[0][j]==0 || matrix[i][0]==0) {
                matrix[i][j]=0
            }
        }
    }
    if(setfirstColHasZero) {
        for(let i =0;i<matrix.length;i++) {
            matrix[i][0] = 0
        }
    }
    if(setfirstRowHasZero) {
        for(let i=0;i<matrix[0].length;i++) {
            matrix[0][i] =0
        }
    }
   return matrix
};
let arr =  [[1,1,1],[1,0,1],[1,1,1]]
console.log(setZeroes(arr))