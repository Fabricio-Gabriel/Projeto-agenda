const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
    
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    }

    register() {

    }

    valida() {
        //validação de dados
        this.cleanUp();

        //valida o email
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        //valida a senha
        if(this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres!');
        }
    
    }

    cleanUp() {
        // Limpa os valores da chaves, e garante que email e senha
       for(const key in this.body) {
            if(typeof(this.body[key]) !== 'string') {
                this.body[key] = '';
            }

            this.body = {
                email: this.body.email,
                password: this.body.password
            }
       } 
    }
}

module.exports = Contato;
