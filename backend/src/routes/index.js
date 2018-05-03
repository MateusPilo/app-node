module.exports = () => {
    const router = require('express').Router();
    var VerifyToken = require('../middleware/middlewareJWT');

    router.use('/api/auth',require('./auth')());
    router.use('/usuarios',VerifyToken,require('./usuarios')());

    return router;
}
