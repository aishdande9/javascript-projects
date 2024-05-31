//Sample arrays for testing:




//Sort each array in ascending order.
let nums1 = [5, 10, 2, 42];
function ascendingOrder(nums1){
    for(let i = 0;i<nums1.length-1;i++){
        let min = nums1[0]
        for(let j= i+1;j<nums1.length;j++){
            if(min>nums1[j])
                min = j;
        }
        let temp = nums1[i];
        nums1[i]=nums1[min];
        nums1[min] = temp;

    }
return nums1
}
console.log(ascendingOrder(nums1))

// function descendingOrder(nums1){
// for(let i =0;i<nums1.length;i++){


// }
// }
// console.log(descendingOrder(nums1))
