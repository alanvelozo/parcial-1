import Desarrolladora from "../models/desarrolladoras_model.js"

async function getDesarrolladoras(cantidad){
    let desarrolladoras = await Desarrolladora.find().limit(cantidad);
    return desarrolladoras
}

async function getDesarrolladora(id){
    let desarrolladora = await Desarrolladora.findOne({"_id": id});
    return desarrolladora
}

async function createDesarrolladora(body){
    let desarrolladora = new Desarrolladora({
        nombre: body.nombre,
        fundacion: body.fundacion,
        imagen: body.imagen
    })

    return await desarrolladora.save();
}


async function updateDesarrolladora(id, body){
    
    let desarrolladoraActualizada = await Desarrolladora.findByIdAndUpdate(id, {
        $set: {
            nombre: body.nombre,
            fundacion: body.fundacion,
            imagen: body.imagen
        }
    }, {new: true})

    return desarrolladoraActualizada;

}



async function deleteDesarrolladora(id){

    let desarrolladoraEliminada = await Desarrolladora.findByIdAndDelete(id)
    return desarrolladoraEliminada;
}



async function getDesarrolladoraPorNombre(nombre){

    let desarrolladoras = await Desarrolladora.find({ nombre: { $regex: new RegExp(nombre, "i") } });
    return desarrolladoras;
}


export {getDesarrolladoras, getDesarrolladora, createDesarrolladora, updateDesarrolladora, deleteDesarrolladora, getDesarrolladoraPorNombre};