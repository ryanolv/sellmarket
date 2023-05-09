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

        // Checking if supplier exists 
        const supplier = await Supplier.findOne({ where: { cnpj: cnpj_supplier } })
        if(supplier !== null) {
            response.status(420).json({ "message": "Fornecedor já está cadastrado!" })
            return
        } 

        // Registering supplier in db
        await Supplier.create({
            email_fornecedor: email_supplier,
            nome_fornecedor: name_supplier,
            cnpj: cnpj_supplier
        }).then( _ => response.status(200).json({ message: 'Fornecedor cadastrado com sucesso!' }))
          .catch( err => response.status(422).json({ message: 'Falha ao cadastrar fornecedor. Tente novamente! ' + err }));
    }

    static async search(request, response) {

        const { cnpj_supplier } = request.body;
        
        const supplier = await Supplier.findOne({ where: { cnpj: cnpj_supplier } })

        if(supplier === null) {
            response.status(420).json({ "message": "Fornecedor não existe na base de dados!" })
            return
        } else {
            response.status(200).json(
                {
                    "id_supplier": supplier.id_fornecedorm,
                    "email_supplier": supplier.email_fornecedor,
                    "name_supplier": supplier.nome_fornecedor,
                    "cnpj_supplier": supplier.cnpj
                }
            )
        } 

    }
}