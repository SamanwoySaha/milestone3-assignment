function feetToMile(feet) {
    if(feet < 0 || typeof(feet) != 'number'){
        return 'Please enter positive number';
    }
    else {
        var mile = feet / 5280;
        var result = mile.toFixed(5);
        return result;
    }
}

function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0 || typeof(chair) != 'number' || typeof(table) != 'number' || typeof(bed) != 'number'){
        return 'Please enter positive number for chair, table and bed';
    }
    else {
        var totalWood = (chair * 1) + (table * 3) + (bed * 5);
        return totalWood;
    }
}

function brickCalculator (floorNumber) {
    var brickPerFeet = 1000;
    var brickAmount = 0;
    if (floorNumber < 0 || typeof(floorNumber) != 'number'){
        return 'Please enter positive number';
    }
    else if (floorNumber > 0 && floorNumber <= 10){
        brickAmount = floorNumber * 15 * brickPerFeet;
        return brickAmount;
    }
    else if (floorNumber >= 11 && floorNumber <= 20){
        brickAmount = (10 * 15 * brickPerFeet) + ((floorNumber - 10) * 12 * brickPerFeet);
        return brickAmount;
    }
    else if (floorNumber >= 21){
        brickAmount = (10 * 15 * brickPerFeet) + (10 * 12 * brickPerFeet) + ((floorNumber - 20) * 10 * brickPerFeet);
        return brickAmount;
    }
}

function tinyFriend(friends) {
    var nameLength = 999999999999999;         //999999999999999 is used for not getting 0 nameLength;
    var tinyMember = '';
    for (var i = 0; i < friends.length; i++){
        if(friends[i] != '' && friends[i] != ' ' && typeof(friends[i]) == 'string') { 
            //empty string and string with only space character is not make in count here
            if(nameLength > friends[i].length) {
                nameLength = friends[i].length;
                tinyMember = friends[i];
            }
        }
    }
    return tinyMember;
}