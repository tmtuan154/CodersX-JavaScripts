var students = [
    { name: 'Tuan', age: 21 },
    { name: 'Thanh Ngan', age: 22 },
    { name: 'Kim Ngan', age: 23 }
]

function loadData() {
    render(students)
}

function render(students) {
    const content = students.map(function (student) {
        return '<tr><td>' + student.name + '</td><td>' + student.age + '</td></tr>'
    })
    var studentContenter = document.getElementById('student-container');
    studentContenter.innerHTML = content.join('')
}

function onAgeFilterChange() {
    const ageFilter = document.getElementById('age-filter');
    if (ageFilter.value === 'All'){
        return render(students)
    }
    const age = parseInt(ageFilter.value);
    console.log('Age choose: ' , age);
    const studentsFilter = students.filter(function (student) {
        return student.age === age;
    })
    render(studentsFilter)
}