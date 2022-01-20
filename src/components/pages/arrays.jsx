//return an array with a country and the most popular date in that country

const users = [
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

const groupByDate = users.reduce((acc, item) => {
    acc[item.date] = acc[item.date] + 1 || 1;
    return acc;
}, {});

//   console.log('date', groupByDate);

const groupedByCountry = users.reduce((acc, val) => {
    acc[val.country] ? acc[val.country] = [...acc[val.country], val] : acc[val.country] = [val];
    return acc;
}, {});

// console.log('country', groupedByCountry);

// Returns the highest number
const groupedByDate = Object.keys(groupedByCountry).map((country) => {
      return groupedByCountry[country].reduce((acc, item) => acc.date > item.date ? acc : item);
})

// console.log('sortedByDate', groupedByDate);

const games = [
    { id: 1, name: 'Star Wars', company: 'Fantasy', votes: 3},
    { id: 2, name: 'Game of Thrones', company: 'Fantassy Flight', votes: 4 },
    { id: 3, name: 'Merchants', company: 'Z-Man Gaming', votes: 5 },
    { id: 4, name: 'Eclipse', company: 'Lautapelit', votes: 6 },
    { id: 5, name: 'Dracula', company: 'Fantasy Flight', votes: 2 }
];
// finds the highest votes
const maxGame = games.reduce((max, game) => max.votes > game.votes ? max : game);

// console.log('maxGame', maxGame);

const arrays = [
    ["$6"],
    ["$12"],
    ["$25"],
    ["$25"],
    ["$18"],
    ["$22"],
    ["$10"]
  ];

const merged = [].concat.apply([], arrays);
const array3 = [...games, ...arrays];

console.log('merged arrays', merged);
console.log('array3 merged', array3);