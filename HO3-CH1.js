 
 
 var floatMiles, floatGallons, floatMpg = parseFloat;
 
    floatMiles = parseFloat(prompt("Enter miles driven"));
    
    floatGallons = parseFloat(prompt("Enter gallons of gas used"));
    floatMpg = floatMiles/floatGallons;
    parseFloat(alert("Miles per gallon = " + floatMpg.toFixed(2)));