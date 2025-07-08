import express from 'express';



const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Hello Express Js</h1>")
})
app.get("/home",(req,res)=>{
    res.send("<h1>Hello Express from home page</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>Hello Express from about page</h1>")
})

const port = 4000
app.listen(port,()=>{
    console.log(`App listen on port: ${port}`);
    
})