import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import juegos_routes from "./routes/juegos_routes.js"
import desarrolladoras_routes from "./routes/desarrolladoras_routes.js"
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


mongoose.connect(process.env.MONGO_URL)
.then(function(){
    console.log("Running on http://localhost:3000")
})
.catch(function(){
    console.log("Error")
})


const app = express()
app.use(express.json())

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'view')));

app.use("/juegos", juegos_routes)
app.use("/desarrolladoras", desarrolladoras_routes)


const port = process.env.PORT || 3001;
app.listen(port);