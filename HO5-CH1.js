//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff score for pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));
if (floatHwPts > 30 || floatHwPts < 0) {
    floatHwPts = parseFloat(prompt("Your value is out of the specified range. Please enter final HW pts (0-30):"));
}
floatMidPts = parseFloat(prompt("Please enter final Midterm Exam pts (0-35):"));
if (floatMidPts > 35 || floatMidPts < 0) {
    floatMidPts = parseFloat(prompt("Your value is out of the specified range. Please enter final Midterm Exam pts (0-35):"));
}
floatFinPts = parseFloat(prompt("Please enter final Final Exam pts (0-35):"));
if (floatFinPts > 35 || floatFinPts < 0) {
    floatFinPts = parseFloat(prompt("Your value is out of the specified range. Please enter final Final Exam pts (0-35):"));
}
floatTotalPts = parseFloat(floatFinPts + floatHwPts + floatMidPts);
if (floatTotalPts > 100 || floatTotalPts< 0) {
    alert("Your grades exceed the maximum or are below the minimum threshold. Please restart the program and give correct inputs!");
    
}
intGradeOption = parseInt(prompt("Please enter your grading option: 2 for A-F scale, 1 for Pass/Fail"));

if (intGradeOption===1)
{
    if(floatTotalPts >= 80)
        stringFinalGrade = "Pass";
        else
        {
            stringFinalGrade = "Fail";
        }
}
else if (intGradeOption===2)
{
    if (floatTotalPts >= 90) {
        stringFinalGrade = "A";
    }
    else if (floatTotalPts >= 80) {
        stringFinalGrade = "B";
        
    }
    else if (floatTotalPts >= 70) {
        stringFinalGrade = "C";
    }
    else if (floatTotalPts >= 60) {
        stringFinalGrade = "D";
    }
    else {
        stringFinalGrade = "F";
    }
}




alert("Your final grade is: " +stringFinalGrade);