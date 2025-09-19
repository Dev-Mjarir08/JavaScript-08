const Bubble_sort = () => {
    let arr=[5, 3, 8, 4, 2];
    n=arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Original array: [5, 3, 8, 4, 2]");
    console.log("Sorted array:", arr);
}

Bubble_sort();