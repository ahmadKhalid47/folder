let express = require('express')
let app = express();

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(9000, () => {
    console.log("ok")
})