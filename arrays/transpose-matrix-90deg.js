const transposeMatrix= (matrix)=> {
    for(var i=0;i<matrix.length;i++) {
        for(var j=i+1;j<matrix[i].length;j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    for(var i=0;i<matrix.length;i++) {
        let start=0, end = matrix[i].length-1
     while(start<end) {
        let temp = matrix[i][start]
        matrix[i][start]=matrix[i][end]
        matrix[i][end] = temp
        start++
        end--
     }
    }
    return matrix
}

console.log(transposeMatrix([[1,2,3],[4,5,6],[7,8,9]]))