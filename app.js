const express = require ("express");
const path = require ("path");
const app = express()

const port = 3000; 

// const staticPath = path.join(__dirname, "./public")
// app.use(express.static(staticPath))

// Access public folder from root
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/images',express.static(path.join(__dirname, 'public/assets/images')));
app.use('/css', express.static(path.join(__dirname, 'public/assets/css')));
app.use('/js', express.static(path.join(__dirname, 'public/assets/js')));

app.set("view engine", "ejs")

app.get('/', (req,res)=>{res.render('index')})

app.get('/blog', (req,res)=>{res.render('blog')})
app.get('*', (req,res)=>{res.render('404')})





app.listen (port, ()=>{
    console.log(`Listening to the port ${port}`)
})