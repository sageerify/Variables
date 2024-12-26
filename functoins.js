// Array of students
const students = [
    { name: "Ali", interviewGiven: true },
    { name: "Aisha", interviewGiven: false },
    { name: "Ahmed", interviewGiven: true },
    { name: "Fatima", interviewGiven: false },
    { name: "Sara", interviewGiven: true },
];

// Filter students who didn't give the interview
const notInterviewed = students.filter(student => !student.interviewGiven);

// Map to add them to a new list or process them
const addedNotInterviewed = notInterviewed.map(student => ({
    ...student,
    addedToList: true // Adding a new property to mark them
}));

console.log("Students who didn't give the interview:", addedNotInterviewed);

// Separate the students who have given the interview
const interviewed = students.filter(student => student.interviewGiven);

console.log("Students who gave the interview:", interviewed);
//this is none