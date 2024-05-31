//Sample arrays for testing:




//Sort each array in ascending order.
let nums1 = [5, 10, 2, 42];

function ascendingOrder(nums1){
    for(let i = 0;i<nums1.length-1;i++){
        let min = i
        for(let j= i+1;j<nums1.length;j++){
            if(nums1[j] < nums1[min]){
                min = j;
            } 

        }
            
         let temp = nums1[min];
        nums1[min]=nums1[i];
        nums1[i] = temp;

    }
    return nums1;
}
 console.log(ascendingOrder(nums1));


let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];

function descendingOrder(nums2){
    for(let i = 0;i<nums2.length-1;i++){
        let max = i;
        for(let j= i+1;j<nums2.length;j++){
            if(nums2[j] > nums2[max]){
                max = j;
            } 

        }
            
         let temp = nums2[max];
         nums2[max]=nums2[i];
         nums2[i] = temp;

    }
    return nums2;
}


console.log(descendingOrder(nums2))