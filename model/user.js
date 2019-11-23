const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = Schema({
    cellphone: {
        type: String,
        required: true,
        unique: true
    },
    Modelo: String,
    MemroiaInterna: String,
    RAM: String,
    Bateria: String,
    SistemaOperativo: String,
    Marca: {
        type: String,
        required: true
    },
    login_count: Number
}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);