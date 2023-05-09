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

