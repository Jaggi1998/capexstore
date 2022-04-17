const express = require ("express");
const path = require ("path");
const app = express()

const port = 4000; 

const staticPath = path.join(__dirname, "./public")
app.use(express.static(staticPath))

app.get("/", (req, res) =>{
    res.send("hello express server")
});


app.listen (port, ()=>{
    console.log(`Listening to the port ${port}`)
})