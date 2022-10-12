/*
a) Calculate grades on basis of marks
*/

let students = [
    { name: "John", marks: "92" },
    { name: "Oliver", marks: "85" },
    { name: "Michael", marks: "79" },
    { name: "Dwight", marks: "95"},
    { name: "Oscar", marks: "64" },
    { name: "Kevin", marks: "48" },
    ];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
    //console.log(students[i].marks);
        Avgmarks += parseInt(students[i].marks);
        //console.log(Avgmarks);    
        var avg = (Avgmarks/students.length);
        
}
console.log("Average grade: " + Math.floor((Avgmarks)/students.length));


//b) Map the grades of each student

function getLetterGrade(marks) {
    if (marks > 90) {
        return 'A';
    } else if (marks > 80) {
        return 'B';
    } else if (marks > 70) {
        return 'C';
    } else if (marks > 60) {
        return 'D';
    } else if (marks > 50) {
        return 'E';
    } else {
        return 'F';
    }
}


studentsWithLetterGrades = students.map((student) => {
    student.grade = getLetterGrade(student.marks);
    return student;
});
//console.log(studentsWithLetterGrades);

// Group students according to the grades

const groupByCategory = studentsWithLetterGrades.reduce((group, product) => {
    const { grade } = product;
    group[grade] = group[grade] ?? [];
    group[grade].push(product);
    return group;
  }, {});
  console.log(groupByCategory);
  //console.log(JSON.stringify(groupByCategory, null, 2));