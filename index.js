const express = require("express")
const app = express()

app.get("/", async(req,res)=> {
res.send("hello world")
})

app.listen(5000, ()=> {
console.log("running in port 5000")
})
