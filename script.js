const removeFromArray = function(array, ...removeElement) {
    //loop to check if array still has any values from removeElement?
    let i = 1;
    removeElement = removeElement.sort()

    for (let a = 0; a < 10; a++) {
        for (const element of removeElement) {
            for (const arrayElement of array) {
                if (element == arrayElement) {
                    console.log(true);
                    array = array.toSpliced(arrayElement - i, 1);
                    console.log(array);
                   //loop to check if any same left???
                }
            }
        }
    }
    return array
}