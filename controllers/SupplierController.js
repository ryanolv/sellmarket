const Supplier = require('../models/Supplier');

module.exports = class SupplierController {

    static async register(request, response) {

        const { email_supplier, name_supplier, cnpj_supplier} = request.body;

        // Validating datas
        if(!email_supplier) {
            response.status(420).json({ message: "Campo de email do fornecedor inválido!" });
            return
        }
        if(!name_supplier) {
            response.status(420).json({ message: "Campo de nome do fornecedor inválido!" });
            return
        }
        if(!cnpj_supplier) {
            response.status(420).json({ message: "Campo de CNPJ do fornecedor inválido!" });
            return
        }

        // Checking if supplier exists 
        const supplier = await Supplier.findOne({ where: { cnpj: cnpj_supplier } });
        if(supplier !== null) {
            response.status(420).json({ message: "Fornecedor já está cadastrado!" });
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
        
        const supplier = await Supplier.findOne({ where: { cnpj: cnpj_supplier } });

        if(supplier === null) {
            response.status(420).json({ message: "Fornecedor não existe na base de dados!" });
            return
        } else {
            response.status(200).json(
                {
                    "id_supplier": supplier.id_fornecedor,
                    "email_supplier": supplier.email_fornecedor,
                    "name_supplier": supplier.nome_fornecedor,
                    "cnpj_supplier": supplier.cnpj
                }
            )
        } 

    }

    static async remove(request, response) {

        const { cnpj_supplier, name_supplier, id_supplier } = request.body;

        const supplier = await Supplier.findOne({ where: { cnpj: cnpj_supplier } });

        // Checking if supplier exists
        if(supplier === null) {
            response.status(420).json({ message: "Fornecedor não existe na base de dados!" });
            return
        }

        // Checking name requested
        if(name_supplier !== supplier.nome_fornecedor) {
            response.status(400).json({ message: "Nome não corresponde com o registrado na base de dados!"});
            return
        }

        // Cheking id requested
        if(id_supplier !== supplier.id_fornecedor) {
            response.status(400).json({ message: "Id não corresponde com o registrado na base de dados!"});
            return
        }

        await Supplier.destroy({ where: { id_funcionario: id_supplier }})
                .then(() => {
                    response.status(200).json({ message: "Fornecedor deletado com sucesso!" });
                })
                .catch(() => {
                    response.status(400).json({ message: "Não foi possível deletar fornecedor." });
                })
            
    }

    static async updateName(request, response) {

        const { id_supplier, name_supplier } = request.body

        
        try {
            const supplier = await Supplier.findByPk(id_supplier);
            supplier.nome_fornecedor = name_supplier
            supplier.save();

            response.status(200).json({ message: "Nome atualizado com sucesso."})

        } catch(error) {
            response.status(400).json({ message: "Não foi possivel atualizar o nome. "})
        }

    }

    static async updateEmail(request, response) {

        const { id_supplier, email_supplier } = request.body

        
        try {
            const supplier = await Supplier.findByPk(id_supplier);
            supplier.email_fornecedor = email_supplier
            await supplier.save();

            response.status(200).json({ message: "Email atualizado com sucesso."})

        } catch(error) {
            response.status(400).json({ message: "Não foi possivel atualizar o email. "})
        }
        
    }
}