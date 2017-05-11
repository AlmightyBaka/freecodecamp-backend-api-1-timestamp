const url = require('url')

const app = require('express')()

const timestamp = require('./timestamp.js')

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`running on http://localhost:${port}`)
})

app.get('*', (req, res) => {
    let output = timestamp(req.params)

    res.status(200).send(output)
})