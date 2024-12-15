/// <reference path="../js/subjects/Cpp.ts" />
/// <reference path="../js/subjects/React.ts" />
/// <reference path="../js/subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

const teacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 5,
  experienceTeachingReact: 3,
  experienceTeachingJava: 2,
};

cpp.setTeacher = teacher;
react.setTeacher = teacher;
java.setTeacher = teacher;

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
