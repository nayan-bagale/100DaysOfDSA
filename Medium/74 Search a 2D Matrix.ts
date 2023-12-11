/**
 * Searches for a target number in a matrix.
 *
 * @param {number[][]} matrix - The matrix to search in.
 * @param {number} target - The target number to search for.
 * @return {boolean} Returns true if the target number is found in the matrix, otherwise returns false.
 */

const searchMatrix = (matrix: number[][], target: number): Boolean => {
    if( matrix.length === 1 ){
        return binarySerach(matrix[0], target);
    }
    let rStart=0, rEnd=matrix.length-1;
    while(rStart <= rEnd){
        let rMid = rStart + Math.floor((rEnd-rStart)/2);
        if(matrix[rMid][0] === target){
            return true;
        }

        if(matrix[rMid][0] > target){
            rEnd = rMid-1;
        }else{
            rStart = rMid+1;
        }

        for(let i=rEnd; i< rStart; i++){
            if(i<0){
                return false;
            }
            let result = binarySerach(matrix[i], target);
            if(result){
                return true;
            }
        }
    }
    return false;

};

const binarySerach = (row: number[], target: number): Boolean => {
    let start=0, end=row.length-1;
    while(start <= end){
        let mid = start + Math.floor((end-start)/2);
        if(row[mid] === target){
            return true;
        }
        
        if(row[mid] > target){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return false;
}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));