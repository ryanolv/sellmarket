const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json')

// Config JSON response
app.use(express.json());


// Product route 
const ProductRoutes = require('./routes/ProductRoutes');
app.use('/products', ProductRoutes);

// Supplier route
const SupplierRoutes = require('./routes/SupplierRoutes');
app.use('/suppliers', SupplierRoutes);

// Documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})