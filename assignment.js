//feetToMile
function feetToMile(feet){
    if(feet < 0){
        return 'Please enter positive value';
    }
    else {
        var mile = feet / 5280;
        var result = mile.toFixed(5);
        return result;
    }
}

//woodCalculator
//brickCalculator
//tinyFriends