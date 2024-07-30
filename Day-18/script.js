//Task 1 ==> BUBBLE SORT

function bubbleSort(arr){
   let n=arr.length;
   let isSwapped;
   for (let i = 0; i < n-1; i++) {
        isSwapped=false;
        for (let j = 0; j <n-i-1; j++) {
           if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            isSwapped=true;
           }
        }
        if(!isSwapped){
         break;
        }
    }
    return arr;
}
let arr=[2,1,7,3,2,2,59,2,2]
console.log(bubbleSort(arr));

//Task 2 ==>Selection sort
function selectionSort(arr){
    let n =arr.length;
    for (let i = 0; i < n-1; i++) {
      let min=i;
      for (let j = i+1; j <n ; j++) {
        if(arr[j]<arr[min]){
            min=j;
        }
      }
      if(min!==i){
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
      }
    }
}
let arr0=[2,1,58,9,5,2,3,6,9]
selectionSort(arr0);
console.log(arr0);

//Task 3 ==>Quik sort

function quickSort(arr,low,high){
    if(low>high){
        return;
    }

    let s=low;
    let e=high;
    let mid=Math.floor(s+(e-s)/2);
    let pivot=arr[mid];
    while(s<=e){
        while(arr[s]<pivot){
            s++;
        }
        while(arr[e]>pivot){
            e--;
        }
        if(s<=e){
            let temp=arr[s];
            arr[s]=arr[e];
            arr[e]=temp;
            s++;
            e--;
        }
    }
    quickSort(arr,low,e);
    quickSort(arr,s,high);
}
let arr1=[7,5,3,2,5,5,6,455,5,5,2,21,2];
quickSort(arr1,0,arr1.length-1);
console.log(arr1);


//Task 4   ==>Linear Search
function linearSearch(arr,target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==target){
            return i;
        }
    }
}
let arr2=[7,5,1,2,6,4,8,9,2,4,1,5]
console.log("Item found at index :",linearSearch(arr2,8));

//Task 5 ==>Binary Search
function binarySearch(arr,target){
     let left=0;
     let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor(left+(right-left)/2);
        if(arr[mid]==target){
            return mid;
        }
        if(arr[mid]>target){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return -1;
}
let arr3=[1,2,3,4,5,6,7,8,9]
console.log(binarySearch(arr3,6));

//Task 8
function rotate(arr,k){
    let count=0;
    for (let i = k; i < arr.length; i++) {
        let temp=arr[i];
        arr[i]=arr[count];
        arr[count]=temp;
        count++;
    }
}
let arr4=[1,23,4,5,6,7,8,9]
rotate(arr4,4);
console.log(arr4);

//Task 9 ==Merge sorted array

function merge(arr1,arr2){
    let mix=[];
    let i=0;
    let j=0
    let k=0;
    while(i<arr1.length,j<arr2.length){

        if(arr1[i]<=arr2[j]){
            mix[k]=arr1[i];
            i++;
        }else{
            mix[k]=arr2[j];
            j++;
        }
        k++;
    }
    while(i<arr1.length){
        mix[k]=arr1[i];
        i++;
        k++;
    }
    while(j<arr2.length){
        mix[k]=arr1[j];
        j++;
        k++;
    }

    return mix;
}
let arr5=[1,4,5,6,8,9];
let arr6=[3,5,6,7,8,9];
console.log(merge(arr5,arr6));

// Remaining tasks ==>6,7,10,11