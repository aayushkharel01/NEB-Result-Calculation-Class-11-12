function calculateGrade(gradeTh, creditTh, gradePr, creditPr) {
    return ((gradeTh * creditTh) + (gradePr * creditPr));
}

function result() {
    var result1 = calculateGrade(getGradeValue(document.getElementById('Physics').value),
        3.75, getGradeValue(document.getElementById('PhysicsP').value), 1.25);
    var result2 = calculateGrade(getGradeValue(document.getElementById('Chemistry').value),
        3.75, getGradeValue(document.getElementById('ChemistryP').value), 1.25);
    var result3 = calculateGrade(getGradeValue(document.getElementById('Maths').value),
        3.75, getGradeValue(document.getElementById('MathsP').value), 1.25);
    var result4 = calculateGrade(getGradeValue(document.getElementById('English').value),
        3, getGradeValue(document.getElementById('EnglishP').value), 1);
    var result5 = calculateGrade(getGradeValue(document.getElementById('Nepali').value),
        2.25, getGradeValue(document.getElementById('NepaliP').value), 0.75);
    var result6 = calculateGrade(getGradeValue(document.getElementById('Computer').value),
        2.25, getGradeValue(document.getElementById('ComputerP').value), 2.25);
    var result7 = calculateGrade(getGradeValue(document.getElementById('Biology').value),
        3.75, getGradeValue(document.getElementById('BiologyP').value), 1.25);

    var totalCreditHours = 3.75 + 1.25 + 3.75 + 1.25 + 3.0 + 1.0 + 2.25 + 0.75 + 2.25 + 2.25 + 3.75 + 1.25;
    var totalResult = (result1 + result2 + result3 + result4 + result5 + result6 + result7) / totalCreditHours;
    if(result7!=0)
    {
        totalResult = totalResult-0.075;
        document.getElementById("output").innerHTML = "Your result is " + totalResult.toFixed(2);
    }
    else{
        document.getElementById("output").innerHTML = "Your result is " + totalResult.toFixed(2);
    }
    
}

function getGradeValue(grade) {
    switch (grade) {
        case 'A+':
            return 4;
        case 'A':
            return 3.6;
        case 'B+':
            return 3.2;
        case 'B':
            return 2.8;
        case 'C+':
            return 2.4;
        case 'C':
            return 2;
        case 'D+':
            return 1.6;
        case 'D':
            return 1.2;
        case 'NO':
            return 0;
        default:
            return 0;
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}