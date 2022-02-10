 var age, days, months, fortnight, weeks = parseFloat();
 
    age = prompt("Enter your age in years");
    days = age * 365.25;
    months = age*12;
    weeks = days / 7;
    fortnight = days/14;
   parseFloat(alert("Your age is: " + age + " years, or " + months.toFixed(2) + " months, or " + fortnight.toFixed(2) + " fortnights, or " + weeks.toFixed(2) + " weeks, or " + days.toFixed(2) + " days." ));
    
    
  