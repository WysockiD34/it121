var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";
    // now need to split up the names and grades

const array1 = grades.replaceAll("|", ",", " ");
const array2 = array1.split(",");
// this now creates a list that has all names and grades as individual variables in a array
array2[0] = "Jim";
array2[2] = "Sue";
array2[4] = "Mary";
array2[6] = "Ann";
array2[8] = "Ted";
array2[10] = "Frank";
array2[12] = "Lisa";
array2[14] = "Mike";
array2[16] = "Ahn";
array2[18] = "Vishaya";
// changing all names to have first letter capitalized
Students = new Array();
// creating a new array of student names only
Students[0] = array2[0];
Students[1] = array2[2];
Students[2] = array2[4];
Students[3] = array2[6];
Students[4] = array2[8];
Students[5] = array2[10];
Students[6] = array2[12];
Students[7] = array2[14];
Students[8] = array2[16];
Students[9] = array2[18];
// will now create a new array of only grades
newGrades = new Array();
newGrades[0] = array2[1];
newGrades[1] = array2[3];
newGrades[2] = array2[5];
newGrades[3] = array2[7];
newGrades[4] = array2[9];
newGrades[5] = array2[11];
newGrades[6] = array2[13];
newGrades[7] = array2[15];
newGrades[8] = array2[17];
newGrades[9] = array2[19];
// This gives me the number of students in the class using the length or number of attributes in the chosen array
let StudentSize = Students.length;
// I will now be creating a variable that is the minimum and maximum number out of the newGrades list
let lowGrade = Math.min.apply(Math, newGrades);
let highGrade = Math.max.apply(Math, newGrades);
//I now want to find the average grade of the class
//This was the only trouble I found while trying to do this assignment, this may be a bad way to do it but I couldn't figure out how to do this specific part without looking it up.

let avgGrade = eval(newGrades.join('+'))/newGrades.length;
console.log(avgGrade);

