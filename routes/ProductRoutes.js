const router = require('express').Router();
const ProductController = require('../controllers/ProductController');

// export default
router.post('/register', ProductController);


module.exports = router;