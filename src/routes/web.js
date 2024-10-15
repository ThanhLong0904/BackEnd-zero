const express = require('express') //commonjs
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello alongleene')
})

router.get('/alonglee', (req, res) => {
    res.render('sample.ejs')
})

router.get('/alonglee1', (req, res) => {
    res.render('sample1.ejs')
})

module.exports = router