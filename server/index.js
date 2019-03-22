var express = require('express');
var app = express();
const port = 3000;
const getProducts = require('./getProducts')
const getProduct = require('./getProduct');

var products = require('../products.json')

app.listen(3000,() => {
    console.log(`listening on port ${port}`)
})

app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)

