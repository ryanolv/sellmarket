const router = require('express').Router();
const ProductController = require('../controllers/ProductController');

// export default
router.post('/register', ProductController.register);
router.get('/search', ProductController.search);
router.delete('/remove', ProductController.remove);


module.exports = router;