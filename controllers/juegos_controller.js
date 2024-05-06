import Juegos from "../models/juegos_model.js";


async function getJuegos(cantidad){

    let catalogo = await Juegos.find().limit(cantidad).populate("desarrolladora");
    return catalogo;
}

async function catalogo_x_precio(){

    let catalogo = await Juegos.find({precio: {$lt: 2000}}).populate("desarrolladora");
    return catalogo;
}

async function catalogo_x_lanzamiento(){

    let catalogo = await Juegos.find({lanzamiento: {$lt: 2010}}).populate("desarrolladora");
    return catalogo;
}

async function getJuego(id){

    let juego = await Juegos.findOne({"_id": id}).populate("desarrolladora");
    return juego;
}



async function createJuegos(req){
    
    let juegoNuevo = new Juegos({
        
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        generos: req.body.generos,
        plataformas: req.body.plataformas,
        lanzamiento: req.body.lanzamiento,
        precio: req.body.precio,
        portada: req.body.portada,
        desarrolladora: req.params.id

    })

    return juegoNuevo.save();

}



async function updateJuegos(id, body){
    
    let juegoActualizado = await Juegos.findByIdAndUpdate(id, {
        $set: {
            titulo: body.titulo,
            descripcion: body.descripcion,
            generos: body.generos,
            plataformas: body.plataformas,
            lanzamiento: body.lanzamiento,
            precio: body.precio,
            portada: body.portada
        }
    }, {new: true})

    return juegoActualizado;

}



async function deleteJuego(id){
    
    let juegoEliminado = await Juegos.findByIdAndDelete(id)
    return juegoEliminado;

}

async function getJuegoPorNombre(titulo){

    let juegos = await Juegos.find({ titulo: { $regex: new RegExp(titulo, "i") } }).populate("desarrolladora");
    return juegos;
}





// ENDPOINTS


async function getTitulos(){

    let juegos = await Juegos.find({}, { titulo: 1, _id: 0 })
    return juegos;
}

async function getDescripciones(){

    let juegos = await Juegos.find({}, { titulo: 1, descripcion: 1, _id: 0 })
    return juegos;
}

async function getGeneros(){

    let juegos = await Juegos.find({}, { titulo: 1, generos: 1, _id: 0 })
    return juegos;
}

async function getPlataformas(){

    let juegos = await Juegos.find({}, { titulo: 1, plataformas: 1, _id: 0 })
    return juegos;
}

async function getLanzamiento(){

    let juegos = await Juegos.find({}, { titulo: 1, lanzamiento: 1, _id: 0 })
    return juegos;
}

async function getPrecio(){

    let juegos = await Juegos.find({}, { titulo: 1, precio: 1, _id: 0 })
    return juegos;
}

async function getPortada(){

    let juegos = await Juegos.find({}, { titulo: 1, portada: 1, _id: 0 })
    return juegos;
}



export {getJuegos, getJuego, createJuegos, updateJuegos, deleteJuego, getJuegoPorNombre, getTitulos, getDescripciones, getGeneros, getPlataformas, getLanzamiento, getPrecio, getPortada, catalogo_x_precio, catalogo_x_lanzamiento}