const insertion_sort = () => {

    let arr = [5, 2, 9, 1, 6];
    console.log("Main array after sorting: " + arr); 
    n=arr.length
    for (i=1; i<n ;  i++){
        key=arr[i]
        for(j=i-1 ; j>=0 && arr[j]>key ; j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=key
    }
    console.log(arr)
}
insertion_sort()