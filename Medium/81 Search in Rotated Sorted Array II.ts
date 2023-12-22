function search(nums: number[], target: number): number {
return (pivot(nums));

}
const pivot = (nums: number[]) => {

    let start=0,
    mid=-1,
    end=nums.length-1;
    while(start < end){
        mid = start + Math.floor((end - start)/2);

        if( end > mid && nums[mid] < nums[mid-1]){
            return mid;
        }

        if(nums[end] === nums[end-1]){
            end=end-1;
            continue;
        }

        if(nums[start] === nums[end]){
            if(nums[start] > nums[start + 1]){
                return start+1
            }
            start++
            if(nums[end-1] > nums[end]){
                return end
            }
            end--
        }else if(nums[mid] > nums[end]){
            start = mid+1;
        }else{
            end = mid-1;
        }

    }
    return start;
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); //true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); //false
console.log(search([1, 0, 1, 1, 1], 0));
console.log(search([0,0,1,2,2,5,6], 0));
console.log(search([0,0,1,2,4,5], 0));
console.log(search([9,10,22,40,60,60,0,0,0,0,0], 0));

