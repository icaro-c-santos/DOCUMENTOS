import express, { urlencoded } from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/aluno",(req, res)=>{
    res.send("SERVIDOR ATIO"); 
});

app.post("/cadastro-aluno",(req,res)=> {

    let nome = req.body.nome;
    let idade = req.body.idade;
    let sexo = req.body.sexo;
    let serie = req.body.serie;
g
     if(1<0){
        res.statusCode = 200;
        res.send("ALUNO CADASTRADO COM SUCESSO!");
     }else{
       res.statusCode = 402;
       res.send("ERRO!");
     }

});
app.listen(8070);


