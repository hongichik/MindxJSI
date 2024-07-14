// Object.assign(): Sao chép các giá trị của tất cả thuộc tính có thể liệt kê từ một hoặc nhiều đối tượng nguồn vào một đối tượng đích.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = Object.assign(obj1);
console.log(obj3);
console.log("Object.assign() example:");
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

// Spread Syntax (...): Sao chép các phần tử của mảng (hoặc các thuộc tính của đối tượng) vào một mảng (hoặc đối tượng) mới.
const oldArray = [1, 2, 3];
const newArray = [...oldArray];
console.log("\nSpread Syntax (...) example:");
console.log(newArray); // Output: [1, 2, 3]

// Filter: Tạo một mảng mới chỉ chứa các phần tử thỏa mãn điều kiện
const array5 = [1, 2, 3, 4, 5];
const filteredArray5 = array5.filter((element) => element % 2 === 0);
console.log("\nFilter example:");
console.log(filteredArray5); // Output: [2, 4]

// Map: Tạo một mảng mới từ các phần tử của mảng gốc thông qua hàm xử lý
const array4 = [1, 2, 3];
const newArray4 = array4.map((element) => element * 2);
console.log("\nMap example:");
console.log(newArray4); // Output: [2, 4, 6]








// Slice: Sao chép một phần của mảng thành một mảng mới
const array1 = [1, 2, 3, 4, 5];
const newArray1 = array1.slice(1, 4);
console.log("Slice example:");
console.log(newArray1); // Output: [2, 3, 4]

// Spread Operator (...): Sao chép các phần tử của mảng (hoặc các thuộc tính của đối tượng) vào một mảng (hoặc đối tượng) mới
const oldArray2 = [1, 2, 3];
const newArray2 = [...oldArray2];
console.log("\nSpread Operator example:");
console.log(newArray2); // Output: [1, 2, 3]

const oldObject2 = { name: 'John', age: 30 };
const newObject2 = { ...oldObject2 };
console.log(newObject2); // Output: { name: 'John', age: 30 }

// Concat: Nối các mảng lại với nhau và tạo một mảng mới
const array3a = [1, 2];
const array3b = [3, 4];
const newArray3 = array3a.concat(array3b);
console.log("\nConcat example:");
console.log(newArray3); // Output: [1, 2, 3, 4]


// Splice: Thay đổi nội dung của mảng bằng cách xóa hoặc thêm các phần tử
const array6 = [1, 2, 3, 4, 5];
array6.splice(1, 2, 'a', 'b');
console.log("\nSplice example:");
console.log(array6); // Output: [1, 'a', 'b', 4, 5]
