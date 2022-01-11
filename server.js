import express, { urlencoded } from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/aluno",(req, res)=>{
    res.send("SERVIDOR ATIVO"); 
});

app.post("/cadastro-aluno",(req,res)=> {

    let nome = req.body.nome;
    let idade = req.body.idade;
    let sexo = req.body.sexo;
    let serie = req.body.serie;

    
        res.statusCode = 200;
        res.send("ALUNO CADASTRADO COM SUCESSO!");
     

});
app.listen(8070);


