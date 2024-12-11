exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local';
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) return res.render('erroPage');
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};