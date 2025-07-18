import Product from "../models/product.js";

async function getProducts(req,res){
    try{}catch(error){
        res.status(500).send({error});
    }
}
async function getProductById(req,res){
    try{}catch(error){
        res.status(500).send({error});
    }
}
async function createProduct(req,res){
    try{}catch(error){
        res.status(500).send({error});
    }
}
async function updateProduct(req,res){
    try{}catch(error){
        res.status(500).send({error});
    }
}
async function deleteProduct(req,res){
    try{}catch(error){
        res.status(500).send({error});
    }
}

export {
    getCategories,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}