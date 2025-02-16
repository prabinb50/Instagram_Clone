// ARRAY
// Collection of similar items under the same name is called an array.
// Example
const students = ["ram", "shyam", "mohan", "sohan", "ram", "lokichaulagain"]; // Array of strings
const teachers = [
    { name: "ram", subject: "maths" },
    { name: "shyam", subject: "bio" },
    { name: "ram", subject: "science" },
]; // Array of objects

console.log(students);
console.log(teachers);

// Method of array
//1. At
console.log(students[2]);
console.log(teachers[0]);
console.log(teachers[0].subject);

// 2. Length
console.log(students.length);
console.log(teachers.length);

// 3. Push
students.push("devkota");
console.log(students);

teachers.push({ name: "hari", subject: "english" });
console.log(teachers);

// // 4. Slice
// console.log(students.slice(1, 3));

// // 5. Splice
// console.log(students.splice(1, 3));

//6 Filter

const response = students.filter((student) => {
    return student === "ram";
});
console.log(response);

const res = teachers.filter((teacher) => {
    return teacher.subject === "science";
});
console.log(res);