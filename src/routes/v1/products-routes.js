const express = require('express');
const controladorProducts = require('../../controllers/v1/products-controller');

const router = express.Router();
router.post('/createP', controladorProducts.createProduct);
router.delete('/deleteP', controladorProducts.deleteProduct);
router.delete('/deleteP', controladorProducts.deleteProduct);
router.get('/getP', controladorProducts.getProducts);

module.exports = router;