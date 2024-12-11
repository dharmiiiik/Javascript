// que 1
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// que 2

const array = [10, 20, 30, 40, 50];
let i = 0;
while (i < array.length) {
    console.log(array[i]); i++;
}

// que 3
let str = "hello,world!";
for(let i = 0; i < str.length; i++){
    console.log(str[i])
}

// que 4

const str1 = "JavaScript";


for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// que 5
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum);
}


// que 6
const arr1 = [3, 1, 4, 1, 5, 9];
let max = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i];
    }console.log(max);
}

// que 7
// skip


// que 8
let greeting = "hello";
let result = "";
for (let i = 0; i < greeting.length; i++) {
  result += greeting[i].toUpperCase();
  console.log(result);
}

// que 9
let arr2 = [2, 4, 6, 8, 10];
let count = 0;
let a = 0;
while (a < arr2.length) {
  count++;
  a++;
}
console.log(count);

// que 10 
let arr3 = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 === 0) {
    console.log(arr3[i]);
  }
}

// QUE 11
let arr6 = [5, 10, 15]
let count1 = 0
for(let i = 0; i<arr6.length; i++){
    count++
}
console.log(count1)

// que 12
let arr4 = ["apple", "banana", "cherry"];
let totalLength = 0;
for (let i = 0; i < arr4.length; i++) {
  totalLength += arr4[i].length;
  console.log(totalLength);
}

// que 13
let arr5 = ["This", "is", "JavaScript"];
let result1 = "";
for (let i = 0; i < arr5.length; i++) {
  result1 += arr5[i];
  console.log(result1);
}
