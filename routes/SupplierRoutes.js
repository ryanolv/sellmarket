const router = require('express').Router();

const SupplierController = require('../controllers/SupplierController');


// CRUD supplier
router.post('/register', SupplierController.register);
router.get('/search', SupplierController.search);
router.delete('/remove', SupplierController.remove);

// When the supplier provides a product
router.post({})

module.exports = router;