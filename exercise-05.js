const sumAll = function(unsortedOne, unsortedTwo) {

    const args = Array.from(arguments);
    args.sort();

    let numOne = args[0];
    let numTwo = args[1];

    let sum = numOne;

    for (numOne; numTwo > numOne; numOne++) {
        sum = sum + (numOne + 1);
    }

    return sum

};