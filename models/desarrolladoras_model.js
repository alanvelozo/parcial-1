import mongoose from "mongoose";

const desarrolladoraSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    fundacion: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        required: false
    }
})

export default mongoose.model("desarrolladoras", desarrolladoraSchema);