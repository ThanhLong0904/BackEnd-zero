require('dotenv').config()
const express = require('express') //commonjs
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web.js')
const connectDB = require('./config/database.js')


const app = express() // app express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app)

//khai báo route
// app.use('/', webRouters)

app.get('/a', async (req, res) => {
    try {
        const pool = await connectDB();
        const result = await pool.request().query('SELECT * FROM users');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send('Lỗi kết nối đến DB');
    }
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})