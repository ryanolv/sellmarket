const Product = require('../models/Product');
const Supplier = require('../models/Supplier');
const ProductSupplier = require('../models/ProductSupplier'); 

module.exports = class ProductController {

    static async register(request, response) {

        const { code_product, value_product, name_product, id_supplier } = request.body;

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
        if(!id_supplier) {
            response.status(400).json({ messagem: "Id do fornecedor inválido."});
        }
        
        // Checking if supplier exists
        const supplier = await Supplier.findByPk(id_supplier);
        if (!supplier) {
        response.status(400).json({ message: "Fornecedor não existe." });
        return;
        }

        const product = await Product.findByPk(code_product);
        if (product) {
        response.status(400).json({ message: "Produto já está registrado." });
        return;
        }

        try {
        const newProduct = await Product.create({
            cod_produto: code_product,
            valor_produto: value_product,
            nome_produto: name_product,
        });
        
        await ProductSupplier.create({
            cod_produto: newProduct.cod_produto,
            id_fornecedor: supplier.id_fornecedor,
            valor_fornecedor: newProduct.valor_produto
        });
        
        response.status(200).json({ message: "Produto Cadastrado com Sucesso." });
        } catch (error) {
        response.status(400).json({ message: `Aconteceu este erro: ${error}` });
        }
    }
    
    static async search(request, response) {
        
        const { code_product } = request.body;
        
        // Validating if product code has been entered
        if(!code_product) {
            response.status(400).json({ message: "Insira o código do produto."});
        }
        
        // Checking if product exists in the database
        const product = await Product.findByPk(code_product);
        if(!product) {
            response.status(400).json({ message: "Produto não existe na base de dados."});
            return
        }
        
        // Sending the datas product
        response.status(200).json(
            {
                code_product: product.cod_produto,
                value_product: product.valor_produto,
                name_product: product.nome_produto
            }
            )
            
        }
        
        static async remove(request, response) {
            
            const { code_product, value_product, name_product } = request.body;
            
            // Validating datas entered
            if(!code_product) {
                response.status(400).json({ message: "Insira o código do produto."});
                return
            }
            if(!value_product) {
                response.status(400).json({ message: "Insira o valor do produto."});
                return
            }
            if(!name_product) {
                response.status(400).json({ message: "Insira o nome do produto."});
                return
            }
            
            // Checking if product is in the database
            const product = await Product.findByPk(code_product);
            if(!product) {
                response.status(400).json({ message: "Produto não está inserido no banco de dados."});
                return
            }

            // Deleting the product
            if(name_product === product.nome_produto && value_product == product.valor_produto) {
                await Product.destroy({ where: { cod_produto: code_product }})
                    .then(response.status(200).json({ message: "Produto deletado com sucesso!" })
                    ).catch(err => response.status(400).json({ message: "Não foi possível deletar o produto:", err }));
            } else{
                response.status(400).json({ message: "Dados inseridos não batem com o do produto registrado."})
            }

        }

}

