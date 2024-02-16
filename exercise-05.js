const sumAll = function(numOne, numTwo) {

    let sum = numOne;

    for (numOne; numTwo > numOne; numOne++) {
        sum = sum + (numOne + 1);
    }

    return sum

};