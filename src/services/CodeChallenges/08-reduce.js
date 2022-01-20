/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

export const countNumberOfElements = (arr) => {
    const count = arr.reduce((acc, val, idx) => {
      acc = 1 + idx;
      return acc;
    }, 0);
    return count;
  };
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 2
  
  Write a function named eyeColorTally that, given the Star Wars data, uses reduce to return an 
  object with a key for each eye color and whose value is the number of characters having that 
  eye color:
  
  { blue: 1, yellow: 2, red: 1, brown: 1 }
  ------------------------------------------------------------------------------------------------ */
  
  export const eyeColorTally = (arr) => {
    const reducer = (acc, val) => {
      if (acc[val.eye_color]) {
        acc[val.eye_color] = acc[val.eye_color] + 1;
      } else {
        acc[val.eye_color] = 1;
      }
      return acc;
    }
    return arr.reduce(reducer, {});
  };
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 3
  
  Write a function named eyeColorNames that, given the Star Wars data, uses reduce to return an 
  object with a key for each eye color and whose value an array of character names having that 
  eye color:
  
  { blue: 1, yellow: 2, red: 1, brown: 1 }
  ------------------------------------------------------------------------------------------------ */
  
  export const eyeColorNames = (arr) => {
  
    return arr.reduce((acc, val) => {
  
      acc[val.eye_color] ? acc[val.eye_color].push(val.name) : acc[val.eye_color] = [val.name];
  
      return acc;
    }, {})
  };
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 4
  
  Write a function named countNumberOfChildren that, given the array of characters, uses reduce to return the total number of children in the data set.
  ------------------------------------------------------------------------------------------------ */
  
  
  export const countNumberOfChildren = (arr) => {
    const kids = arr.reduce((acc, val) => {
      if (val.children) {
        acc = acc + val.children.length;
      }
      return acc;
    }, 0);
    return kids;
  };
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 5
  
  Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.
  
  Hint: The accumulator should begin as { count: 0, sum: 0 }
  ------------------------------------------------------------------------------------------------ */
  
  export const calculateAverage = (arr) => {
  
    const average = arr.reduce((acc, val) => (acc + val)) / arr.length;
  
    return average;
  };
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 6
  
  Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.
  
  You are welcome to use the provided isPrime function.
  ------------------------------------------------------------------------------------------------ */
  
  const isPrime = (value) => {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return value > 1;
  };
  
  export const countPrimeNumbers = (arr) => {
    const prime = arr.reduce((acc, val, idx) => {
      // acc is the number of prime numbers
      // check the val to see if it is a prime number
      // if it is a prime number acc should increase
      if (isPrime(val)) {
        acc++;
      }
      return acc;
    }, 0)
  
    return prime;
  };
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 7 - Stretch Goal
  
  Write a function named effortStats that, given the snorlaxData uses reduce to return an object with the 
  minimum and maximum effort level in the format:
  
  Hint: The accumulator should begin as { min: 0, max: 0 }
  
  ------------------------------------------------------------------------------------------------ */
  
  export const effortStats = (arr) => {
  
    const average = arr.reduce((acc, cur) => {
  
      if(!acc.min || cur.effort < acc.min) acc.min = cur.effort;
      if(!acc.max || cur.effort > acc.max) acc.max = cur.effort;
  
      return acc;
    }, { min: 0, max: 0 });
    return average;
  };
  // min = prev < cur.effort ? prev : cur.effort;
      // max = prev > cur.effort ? prev : cur.effort;
  // acc[min] = (acc[min] === undefined || val.effort < acc[min]) ? val.effort : acc[min]
      // acc[max] = (acc[max] === undefined || val.effort > acc[max]) ? val.effort : acc[max]
  // if (!acc.max < val.effort) { return val.effort }
      // if(acc.min < val.effort) {return val.effort}
      // if (val.effort < (val.effort)) { return val.effort }
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 8 - Stretch Goal
  
  Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:
  
  1) Uses filter to return an array of the characters that contain the letter 'a' in their name
  
  2) Then, uses reduce to return an array of all the children's names in the filtered array
  ------------------------------------------------------------------------------------------------ */
  
  export const extractChildren = (arr) => {
    let thisArr = [];
    const filtered = arr.filter((val) => {
      const regex = /a/gi;
      const matched = val.name.match(regex);
      if ( matched ) {
        thisArr.push(val);
      } 
    });
    const kids = thisArr.reduce((acc, val) => {
       
      if (val.children){
        acc.push(val.children);
      }
      return acc;
    }, []);
    return kids.flat();
  };
  