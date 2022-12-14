//Random Generator

/**
 *   We are going to build a random generator that allows to choose, in a random way, a certain amount of numbers between a minimum and a maximum. 
 */

var comprobateArray = (arr , number) => { 
    for (var i = 0 ; i < arr.length ; i++) { 
        if (arr[i] === number) return true; // 
    }
    return false;
} 




var randomPick = (n, min, max) => {
    arr = [];
    range = max - min + 1;
    while (arr.length < n) {
            var randomNumber = Math.floor(Math.random() * range) + min;
            var found = comprobateArray(arr , randomNumber); // TRUE OR FALSE
            if (found === false) {
                arr.push(randomNumber); 
            } 
    }
    return arr;
}

console.log(randomPick(5, 50, 56));

