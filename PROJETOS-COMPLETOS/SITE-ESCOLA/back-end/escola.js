import express from 'express';
import {excluir_aluno,criar_aluno,buscar_matricula,buscar_idade,buscar_nome} from "./dao_aluno.js";


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.post("/aluno",(req,res)=>{
    
    try{
        res.send(criar_aluno(req.body.nome,req.body.idade,req.body.turma,req.body.cpf));
    }catch(e){
            res.send("ERRO!: "+e);
    }
})


app.listen(8000,()=> console.log("SERIVODR ATIVO!"));
