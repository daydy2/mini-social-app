const express = require('express');
const cors = require('cors')

const app = express();
app.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome Danielmini'
    })
})
app.listen(3100)