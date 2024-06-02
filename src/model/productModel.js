import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String },
    description: { type: String },
    price: { type: String },
    amount:{type:number},
    status:{type: Boolean},
    creationDate:{type:Date},
    deleteDate:{type:Date},
});
 

const Product = mongoose.model('Product', productSchema);

export default Product;