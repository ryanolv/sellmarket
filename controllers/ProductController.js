const Product = require('../models/Product');

module.exports = class ProductController {

    static async register(request, response) {

        const { code_product, value_product, name_product } = request.body;

        // Validating the datas
        if(!code_product) {
            response.status(400).json({ messagem: "Código do produto inválido."});
        }
        if(!value_product) {
            response.status(400).json({ messagem: "Valor do produto inválido."});
        }
        if(!name_product) {
            response.status(400).json({ messagem: "Nome do produto inválido."});
        }

        // Checking if products already exists
        const product = await Product.findByPk(code_product);
        if(product) {
            response.status(400).json({ message: "Produto já está registrado"});
            return
        } 

        await Product.create({
            cod_produto: code_product,
            valor_produto: value_product,
            nome_produto: name_product
        }).then(response.status(200).json({ message: "Produto Cadastrado com Sucesso." })
        ).catch(error => response.status(400).json({ message: `Aconteceu este err: ${error}`}));
    }

}

