const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true},
    descricao: String,
    num_titulo: Number,
    nome_user: String,
    idade_user: Number
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;
