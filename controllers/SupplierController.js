const Supplier = require('../models/Supplier');

module.exports = class SupplierController {

    static async register(request, response) {

        const { email_supplier, name_supplier, cnpj_supplier} = request.body;

        // Validating datas
        if(!email_supplier) {
            response.status(420).json({ "message": "Campo de email do fornecedor inválido!" });
            return
        }
        if(!name_supplier) {
            response.status(420).json({ "message": "Campo de nome do fornecedor inválido!" });
            return
        }
        if(!cnpj_supplier) {
            response.status(420).json({ "message": "Campo de CNPJ do fornecedor inválido!" });
            return
        }
    }

}