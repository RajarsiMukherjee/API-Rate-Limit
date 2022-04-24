const express = require('express');
const app = express();
const posts = require('./posts');
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    max : 2,
    windowMs: 10000
})

app.get('/posts', limiter, (req, res) => {
    res.send({
        status: "Success",
        posts : posts
    })
})
app.listen(8000, ()=> console.log("Listening on port 8000"));