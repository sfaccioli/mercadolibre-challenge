const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');


// get items
router.get('/', 
    itemsController.searchItems
);

//get item by id
router.get('/:id',
    itemsController.getItem
)

//get item by id
router.get('/categories/:id',
    itemsController.getCategories
)

module.exports = router;