import mongoose from "mongoose";
import Address from "./addressModel";

const saleSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    idClient: { type: String, required: true},
    status:{type: TypeSale, required:true},
    idUser:{ type: String, required: true},
    typePayment:{type: TypePayment},
    total:{type: number},
    creationDate:{type:Date},
  
});
 

const Sale = mongoose.model('Sale', saleSchema);

export default Sale;