let arr = [1,2,3,4,5,6,7,8,9];
let target = 5;
let start = 0;
let end = arr.length - 1;
let  index = -1;

function binarySearch(arr , target , start , end){
    while(start <= end){
        let mid = start + end / 2;        
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return -1;
}

index=binarySearch(arr , target , start , end);
if(index != -1)
    console.log("Element found at index " + index);

if(index == -1)
    console.log("Element not found in array");






    