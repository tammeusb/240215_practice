const removeFromArray = function(array, ...elementsToRemove) {

    elementsToRemove = elementsToRemove.sort()

    for (const removeElement of elementsToRemove) {
        for (const arrayElement of array) {
            if (removeElement === arrayElement) {
                //console.log(array.indexOf(arrayElement));
                //console.log(removeElement, arrayElement);
                array = array.toSpliced(array.indexOf(arrayElement), 1);
                //console.log(array);
            }
        }
    }

    return array

}