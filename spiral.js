// Generate a square matrix of size N x N filled with integers from 1 to N^2 in a spiral order (clockwise). Return the matrix as a 2D list.

function printSpiralNumbs(num){
    let numberLen = num*num;
    let count = 1;
    let matrix = Array(num).fill([...Array(num).fill(0)]);
    matrix = matrix.map((row)=>row.map((e)=>e)) 
    let top = 0;
    let left = 0;
    let right = num-1;
    let bottom = num-1
    while(top<=bottom && left <=right){
        
        for(let i=left;i<=right;i++){
            matrix[top][i]=count;
            count++;
        }
  
        top++;
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = count;
            count++
        }
        right--;
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = count;
            count++
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = count;
            count++
        }
        left++;
    }

    return matrix
}

const output = printSpiralNumbs(5);
console.log(output)
for(let row of output){
    console.log(row.reduce((prev,curr)=>`${prev}   ${curr}`))
}
