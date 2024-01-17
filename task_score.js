// Student scores by modules
let introductionScore = 80;
let gitScore = 92;
let jsScore = 68;

// Calculating the average score
let averageScore = (introductionScore + gitScore + jsScore) / 3;

// Student information
let studentFullName = "Irina Lapina";
let studentFirstName = studentFullName.slice(0, 2);

// Console output with template strings
console.log(`Student Full Name: ${studentFullName}`);
console.log(`Student First Name: ${studentFirstName}`);
console.log(`Scores for Introduction: ${introductionScore}`);
console.log(`Scores for Git: ${gitScore}`);
console.log(`Scores for JavaScript: ${jsScore}`);
console.log(`Average Score: ${averageScore}`);