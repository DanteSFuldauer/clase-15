import {Schema, model} from 'mongoose'

const userSchema = new Schema( {
    username: String, //agreggo una caracteristica, esta es el tipo
    email: {
        type: String,
        unique: true //no se puede repetir mal
    }
})

                        //nombre de la coleccion /esquema a utilizar
export const userModel = model("users", userSchema)