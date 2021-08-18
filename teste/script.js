function aja(objeto){
    const xhm = new XMLHttpRequest();
    xhm.open("GET",objeto.url,true);

    xhm.onload = e =>{
        if(xhm.status ===200){
            objeto.sucesso(xhm.response);
        }else if(xhm.status >400){

        }
    }
    xhm.send();
}

aja({
    url: "estados.json",
    metodo: "get",
    sucesso(resposta){
        const estados = JSON.parse(resposta);
       
        const linhas = estados.map(estado =>{
            const tr_id = document.createElement('td');
            tr_id.innerHTML = estado.id;

            const tr_nome = document.createElement('td');
            tr_nome.innerHTML = estado.id;

            const tr = document.createElement("tr");
            tr.appendChild(tr_id);
            tr.appendChild(tr_nome);

            return tr;
        })

      const table = document.createElement("tab");
       linhas.forEach(linha => {table.appendChild(linha)});
       document.body.appendChild(table);
    }

});
