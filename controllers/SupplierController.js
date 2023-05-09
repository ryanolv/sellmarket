const Supplier = require('../models/Supplier');

module.exports = class SupplierController {

    static async register(request, response) {

        response.json({ "message": "hi"})

    }

}