const getHomepage = (req, res) => {
    // process data
    // call model
    res.send('Hello alongleene')
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const GetAlonglee = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomepage, getABC, GetAlonglee }