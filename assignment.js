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
function brickCalculator (floorNumber) {
    var brickPerfeet = 1000;
    var brickAmount = 0;
    if (floorNumber < 0 || typeof(floorNumber) != 'number'){
        return 'Please enter the number of positive value';
    }
    else if (floorNumber > 0 && floorNumber <= 10){
        brickAmount = floorNumber * 15 * brickPerfeet;
        return brickAmount;
    }
    else if (floorNumber >= 11 && floorNumber <= 20){
        brickAmount = (10 * 15 * brickPerfeet) + ((floorNumber - 10) * 12 * brickPerfeet);
        return brickAmount;
    }
    else if (floorNumber >= 21){
        brickAmount = (10 * 15 * brickPerfeet) + (10 * 12 * brickPerfeet) + ((floorNumber - 20) * 10 * brickPerfeet);
        return brickAmount;
    }
}

//tinyFriend
function tinyFriend(friends) {
    var nameLength = friends[0].length;
    var tinyMember = friends[0];
    for (var i = 0; i < friends.length; i++){
        if(friends[i] != '' && typeof(friends[i]) == 'string') {
            if(nameLength > friends[i].length) {
                nameLength = friends[i].length;
                tinyMember = friends[i];
            }
        }
    }
    return tinyMember;
}