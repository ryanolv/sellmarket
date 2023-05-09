const router = require('express').Router();

const SupplierController = require('../controllers/SupplierController');


router.post('/register', SupplierController.register);
router.get('/search', SupplierController.search);

module.exports = router;