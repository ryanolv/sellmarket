const express = require('express');

const app = express();

// Config JSON response
app.use(express.json());


// Routes 
const ProductRoutes = require('./routes/ProductRoutes');
app.use('/products', ProductRoutes);

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
})