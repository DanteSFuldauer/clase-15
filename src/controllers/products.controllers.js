import productModel from "../models/product.model.js";

//obtener todos los productos
export const getProducts = async (req,res) => {
    try { //ejecuto el codigo
        const {limit} = req.query
        const prods = productModel.find().limit(limit)
        red.status(200).render('templates/home', {productos: prods, js: 'productos.js', css: 'productos.css'})

    } catch(e) { //si suceden errores
        console.log("Error en consultar productos: ", e)
    }
}

//buscar producto por id
export const getProduct = async(req,res) => {
    try {
        const idProd = req.params.pid
        const prod = await productModel.findById(idProd)

        if (prod)
            res.status(200).send(prod)
        else
        res.status(404).send({mensaje: "Producto no existe"})
    } catch (e) {
        console.log("Error al consultar el producto: ", e)
    }
}

//crear producto
export const createProduct = async (req, res) => {
    try {
        const product = req.body
        const respuesta = await productModel.create(product)
    } catch (e) {
        console.log("Error al crear producto: ", e)
    }
}

//actualizar producto
export const updateProduct = async (req, res) => {
    try {

    } catch (e) {
        
    }
}

//borrar producto
export const deleteProduct = async (req, res) => {
    try {

    } catch (e) {
        
    }
}









/*
import { Router } from 'expred'
import crypto from 'crypto'
import { __dirname } from '../path.js'
import {promises as fs} from 'fs'
import path from 'path'

const productRouter = Router()

//dada una ruta, las concateno entre si (evito utilizar el +)
//encuentra la direccion donde esta productos.json
const productosPath = path.resolve(__dirname, '../src/db/productos.json');

//lee el archivo productos.json
const productosData = await fs.readFile(productosPath, 'utf-8');

//para no consultar todo el tiempo al json lo guardo en una variable
const productos = JSON.parse(productosData)

//consultar productos
productRouter.get('/', (req, res) => {

    //limito la cantidad de productos
    const {limit} = req.query
    const products = productos.slice(0, limit) //devuelve una copia de una array (inicio, fin)

    res.status(200).send(productos)
})

//consultar producto via id
productRouter.get('/:idP', (req, res) => {

    //esta o no esta el producto
    const idProducto = req.params.idP
    const producto = productos.find(prod => prod.id == idProducto)
    
    if(producto) { //si el producto existe
        res.status(200).send(producto)

    } else { //si el producto no existe
        res.status(404).send({mensaje: "El producto no existe"})
    }
})

/// crear nuevo producto
productRouter.post('/', async (req,res) => {

    //pido parametros del producto
    //code no es el id, sino codigo de barras
    const {title, description, code, price, category, stock} = req.body

    //constructor del producto
    const nuevoProducto = {
        id: crypto.randomBytes(10).toString('hex'), //me genera un id unico
        title: title,
        description: description,
        code: code, 
        category: category,
        price: price,
        stock: stock,
        status: true,
        thumbnails: []
    }

    //agrego el producto
    productos.push(nuevoProducto)

    //guardo el nuevo producto en el json
    await fs.writeFile(productosPath, JSON.stringify(productos))

    //le digo al ususario que se agreggo
    res.status(201).send({mensaje: `Producto creado correctamente con el id: ${nuevoProducto.id}`})
})

//////////////////put/////////////////
productRouter.put('/:idP', async (req,res) => {
    //pido id del producto
    const idProducto = req.params.idP

    //pido datos para actualizar
    const {title, description, code, price, category, stock, thumbnails, status} = req.body

    //consulto en que posicion del array se encuentra un producto dado su id
    // si  existe o no, si no existe devuelve -1
    const indice = productos.findIndex(prod => prod.id == idProducto) 

    if (indice != -1) { //si el producto existe // actualizo elmementos // los id no se actualizn
        productos[indice].title = title
        productos[indice].description = description
        productos[indice].code = code
        productos[indice].price = price
        productos[indice].stock = stock
        productos[indice].status = status
        productos[indice].category = category
        productos[indice].thumbnails = thumbnails

        //actualiza el producto
        await fs.writeFile(productosPath, JSON.stringify(productos))

        res.status(200).send({Mensaje: "Producto actualizado"})
    } else { //si el producto no existe
        res.status(404).send({Mensaje: "El producto no existe"})
    }
})

////////////DELETE//////////////
productRouter.delete('/:idP', async (req,res) => {
    //pido id del producto que voy a eliminar
    const idProducto = req.params.idP

    //consulto indice del elemento
    const indice = productos.findIndex(prod => prod.id == idProducto)

    if(indice != -1) { //si el producto existe
        productos.splice(indice, 1) // es mas rapido splice que filter //elimino

        //elimina el producto
        await fs.writeFile(productosPath, JSON.stringify(productos))

        res.status(200).send({Mensaje: "Producto eliminado"})
    } else { //producto no existe
        res.status(404).send({Mensaje: "El producto no existe"})
    }
})

export default productRouter */
