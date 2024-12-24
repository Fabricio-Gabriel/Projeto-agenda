import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
        this.btn = document.querySelector('.btn');
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            this.validate(e);
            e.preventDefault();
        });
    }

    validate(e) {
        let el = e.target;

        this.limparErros();

        const inputNome = el.querySelector('input[name="nome"]');
        const inputEmail = el.querySelector('input[name="email"]');
        const inputTelefone = el.querySelector('input[name="telefone"]');

        let error = false;

        if(!inputNome.value) {
            this.criaErro('Nome é obrigatório.', inputNome);
            console.log('passei pelo nome');
            error = true;
        }

        if (!validator.isEmail(inputEmail.value)) {
            this.criaErro('E-mail inválido.', inputEmail);
            error = true;
        }

        if (!inputEmail.value && !inputTelefone.value) {
            this.criaErro('Pelo menos o e-mail ou o telefone devem ser preenchidos!', inputEmail);
            this.criaErro('Pelo menos o e-mail ou o telefone devem ser preenchidos!', inputTelefone);
            error = true;
        }

        if (inputTelefone.value.length !== 11) {
            this.criaErro('O telefone deve ter 11 digitos', inputTelefone);
            error = true;
        }

        if(!error) el.submit();
    }


    criaErro(msg, input) {
        const div = document.createElement("div");
        div.classList.add('error-message');
        input.insertAdjacentElement("afterend", div);
        div.style.color = "red";
        div.innerHTML = msg;
    }

    limparErros() {
        const erros = this.form.querySelectorAll('.error-message');
        erros.forEach(e => e.remove());
    }

    
}