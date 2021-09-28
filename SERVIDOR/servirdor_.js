import express  from "express";

const app = express();
app.listen(3001,()=>console.log("SERVIDOR ATIVO!"));
app.get("./HTML-ESTUDO/PROJETOS-SIMPLES/IMC-CALCULADORA/index.html",(req,res) => 
res.send('index.html')
);