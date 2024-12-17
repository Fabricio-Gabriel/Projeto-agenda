const Login = require('../models/loginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async (req, res) => {
    try{
        const login = new Login(req.body);
        await login.register();

        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                const url = req.get("Referer") || "/login/index";
                return res.redirect(url);
            });

            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(() => {
            const url = req.get("Referer") || "/login/index";
            return res.redirect(url);
        });
        
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};