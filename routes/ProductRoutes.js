const router = require('express').Router();
const ProductController = require('../controllers/ProductController');

// export default
router.post('/register', ProductController.register);
router.get('/search', ProductController.search);


module.exports = router;