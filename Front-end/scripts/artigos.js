
const server = "http://localhost:3002"; // URL DO SERVIDOR PARA REQUISIÇÕES
const host = "https://www.cuidadodesalud.gov"  // dominio da API HEALTCARE



async function buscarArtigos() {
    const result = await fetch(server+"/artigos", {
        method: "GET",
        body: JSON.stringify(),
    })
    return result.json();
    
}


async function convertArtigos(artigos) {  
    return await artigos.array.forEach(artigo => {
     
    });
}

function convertData(data) {
    return new Date(data).toDateString();
}

function convertUrl(url) {
    return host + url;
}

function contem(palavra,texto){
  const str = new RegExp(palavra,"i");
   return str.test(texto);
}


async function addArtigo(artigoItem) {

    const main = document.getElementsByTagName("main")[0];
    const link = document.createElement("a");
    const artigo = document.createElement("div");
    const titulo = document.createElement("h2");
    const data = document.createElement("h3");
    const vermais = document.createElement("p");

    link.setAttribute("id","link");
    artigo.setAttribute("id","artigo");
    titulo.setAttribute("id","titulo");
    data.setAttribute("id","data");

    link.href = artigoItem.url;
    link.target = "_blank";
    titulo.innerText = artigoItem.title;
    data.innerText = artigoItem.date;
    vermais.innerText = "Ver Artigo";
    artigo.append(data,titulo,vermais);
    link.append(artigo);
    main.append(link);
}


async function obterArtigos(){

   const dados =  await buscarArtigos();
   await dados.articles.forEach(artigo=> {
         artigo.date = convertData(artigo.date);
        artigo.url = convertUrl(artigo.url);
   })

  return dados.articles;
}

obterArtigos().then(artigo => {artigo.forEach(addArtigo)}) // INICIAR OS ARTIGOS NA PAGINA 

document.getElementById('pesquisar').onclick = async () => { // FILTRA OS ARTIGOS
  try {
    const art = document.getElementById("artigo");
    if(art){ document.getElementById("main").innerText = ""} 
    const texto = await document.getElementById("texto").value;
    const artigos = await obterArtigos();
    
    if(texto.length <= 0) {
       artigos.forEach(addArtigo);
    }else{
       artigos.map(artigo => {
          if(contem(texto,artigo.title)){ addArtigo(artigo)}
       })
    }
  } catch (error) {
    alert("SENTIMOS MUITO MAIS DEVIDO A UM PROBLEMA NO SERVIDOR NOSSO ARTIGOS ESTÃO INDISPONÍVEIS! :)")
  }

}

document.getElementById("texto").oninput =async() =>{    /// TRAZ OS ARTIGOS DE VOLTA QUANDO O CAMPO PESQUISA É VAZIO
    if(!document.getElementById("texto").value){
      const art = document.getElementById("artigo");
      if(art){ document.getElementById("main").innerText = ""} 
      obterArtigos().then(artigo => {artigo.forEach(addArtigo)})
    }
}



