const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
require('dotenv').config()
const port = process.env.PORT || 8000
const wallpapers = require('./routes/wallpapers')
const { readdirSync } = require('fs')


readdirSync("./routes").map((file)=>app.use("/",require("./routes/"+file)))

app.get('/', (req, res) => {
    res.send("hello")
});

//app.get('/wallpapers', wallpapers)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// Export the Express API
module.exports = app;

//console.log(process.env)