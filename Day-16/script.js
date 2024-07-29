
//Hello friends
//Task 1
let fact=1;
function factorial(n){
    if(n==1){
        return fact;
    }
    fact*=n;
   return factorial(n-1);
}
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(15));

//Task 2
function fibo(n) {
    if(n<2){
        return n;
    }
    return fibo(n-1)+fibo(n-2)
}
console.log(fibo(5));

//Task 3
let arr=[1,23,5,6,6,1]
let summ=0;
function sum(n) {
    if(n==arr.length){
        return summ;
    }
    summ+=arr[n];
    return sum(n+1);
}
console.log(sum(0));

//Task 4
let arr1=[1,2,4,56,8,2,28,65,11,2]
let maxi=arr1[0];
let max=(n)=>{
    if(n==arr1.length){
        return maxi;
    }
    if(arr1[n]>=maxi){
        maxi=arr1[n];
    }
    return max(n+1);
}
console.log(max(0));

//Task 5
let newStr="";
function reverse(str,n){
    if(n<0){
        return newStr;
    }
    newStr+=str[n];
    return reverse(str,n-1)
}
let str="Tejas";
console.log(reverse(str,str.length-1));

//Task 6
let newStr1="";
function palindrome(str1,n){
    if(n<0){
        return newStr1==str1;
    }
    newStr1+=str1[n];
    return palindrome(str1,n-1)
}
let str1="mam";
console.log(palindrome(str1,str1.length-1));

//Task 7
function binarySearch(nums,target,s,e){
    if(s>e){
        return -1
    } ;
        
     let mid=Math.floor(s+(e-s)/2);
    if(nums[mid]==target){
        return mid;
    }
    if(target>nums[mid]){
        return binarySearch(nums,target,mid+1,e)
    }
        return binarySearch(nums,target,s,mid-1);
    

}
let nums=[1,2,3,4,5,6,7,8,9];
let target=6;
console.log(binarySearch(nums,target,0,nums.length-1));


// Task 8
let tr=[1,2,4,9,9,411,1,5,5,9,9,9]
function occur(target,n,count){
    if(n==tr.length){
        return count;
    }
    if(target==tr[n]){
        count++;
    }
    return occur(target,n+1,count);
}
console.log(occur(9,0,0));
console.log(occur(5,0,0));

//Task 9,10
/*
  DO IT LATER 
*/