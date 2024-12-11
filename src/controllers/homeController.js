exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este é o titulo da página',
        t2: 'Segundo <span style="color: red;"> titulo </span>',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });

    return;
};

exports.trataPost = (req, res) => {
    res.send(`<h1>Olá ${req.body.cliente}</h1>`);
};
