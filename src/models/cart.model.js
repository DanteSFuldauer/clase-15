import { Schema, model} from "mongoose";

const cartSchema = new Schema({
    products: {
        type: [
            {
                id_prod: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'products' //significa que este id hace ref a un id de la coleccio n productos
                },
                quentity: {
                    type: Number,
                    required: true
                }
            }
        ],
        default: []
    }
})

const cartModel = model("carts", cartSchema)
export default cartModel
