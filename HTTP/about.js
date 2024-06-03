import express from "express";

const app = express();
const port = 4500;

app.get("/",(req,res)=>{
  res.send("Hello")
});

app.get("/about",(req,res)=>{
    res.send("Hel")
  });

app.listen(port,()=>{
    console.log("chau hai");
})