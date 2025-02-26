// Data Structuren
const courses = []; // Array voor cursussen
const students = []; // Array voor studenten

// DOM Elements
const courseTitleInput = document.getElementById('courseTitle');
const courseDescInput = document.getElementById('courseDesc');
const addCourseButton = document.getElementById('addCourse');
const courseListDiv = document.getElementById('courseList');

const studentNameInput = document.getElementById('studentName');
const coursePicker = document.getElementById('coursePicker');
const enrollStudentButton = document.getElementById('enrollStudent');
const studentListDiv = document.getElementById('studentList');

const studentPicker = document.getElementById('studentPicker');
const modulePicker = document.getElementById('modulePicker');
const moduleGradeInput = document.getElementById('moduleGrade');
const addGradeButton = document.getElementById('addGrade');

const reportStudent = document.getElementById('reportStudent');
const generateReportButton = document.getElementById('generateReport');
const reportOutputDiv = document.getElementById('reportOutput');

// Event Listeners
addCourseButton.addEventListener('click', addCourse);
enrollStudentButton.addEventListener('click', enrollStudent);
addGradeButton.addEventListener('click', assignGrade);
generateReportButton.addEventListener('click', generateReport);

// Functies
function addCourse() {
    const title = courseTitleInput.value.trim();
    const description = courseDescInput.value.trim();

    if (title && description) {
        const newCourse = {
            title,
            description,
            modules: [] // Modules voor deze cursus
        };

        courses.push(newCourse);
        updateCourseList();
        updateCoursePicker();
        courseTitleInput.value = '';
        courseDescInput.value = '';
    }
}

function updateCourseList() {
    courseListDiv.innerHTML = '';
    courses.forEach((course, index) => {
        const courseDiv = document.createElement('div');
        courseDiv.innerHTML = `<strong>${course.title}</strong> - ${course.description}`;
        courseListDiv.appendChild(courseDiv);
    });
}

function updateCoursePicker() {
    coursePicker.innerHTML = '';
    courses.forEach((course, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.innerText = course.title;
        coursePicker.appendChild(option);
    });
}

function enrollStudent() {
    const name = studentNameInput.value.trim();
    const courseIndex = coursePicker.value;

    if (name && courseIndex !== '') {
        const newStudent = {
            name,
            courses: [courses[courseIndex]], // Ingeschreven cursus
            grades: {} // Scores per module
        };

        students.push(newStudent);
        updateStudentList();
        updateStudentPicker();
        studentNameInput.value = '';
    }
}

function updateStudentList() {
    studentListDiv.innerHTML = '';
    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.innerHTML = `${student.name} - Cursussen: ${student.courses.map(course => course.title).join(', ')}`;
        studentListDiv.appendChild(studentDiv);
    });
}

function updateStudentPicker() {
    studentPicker.innerHTML = '';
    students.forEach((student, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.innerText = student.name;
        studentPicker.appendChild(option);
    });
}

function assignGrade() {
    const studentIndex = studentPicker.value;
    const courseIndex = coursePicker.value;
    const grade = moduleGradeInput.value.trim();

    if (studentIndex !== '' && courseIndex !== '' && grade !== '') {
        const student = students[studentIndex];
        const course = student.courses[courseIndex];
        const module = `Module ${course.title}`;

        if (!student.grades[module]) {
            student.grades[module] = [];
        }
        student.grades[module].push(Number(grade));
        moduleGradeInput.value = '';
    }
}

function generateReport() {
    const studentIndex = reportStudent.value;

    if (studentIndex !== '') {
        const student = students[studentIndex];
        let report = `<h4>Rapport voor ${student.name}</h4>`;
        for (let module in student.grades) {
            report += `<strong>${module}:</strong> ${student.grades[module].join(', ')}<br>`;
        }
        reportOutputDiv.innerHTML = report;
    }
}
