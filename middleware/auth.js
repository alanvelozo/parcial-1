import "dotenv/config"

const auth = function (req, res, next){
    
    if(req.query.password === process.env.AUTH_PASSWORD){
        next()
    } else{
        res.send("Usuario no autenticado.")
    }
}

export default auth;