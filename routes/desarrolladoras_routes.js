import express from "express";
import { getDesarrolladoras, getDesarrolladora, createDesarrolladora, updateDesarrolladora, deleteDesarrolladora, getDesarrolladoraPorNombre } from "../controllers/desarrolladoras_controller.js";
import auth from "../middleware/auth.js"

const route = express.Router();






// CATÁLOGO COMPLETO - PAGINADO - BÚSQUEDA POR NOMBRE


route.get("/", function(req,res){

    if(req.query.cantidad){
        let cantidad = parseInt(req.query.cantidad);
        getDesarrolladoras(cantidad)
            .then(function(desarrolladoras){
                res.status(200).json(desarrolladoras);
            })
            .catch(function(error){
                res.status(400).json(error);
            });
    }
    else if(req.query.search){
        let nombre = String(req.query.search);
        getDesarrolladoraPorNombre(nombre)
            .then(function(desarrolladora){
                res.status(200).json(desarrolladora);
            })
            .catch(function(error){
                res.status(400).json(error);
            });
    }
    else {
        getDesarrolladoras()
            .then(function(desarrolladoras){
                res.status(200).json(desarrolladoras);
            })
            .catch(function(error){
                res.status(400).json(error);
            });
    }

})



// DOCUMENTO POR ID


route.get("/:id", function(req,res){

    let result = getDesarrolladora(req.params.id);
    result.then(function(desarrolladora){
        res.status(200).json(desarrolladora)
    }).catch(function(error){
        res.status(400).json(error)
    })

})


// RUTAS DE AUTENTICACIÓN NECESARIA


route.post("/", auth, function(req,res){
    
    let result = createDesarrolladora(req.body);
    
    result.then(function(desarrolladora){
        res.status(200).json(desarrolladora)
    }).catch(function(err){
        res.status(400).json(err);
    })
    
})

route.put("/:id", auth, function(req,res){
    
    let result = updateDesarrolladora(req.params.id, req.body);

    result.then(function(desarrolladora){
        res.status(200).json(desarrolladora)
    })
    .then(function(error){
        res.status(400).json(error)
    })

})

route.delete("/:id", auth, function(req,res){

    let result = deleteDesarrolladora(req.params.id);

    result.then(function(desarrolladora){
        res.status(200).json(desarrolladora)
    })
    .catch(function(error){
        res.status(400).json(error);
    })

})

export default route;