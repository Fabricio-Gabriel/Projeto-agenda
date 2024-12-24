import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        let el = e.target;
        const inputEmail = el.querySelector('input[name="email"]');
        const inputPassword = el.querySelector('input[name="password"]');

        let error = false;

        if (!validator.isEmail(inputEmail.value)) {
            alert('Email inválido');
            error = true;
        }

        if (inputPassword.value.length < 3 || inputPassword.value.length > 50) {
            alert('A senha precisa ter entre 3 e 50 caracteres.');
            error = true;
        }

        if (!error) el.submit();

        console.log(inputEmail.value, inputPassword.value);
    }
}