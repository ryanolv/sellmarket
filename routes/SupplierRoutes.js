const router = require('express').Router();
const SupplierController = require('../controllers/SupplierController');


router.post('/register', SupplierController.register);


module.exports = router;