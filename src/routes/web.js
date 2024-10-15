const express = require('express') //commonjs
const router = express.Router()
const { getHomepage, getABC, GetAlonglee } = require('../controllers/homeController')


// router.Method('/route', handler) mô hình định nghĩa route

//ví dụ sơ khai.
// router.get('/', (req, res) => {
//     //xử lý data, viết logic => controller
//     res.send('Hello alongleene')
// }) 

router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/alonglee', GetAlonglee)

module.exports = router