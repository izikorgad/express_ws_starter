import express from 'express';
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        res.send('Hello From Server');
    }
    catch (err) {
        next(err);
    }
});


module.exports = router;