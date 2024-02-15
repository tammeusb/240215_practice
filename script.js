const log = document.querySelector(".log");

const removeFromArray = function(array, ...removeElement) {

    let i = 0;

    removeElement = removeElement.sort();

    for (const element of removeElement) {
        array.splice(element - 1 - i, 1);
        i++;
    }

    return array

}

removeFromArray([1,2,2,3,4], 2, 3, 4);