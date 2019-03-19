const express = require('express');
const router = express.Router();
const Snack = require('../models/snackz.js')
// ___________________
// Routes
// ___________________

// ___________________
// SEED route
// router.get('/seed', (req, res)=>{
//   Snack.create([
//     {
//       snacker: 'Chase',
//       snack: 'pastries',
//       continent: 'South America',
//       description: 'dessert',
//       img: '../images/cooking-cuisine-delicious-908180.jpg'
//     }, {
//       snacker: 'Ian',
//       snack: 'sushi',
//       continent: 'Asia',
//       description: 'fresh sushi',
//       img: '../images/asia-carrot-chopsticks-357756.jpg'
//     }, {
//       snacker: 'Shawn',
//       snack: 'avocado and stuff',
//       continent: 'North America',
//       description: 'healthy stuff',
//       img: '../images/avocado-basil-close-up-1143754.jpg'
//     }, {
//       snacker: 'Kylie',
//       snack: 'chocolate cake',
//       continent: 'Australia',
//       description: 'yummy cake',
//       img: '../images/adult-brawny-chocolate-cake-936000.jpg'
//     }, {
//       snacker: 'Gail',
//       snack: 'bananas',
//       continent: 'South America',
//       description: 'crunchy sweetness',
//       img: '../images/banana-bowl-chips-77029.jpg'
//     }, {
//       snacker: 'Rob',
//       snack: 'biscuits and a beverage',
//       continent: 'Europe',
//       description: 'afternoon snack',
//       img: '../images/beverages-biscuits-book-213074.jpg'
//     }, {
//       snacker: 'Adrienne',
//       snack: 'i do not know',
//       continent: 'Antarctica',
//       description: 'after the jetlag I cannot remember',
//       img: '../images/appetizers-catering-cheese-6589.jpg'
//     }, {
//       snacker: 'Tiffany',
//       snack: 'cheese and stuff',
//       continent: 'Europe',
//       description: 'healthy yumminess',
//       img: '../images/cheese-cuisine-diet-1239312.jpg'
//     }
//   ],
//   (err, data) => {
//     res.redirect('/snackz');
//   })
// });
// ___________________
// delete route
router.delete('/:id', (req, res)=>{
  Snack.findByIdAndRemove(req.params.id, (err, data)=>{
      res.redirect('/snackz');
  });
});
// ___________________
// edit route
router.get('/:id/edit', (req, res)=>{
    Snack.findById(req.params.id, (err, foundSnack)=>{
        res.render(
    		'edit.ejs',
    		{
    			snacks: foundSnack
    		}
    	);
    });
});
// ___________________
// put route
router.put('/:id', (req, res) => {
  Snack.findByIdAndUpdate(req.params.id, req.body, { new:true }, (err, updatedSnack) => {
    res.redirect('/snackz');
  });
});
// ___________________
// index route
router.get('/', (req, res) => {
  Snack.find({}, (error, allSnackz) => {
    res.render('index.ejs', {
      snacks: allSnackz
    });
  });
});

// ___________________
// new route
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// ___________________
// show route
router.get('/:id', (req, res) => {
  Snack.findById(req.params.id, (error, foundSnack) => {
    res.render('show.ejs', {
      snack: foundSnack
    });
  });
});

// create route
router.post('/', (req, res) => {
  Snack.create(req.body, (error, createdSnack) => {
      res.send(createdSnack);
  })
});

module.exports = router;
