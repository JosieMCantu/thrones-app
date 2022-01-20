/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named howMuchPencil that takes in a string, as written on the side of a pencil.

As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter.

Your function should use slice within a loop and return an array of each successive string result from losing letters to the sharpener, until nothing is left.

For example, if the input is 'Welcome', the output will be:
['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', ''].
------------------------------------------------------------------------------------------------ */

export const howMuchPencil = (str) => {
    let result = [];
    let newStr = str;

    for (let i = 0; i < str.length + 1; i++) {
        result.push(newStr);
        newStr = newStr.slice(1);
    }
    return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function name wordsToCharList that, given a string as input, returns a new array where every element is a character of the input string.

For example, wordsToCharList('gregor') returns ['g','r','e','g','o','r'].
------------------------------------------------------------------------------------------------ */

export const wordsToCharList = (str) => {

    let splitStr = str.split('');
    
    return splitStr;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.

Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.

Use slice for this function, maybe more than once. The .indexOf() method may also be helpful.

Do not use split for this function.
------------------------------------------------------------------------------------------------ */

export const listFoods = (recipe) => {
    let result = [];
    let newRecipe = recipe.ingredients;

    for (let i = 0; i < newRecipe.length; i++) {
        if(i === 0){
            let item1 = newRecipe[0].substring(15,23);
        result.push(item1);
        } else if (i === 1) {
            let item2 = newRecipe[1].substring(9,13);
        result.push(item2);
        } else if (i === 2) {
            let item3 = newRecipe[2].substring(9,20);
        result.push(item3);
        } else if (i === 3) {
            let item4 = newRecipe[3].substring(9,14);
        result.push(item4);
        } else if (i === 4) {
            let item5 = newRecipe[4].substring(10,26);
            result.push(item5);
        } else if (i === 5) {
            let item6 = newRecipe[5].substring(8,20);
            result.push(item6);
        } else if (i === 6) {
            let item7 = newRecipe[6].substring(8,19);
        result.push(item7);
        } else if (i === 7) {
            let item8 = newRecipe[7].substring(8,21);
        result.push(item8);
        } else if (i === 8) {
            let item9 = newRecipe[8].substring(8,16);
        result.push(item9);
        } else if (i === 9) {
            let item10 = newRecipe[9].substring(10,23);
        result.push(item10);
        } else if (i === 10) {
            let item11 = newRecipe[10].substring(10,21);
        result.push(item11);
        } 
    }

    return result;
};

////// newRecipe.forEach(item => {
//////     const newItem = item.slice(item.indexOf(' ', 3));
//////    const item2 = newItem.slice(1);
//////     result.push(item2);
////// })

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named splitFoods that uses split to produce the same output as Challenge 3.

You may also use other string or array methods.
------------------------------------------------------------------------------------------------ */

export const splitFoods = (recipe) => {
    let result = [];
    let newRecipe = recipe.ingredients;

    newRecipe.forEach(item => {
        const newItem = item.split(' ');
        const thisItem = newItem.slice(2)
        const anotherItem = thisItem.join(' ')
        result.push(anotherItem);
    })
    return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Use the same recipe from Challenge 3, above.

Write a function named stepAction that takes in the recipe and extracts the action verbs from the steps. Fortunate for you, the action verbs are the first word of each action.

Return a new array containing just the verbs. For example, ['Mix until evenly distributed'] returns ['Mix'].
------------------------------------------------------------------------------------------------ */

export const stepActions = (recipe) => {
    let result = [];
    let newRecipe = recipe.steps;
    newRecipe.forEach(item => {
        const newItem = item.split(' ');
        const thisItem = newItem.slice(0,1);
        const anotherItem = thisItem.join(' ')
        result.push(anotherItem);
    })


    return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named removeEvenValues that, given an array of integers as input, deletes all even values from the array, leaving no 'gaps' behind.

The array should be modified in-place.

For example:
  const integers = [1, 2, 3, 4, 5, 6];
  removeEvenValues(integers);
  console.log(integers) will print [1, 3, 5]
------------------------------------------------------------------------------------------------ */

export const removeEvenValues = (arr) => {
    arr.forEach(item => {
        if (item % 2 === 0) {
            arr.splice(arr.indexOf(item),String(item).length);
        }
    })
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7

Write a function named removeLastCharacters that takes in a string and a number. The numberOfCharacters argument determines how many characters will be removed from the end of the string. Return the resulting string.

If the numberOfCharacters argument is greater than the length of the input string, the function should return an empty string.

If the numberOfCharacters argument input is a negative number, the function should return the input string without any changes.

For example:
removeLastCharacters('Gregor', 2) returns 'Greg'
removeLastCharacters('Gregor', -2) returns 'Gregor'
removeLastCharacters('Gregor', 9) returns ''
------------------------------------------------------------------------------------------------ */

export const removeLastCharacters = (str, numberOfCharacters) => {
    
    if(numberOfCharacters < 0) { return str } 
    if(numberOfCharacters > str.length) { return '' }

        const newString = str.split('');
        const aString = newString.slice(0, -numberOfCharacters);
        const thisString = aString.join('');
        return thisString
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named totalSumCSV that, given a string of comma-separated values (CSV) as input. (e.g. "1,2,3"), returns the total sum of the numeric values (e.g. 6).
------------------------------------------------------------------------------------------------ */

export const totalSumCSV = (str) => {
    let total = 0;
    const stringArray = str.split(',');

    let numArray = stringArray.map(Number);

    for (let i = 0; i < numArray.length; i++) {
        total += numArray[i];
    }

    return total;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named removeVowels that takes in a string and returns a new string where all the vowels of the original string have been removed.

For example, removeVowels('gregor') returns 'grgr'.
------------------------------------------------------------------------------------------------ */

export const removeVowels = (str) => {
    const thisString = str.replace(/[aeiou]/gi, '');

    return thisString;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named extractVowels that takes in a string and returns an array where the first element is the original string with all the vowels removed, and the second element is a string of all the vowels that were removed, in alphabetical order.

For example, extractVowels('gregor') returns ['grgr', 'eo'].

Similarly, extractVowels('The quick brown fox') returns ['Th qck brwn fx', 'eioou']
------------------------------------------------------------------------------------------------ */

export const extractVowels = (str) => {
    
    const thisStr = str.replace(/[aeiou]/gi, '');
    
    const newStr = str.match(/[aeiou]/gi, '');
    const vowels = newStr.sort().join('');



    return [thisStr, vowels];

};
