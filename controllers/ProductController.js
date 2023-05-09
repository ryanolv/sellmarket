const Product = require('../models/Product');

module.exports = class ProductController {

    static async register(request, response) {

        response.send("Cheguei até aqui");
    }

}

