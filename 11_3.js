const school = {
    teachers: [
        {
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            name: "Jennifer",
            age: 20,
        },
        {
            name: "Howard",
            age: 23,
        },
        {
            name: "Old-Timmy",
            age: 86,
        },
        {
            name: "Houston",
            age: 21,
        },
    ],
};


const assignStudent = (student, subject) => {
    let flagStudent = false;
    for (let i in school.students) {
        if (school.students[i].name === student) {
            flagStudent = true;
        }
    }
    for (let i in school.teachers) {
        if (school.teachers[i].capacityLeft > 0 &&
            school.teachers[i].subjects.includes(subject)) {
            if ( flagStudent) {
                school.teachers[i].capacityLeft -=1;
                school.teachers[i].students.push(student);
            }
        }else if(school.teachers[i].capacityLeft===0 ){
            console.log("Sorry, no available teachers left");
        }
        else{
            console.log("The subject does not exist");
        }
    }
}

assignStudent("Jennifer", "history");
console.log(school.teachers);