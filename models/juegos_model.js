import mongoose from "mongoose";

const Schema = mongoose.Schema;

const juegoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    },
    generos: {
        type: [String],
        required: false
    },
    plataformas: {
        type: [String],
        required: false
    },
    lanzamiento: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    portada: {
        type: String,
        required: false
    },
    desarrolladora: {
        type: Schema.Types.ObjectId, ref: "desarrolladoras"
    }
})

export default mongoose.model("Juegos", juegoSchema);