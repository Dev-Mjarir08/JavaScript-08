const selectiion_sort = () => {
    let arr = [64, 25, 12, 22, 11];
    let n=arr.length;
    for(i = 0 ; i<n-1; i++){
        minindex=i;
        for(j=i+1; j<n; j++){
            if(arr[minindex]>arr[j]){
                minindex=j;
            }
        }
        if(minindex!=i){
            let temp=arr[i];
            arr[i]=arr[minindex];
            arr[minindex]=temp;
        }
    }
    console.log(arr);
}
selectiion_sort();