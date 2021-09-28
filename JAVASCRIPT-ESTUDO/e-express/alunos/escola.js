import {aluno} from "./alunos_classe.js";
import { criar_aluno,buscar_idade,excluir_aluno,buscar_matricula,buscar_nome } from "./dao_aluno.js";
import {bd_aluno} from "./banco.js"; 
import express from "express";

const app = express();
const porta = 8000;
criar_aluno("ICARO",20);
criar_aluno("CAMILA",25);
criar_aluno("CAMILA",14);

app.get('/aluno/:nome',(req,res,next)=>{
const aluno = buscar_nome(req.params.nome)[0];
console.log(req.params.nome);
console.log(aluno);
res.send(aluno.get_nome());
});
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.post('/aluno',(req,res)=>{
    console.log(buscar_nome(req.body.nome));
    res.send(buscar_nome(req.body.nome));
});


app.listen(porta,()=>{
    console.log("SERVIDOR ATIVO!");
})