//câu 1
// Khai báo mảng gốc
const arr1 = [1, 2, 3, 5];

// Cách 1: Sử dụng Spread Operator
const duplicatedArr1 = [...arr1];
console.log('Duplicated using Spread Operator:', duplicatedArr1); // Output: [1, 2, 3, 5]

// Cách 2: Sử dụng phương thức slice()
const duplicatedArr2 = arr1.slice();
console.log('Duplicated using slice():', duplicatedArr2); // Output: [1, 2, 3, 5]

// Cách 3: Sử dụng phương thức concat()
const duplicatedArr3 = arr1.concat();
console.log('Duplicated using concat():', duplicatedArr3); // Output: [1, 2, 3, 5]

// Cách 4: Sử dụng phương thức Array.from()
const duplicatedArr4 = Array.from(arr1);
console.log('Duplicated using Array.from():', duplicatedArr4); // Output: [1, 2, 3, 5]

// Cách 5: Sử dụng phương thức map() (một cách không phổ biến nhưng vẫn khả thi)
const duplicatedArr5 = arr1.map(item => item);
console.log('Duplicated using map():', duplicatedArr5); // Output: [1, 2, 3, 5]






// câu 2
// Khai báo hai mảng ban đầu
const arrA = ["Hello", "Xin chào"];
const arrB = ["Bonjour", "Olá"];

// Cách 1: Sử dụng Spread Operator
const waysToSayHello1 = [...arrA, ...arrB];
console.log('Merged using Spread Operator:', waysToSayHello1); // Output: ["Hello", "Xin chào", "Bonjour", "Olá"]

// Cách 2: Sử dụng phương thức concat()
const waysToSayHello2 = arrA.concat(arrB);
console.log('Merged using concat():', waysToSayHello2); // Output: ["Hello", "Xin chào", "Bonjour", "Olá"]

// Cách 3: Sử dụng phương thức push() với Spread Operator
const waysToSayHello3 = [...arrA];
waysToSayHello3.push(...arrB);
console.log('Merged using push() with Spread Operator:', waysToSayHello3); // Output: ["Hello", "Xin chào", "Bonjour", "Olá"]

// Cách 4: Sử dụng vòng lặp for
const waysToSayHello4 = [];
for (let item of arrA) {
    waysToSayHello4.push(item);
}
for (let item of arrB) {
    waysToSayHello4.push(item);
}
console.log('Merged using for loop:', waysToSayHello4); // Output: ["Hello", "Xin chào", "Bonjour", "Olá"]

// Cách 5: Sử dụng phương thức Array.from() và Spread Operator
const waysToSayHello5 = Array.from([...arrA, ...arrB]);
console.log('Merged using Array.from() and Spread Operator:', waysToSayHello5); // Output: ["Hello", "Xin chào", "Bonjour", "Olá"]






// câu 3
// Khai báo mảng ban đầu
const arrX = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Cách 1: Sử dụng map() để tạo arrSquare, chứa các giá trị của phần tử trong arrX đã được bình phương
const arrSquare1 = arrX.map(num => num ** 2);
console.log('Array of squares using map():', arrSquare1); // Output: [0, 1, 4, 9, 16, 25, 36, 49, 64]

// Cách 2: Sử dụng vòng lặp for để tạo arrSquare
const arrSquare2 = [];
for (let num of arrX) {
    arrSquare2.push(num ** 2);
}
console.log('Array of squares using for loop:', arrSquare2); // Output: [0, 1, 4, 9, 16, 25, 36, 49, 64]

// Cách 3: Sử dụng phương thức forEach để tạo arrSquare
const arrSquare3 = [];
arrX.forEach(num => arrSquare3.push(num ** 2));
console.log('Array of squares using forEach:', arrSquare3); // Output: [0, 1, 4, 9, 16, 25, 36, 49, 64]

// Tạo arrOdds, chứa các phần tử là số lẻ nằm trong arrX

// Cách 1: Sử dụng filter() để tạo arrOdds
const arrOdds1 = arrX.filter(num => num % 2 !== 0);
console.log('Array of odd numbers using filter():', arrOdds1); // Output: [1, 3, 5, 7]

// Cách 2: Sử dụng vòng lặp for để tạo arrOdds
const arrOdds2 = [];
for (let num of arrX) {
    if (num % 2 !== 0) {
        arrOdds2.push(num);
    }
}
console.log('Array of odd numbers using for loop:', arrOdds2); // Output: [1, 3, 5, 7]

// Cách 3: Sử dụng phương thức forEach để tạo arrOdds
const arrOdds3 = [];
arrX.forEach(num => {
    if (num % 2 !== 0) {
        arrOdds3.push(num);
    }
});
console.log('Array of odd numbers using forEach:', arrOdds3); // Output: [1, 3, 5, 7]







// câu 4
// Cách 1: Sử dụng slice() và filter()
function filterRange1(arr, a, b) {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    return arr.slice(start, end + 1);
}

// Cách 2: Sử dụng slice() và vòng lặp for
function filterRange2(arr, a, b) {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(arr[i]);
    }
    return result;
}

// Cách 3: Sử dụng slice() và phương thức forEach
function filterRange3(arr, a, b) {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    const result = [];
    arr.slice(start, end + 1).forEach(element => {
        result.push(element);
    });
    return result;
}

// Ví dụ sử dụng
const arr = [1, 5, 4, 6];
const a = 0;
const b = 2;

const filteredArr1 = filterRange1(arr, a, b);
console.log('Filtered using slice() and filter():', filteredArr1); // Output: [1, 5]

const filteredArr2 = filterRange2(arr, a, b);
console.log('Filtered using slice() and for loop:', filteredArr2); // Output: [1, 5]

const filteredArr3 = filterRange3(arr, a, b);
console.log('Filtered using slice() and forEach:', filteredArr3); // Output: [1, 5]



// câu 5
// Cách 1: Tạo ra mảng mới, mảng cũ không bị thay đổi
function filterRangeNew(arr, a, b) {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    return arr.slice(0, start).concat(arr.slice(start + 1, end)).concat(arr.slice(end + 1));
}

// Cách 2: Sử dụng filter() để tạo ra mảng mới, mảng cũ không bị thay đổi
function filterRangeNew2(arr, a, b) {
    return arr.filter((_, index) => index <= a || index >= b);
}

// Cách 3: Không tạo ra mảng mới, thay đổi mảng cũ
function filterRangeInPlace(arr, a, b) {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    arr.splice(end, 1); // Xóa phần tử tại vị trí end
    arr.splice(start, 1); // Xóa phần tử tại vị trí start
}

// Ví dụ sử dụng
const arr = [1, 5, 4, 6];
const a = 0;
const b = 2;

// Tạo ra mảng mới, mảng cũ không bị thay đổi
const filteredArr1 = filterRangeNew(arr, a, b);
console.log('Filtered array (new array):', filteredArr1); // Output: [1]

// Sử dụng filter() để tạo ra mảng mới, mảng cũ không bị thay đổi
const filteredArr2 = filterRangeNew2(arr, a, b);
console.log('Filtered array using filter() (new array):', filteredArr2); // Output: [1]

// Không tạo ra mảng mới, thay đổi mảng cũ
const arr2 = [1, 5, 4, 6];
filterRangeInPlace(arr2, a, b);
console.log('Filtered array in place:', arr2); // Output: [1]






// câu 6
let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game","sleep","learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game","sick","study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game","sick","learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game","sleep","learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game","sick","study"]
    }
];

// Câu 1
function findStudentsByAge(students, age) {
    const filteredStudents = students.filter(student => student.age === age);
    const names = filteredStudents.map(student => student.name);
    return names;
}

// Câu 2
function findStudentsByHobby(students, hobby) {
    const filteredStudents = students.filter(student => student.hobbies.includes(hobby));
    const results = filteredStudents.map(student => ({ name: student.name, hobbies: student.hobbies }));
    return results;
}

// Câu 3
function findStudentsBySpecificHobby(students, hobby) {
    const filteredStudents = students.filter(student => student.hobbies.includes(hobby));
    return filteredStudents;
}

// Câu 4
function updateStudentsAge(students, oldAge, newAge) {
    const updatedStudents = students.map(student => {
        if (student.age === oldAge) {
            return { ...student, age: newAge };
        } else {
            return student;
        }
    });
    return updatedStudents;
}
