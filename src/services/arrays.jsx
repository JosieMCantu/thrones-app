export const colors = [
  {
      'id': 1,
      'color': 'Red',
      'hex': '#CC0000'
  },
  {
      'id': 2,
      'color': 'Blue',
      'hex': '#008693'
  },
  {
      'id': 3,
      'color': 'Green',
      'hex': '#BABC48'
  },
  {
      'id': 4,
      'color': 'Yellow',
      'hex': '#FFA700'
  },
  {
      'id': 5,
      'color': 'Pink',
      'hex': '#FFCCDD'
  },
  {
      'id': 6,
      'color': 'Orange',
      'hex': '#FFA500'
  },
  {
      'id': 7,
      'color': 'Seafoam',
      'hex': '#A3E4D7'
  },
];

export const menus = [
    {
      id: 1,
      title: 'Menu one',
      content: 'some content for menu one'
    },
    {
      id: 2,
      title: 'Menu two',
      content: 'some content for menu two'
    },
    {
      id: 3,
      title: 'Menu three',
      content: 'some content for menu three'
    },
];

//return an array with a country and the most popular date in that country

export const users = [
    { id: 11, date: '01/13/99', country: 'editor' },
    { id: 85, date: '03/17/01', country: 'editor' },
    { id: 85, date: '', country: 'editor' },

    { id: 27, date: '11/25/97', country: 'actor' },
    { id: 7, date: '11/25/97', country: 'actor' },
    { id: 1, date: '03/17/01', country: 'actor' },

    { id: 19, date: '11/25/97', country: 'admin' },
    { id: 19, date: '01/25/01', country: 'admin' },
    { id: 47, date: '', country: 'admin' },

    { id: 11, date: '06/16/20', country: 'france' },
    { id: 11, date: '06/16/20', country: 'france' },
    { id: 11, date: '05/16/76', country: 'france' },

    { id: 47, date: '04/05/88', country: 'usa' },
    { id: 47, date: '04/05/88', country: 'usa' },
    { id: 47, date: '12/05/88', country: 'usa' },

    { id: 85, date: '03/17/01', country: 'mexico' },
    { id: 85, date: '03/17/01', country: 'mexico' },
    { id: 19, date: '06/16/20', country: 'mexico' },

    { id: 27, date: '04/05/74', country: 'england' },
    { id: 27, date: '04/05/88', country: 'england' },
    { id: 27, date: '04/05/88', country: 'england' },
];

//replaces empty string...
const groupByDateHighs = users.map((item, idx, array) => {
  if (item.date === '') {
    item.date = 'No date';
    array[idx] = item
  }
  return item
})
//returns how offten each date appears
const groupByDate = groupByDateHighs.reduce((acc, item) => {
  acc[item.date] = acc[item.date] + 1 || 1;
  return acc;
}, {});


//returns organized by country
const groupedByCountry = users.reduce((acc, val) => {
  acc[val.country] ? acc[val.country] = [...acc[val.country], val] : acc[val.country] = [val];
  return acc;
}, {});

//console.log(groupByDate)

export const games = [
  { id: 1, name: 'Star Wars', company: 'Fantasy', votes: 3},
  { id: 2, name: 'Game of Thrones', company: 'Fantassy Flight', votes: 4 },
  { id: 3, name: 'Merchants', company: 'Z-Man Gaming', votes: 5 },
  { id: 4, name: 'Eclipse', company: 'Lautapelit', votes: 6 },
  { id: 5, name: 'Dracula', company: 'Fantasy Flight', votes: 2 }
];

export const moneys = [
  ["$6"],
  ["$12"],
  ["$25"],
  ["$25"],
  ["$18"],
  ["$22"],
  ["$10"]
];


// Returns the highest number
const groupedByDateHighs = Object.keys(groupedByCountry).map((country) => {
  return groupedByCountry[country].reduce((acc, item) => acc.date > item.date ? acc : item);
})

// finds the highest votes
const maxGame = games.reduce((max, game) => max.votes > game.votes ? max : game);

const merged = [].concat.apply([], moneys);
const array3 = [...games, ...moneys];
const array4 = games.concat(moneys);

//console.log('merged arrays', merged);
//console.log('array3 merged', array3);
//console.log('array4 merged', array4);



// Please write a function that accepts an object. 
// We'll just be using this object as a container for key value pairs.
// The function should return a new object with the same data, but with the keys and values swapped.
// Since the returned object might have multiple values for the same key, it should put the values in an array.

// sample input: {"key1": "valueA", "key2": "valueA", "key3": "valueB"}
// sample output: {"valueA": ["key1", "key2"], "valueB": ["key3"]}

const input = {
  "key1": "valueA", 
  "key2": "valueA", 
  "key3": "valueB",
};

const newFunction = (obj) => {
  const swapped = Object.entries(obj).reduce((acc, val) => {
    acc[val[1]] 
    ? acc[val[1]] = [...acc[val[1]], val[0]]
    : acc[val[1]] = [val[0]];
    return acc
  }, {})
  return swapped
}
// console.log(newFunction(input))

const myfunction = (obj) => {
  const swapped = Object.entries(obj).map(([key, val]) => {
    return [val, key]
  });
  //returns an array of arrays 
  const mixed = swapped.reduce((acc, val) => {
    //make the acc equal the first item of the first array, hence val[0]
    acc[val[0]] 
    ? acc[val[0]] = [...acc[val[0]], val[1]] 
    //if the first items match spread the acc and add the arrays second item, hence val[1]
    : acc[val[0]] = [val[1]]
    //if they do not match make a new key value pair
    return acc;
    //return an object
  }, {})
  return mixed;
}
// console.log('my function', myfunction(input));

//Please write a function that 
// (http|https)://[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?

const thisFunction = (obj) => {
  
}
//console.log(thisFunction(input))

// Please write a function that accepts a shopping list as input. The shopping list will be an array of strings containing the aisle number and name of the item. Each item is currently listed separately, but it would be more useful to have the items grouped by aisle. 

//Your function should return an object with aisle numbers as property names and arrays of item names as values. 

//Hint: you may find String's split() method useful. The output does not need to be in any particular order, and it's fine to leave the aisle numbers as strings. Here's some sample input and output.

const newInput = ["18 apples", "11 cinnamon", "18 figs", "11 flour", "7 marshmallows"];

//output: {"11": ["flour", "cinnamon"], "18": ["apples", "figs"], "7": ["marshmallows"]}

const myFunction = (array) => {
  const split = array.map((item) => {
    return item.split(' ')
  })
  return split.reduce((acc, val) => {
    acc[val[0]]
    ? acc[val[0]] = [acc[val[0]], val[1]]
    : acc[val[0]] = val[1]
    return acc                              
    }, {})
}

//console.log(myFunction(newInput));


