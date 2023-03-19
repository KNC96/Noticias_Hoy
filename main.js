let key = '8e0a33bed11b467da059ca1c3b7f910d';
let categoria = '';
let pais = 'ar';
let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=8e0a33bed11b467da059ca1c3b7f910d`
//let url = `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${key}`;
let mostrar_noticias = document.getElementById('contenido');

fetch(url).then((resp) => resp.json()).then(data => {
    let noticiaUno = (data.articles);
    console.log(noticiaUno);
    noticiaUno.map(function(numero){
        let div = document.createElement("div");
        div.className = "news";
        div.innerHTML = `<a href = ${numero.url} target='blank'>
                         <img class='imagen' src=${numero.urlToImage}>
                         <h2>${numero.title}</h2>
                         <h3>${numero.description}</h3></a>` 
                         mostrar_noticias.appendChild(div);
    })
})
//estas funciones abren y cierran el menu
function abrirMenu(){
    document.getElementById("leftMenu").style.width = "100%";
}
function cerrarMenu(){
    document.getElementById("leftMenu").style.width = "0";
}