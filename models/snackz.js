const mongoose = require('mongoose');

//  snackz schema
const SnackzSchema = new mongoose.Schema({
  snacker: { type: String },
  snack: { type: String },
  continent: { type: String },
  description: { type: String, max: 300 },
  img: { type: String }
})

// snackz model
const Snack = mongoose.model('snack', SnackzSchema);

module.exports = Snack;

// const snackTest = [
//   {
//         snacker: 'Chase',
//         snack: 'pastries',
//         continent: 'South America',
//         description: 'dessert',
//         img: 'public/images/cooking-cuisine-delicious-908180.jpg'
//       }, {
//         snacker: 'Ian',
//         snack: 'sushi',
//         continent: 'Asia',
//         description: 'fresh sushi',
//         img: 'public/images/asia-carrot-chopsticks-357756.jpg'
//       }, {
//         snacker: 'Shawn',
//         snack: 'avocado and stuff',
//         continent: 'North America',
//         description: 'healthy stuff',
//         img: 'public/images/avocado-basil-close-up-1143754.jpg'
//       }, {
//         snacker: 'Kylie',
//         snack: 'chocolate cake',
//         continent: 'Australia',
//         description: 'yummy cake',
//         img: 'public/images/adult-brawny-chocolate-cake-936000.jpg'
//       }, {
//         snacker: 'Gail',
//         snack: 'bananas',
//         continent: 'South America',
//         description: 'crunchy sweetness',
//         img: 'public/images/banana-bowl-chips-77029.jpg'
//       }, {
//         snacker: 'Rob',
//         snack: 'biscuits and a beverage',
//         continent: 'Europe',
//         description: 'afternoon snack',
//         img: 'public/images/beverages-biscuits-book-213074.jpg'
//       }, {
//         snacker: 'Adrienne',
//         snack: 'i do not know',
//         continent: 'Antarctica',
//         description: 'after the jetlag I cannot remember',
//         img: 'public/images/appetizers-catering-cheese-6589.jpg'
//       }, {
//         snacker: 'Tiffany',
//         snack: 'cheese and stuff',
//         continent: 'Europe',
//         description: 'healthy yumminess',
//         img: 'public/images/cheese-cuisine-diet-1239312.jpg'
//       }
// ]

// module.exports = snackTest;
