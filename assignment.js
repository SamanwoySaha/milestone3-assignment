//feetToMile
function feetToMile(feet) {
    if(feet < 0 || typeof(feet) == 'string'){
        return 'Please enter the number of positive value';
    }
    else {
        var mile = feet / 5280;
        var result = mile.toFixed(5);
        return result;
    }
}

//woodCalculator
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0 || typeof(chair) == 'string' || typeof(table) == 'string' || typeof(bed) == 'string'){
        return 'Please enter the number of positive value';
    }
    else {
        var totalWood = (chair * 1) + (table * 3) + (bed * 5);
        return totalWood;
    }
}

//brickCalculator

//tinyFriends