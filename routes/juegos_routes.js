import express from "express";
import { createJuegos, deleteJuego, getJuegos, getJuego, updateJuegos, getJuegoPorNombre, getTitulos, getDescripciones, getGeneros, getPlataformas, getLanzamiento, getPrecio, getPortada, catalogo_x_precio, catalogo_x_lanzamiento } from "../controllers/juegos_controller.js";
import auth from "../middleware/auth.js"

const route = express.Router();







// CATÁLOGO COMPLETO - PAGINADO - BÚSQUEDA POR NOMBRE


route.get("/", function(req,res){
    if(req.query.cantidad){
        let cantidad = parseInt(req.query.cantidad);
        getJuegos(cantidad)
            .then(function(juegos){
                res.status(200).json(juegos);
            })
            .catch(function(error){
                res.status(400).json(error);
            });
    }
    else if(req.query.search){
        let titulo = String(req.query.search);
        getJuegoPorNombre(titulo)
            .then(function(juego){
                res.status(200).json(juego);
            })
            .catch(function(error){
                res.status(400).json(error);
            });
    }
    else {
        getJuegos()
            .then(function(juegos){
                res.status(200).json(juegos);
            })
            .catch(function(error){
                res.status(400).json(error);
            });
    }
});



// ENDPOINTS


route.get("/titulos", function(req,res){
    
    let result = getTitulos()

    result.then(function(juegos){
        res.status(200).json(juegos)
    })
    .then(function(error){
        res.status(400).json(error)
    })
})

route.get("/descripciones", function(req,res){
    
    let result = getDescripciones()

    result.then(function(juegos){
        res.status(200).json(juegos)
    })
    .then(function(error){
        res.status(400).json(error)
    })
})

route.get("/generos", function(req,res){
    
    let result = getGeneros()

    result.then(function(juegos){
        res.status(200).json(juegos)
    })
    .then(function(error){
        res.status(400).json(error)
    })
})

route.get("/plataformas", function(req,res){
    
    let result = getPlataformas()

    result.then(function(juegos){
        res.status(200).json(juegos)
    })
    .then(function(error){
        res.status(400).json(error)
    })
})

route.get("/lanzamientos", function(req,res){
    
    let result = getLanzamiento()

    result.then(function(juegos){
        res.status(200).json(juegos)
    })
    .then(function(error){
        res.status(400).json(error)
    })
})

route.get("/precios", function(req,res){
    
    let result = getPrecio()

    result.then(function(juegos){
        res.status(200).json(juegos)
    })
    .then(function(error){
        res.status(400).json(error)
    })
})

route.get("/portadas", function(req,res){
    
    let result = getPortada()

    result.then(function(juegos){
        res.status(200).json(juegos)
    })
    .then(function(error){
        res.status(400).json(error)
    })
})



// FILTRADOS


route.get("/ofertas", function(req,res){

    let result = catalogo_x_precio();
    result.then(function(juegos){
        res.status(200).json(juegos)
    }).catch(function(error){
        res.status(400).json(error)
    })

})

route.get("/old-school", function(req,res){

    let result = catalogo_x_lanzamiento();
    result.then(function(juegos){
        res.status(200).json(juegos)
    }).catch(function(error){
        res.status(400).json(error)
    })

})



// DOCUMENTO POR ID


route.get("/:id", function(req,res){
    
    let result = getJuego(req.params.id);
    result.then(function(juego){
        res.status(200).json(juego)
    }).catch(function(error){
        res.status(400).json(error)
    })

})



// RUTAS DE AUTENTICACIÓN REQUERIDA


route.post("/:id", auth, function(req,res){
    
    let result = createJuegos(req);

    result.then(function(juego){
        res.status(200).json(juego)
    }).catch(function(error){
        res.status(400).json(error);
    })

})

route.put("/:id", auth, function(req,res){
    
    let result = updateJuegos(req.params.id, req.body);

    result.then(function(juego){
        res.status(200).json(juego)
    })
    .then(function(error){
        res.status(400).json(error)
    })

})

route.delete("/:id", auth, function(req,res){

    let result = deleteJuego(req.params.id);

    result.then(function(juego){
        res.status(200).json(juego)
    })
    .then(function(error){
        res.status(400).json(error)
    })

})



export default route;