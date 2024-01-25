var listaVideos=[
{titulo: 'Video 1',descripcion:'descripción video 1',url:'https://www.youtube.com/watch?v=mA6BTv5C8ss&list=RDmA6BTv5C8ss&start_radio=1&ab_channel=LosPasosdeJulion'},
{titulo: 'Video 2',descripcion:'descripción video 2',url:'https://www.youtube.com/watch?v=lkW4pyK2EKw&list=RDmA6BTv5C8ss&index=2&ab_channel=LowDrow'},
{titulo: 'Video 3',descripcion:'descripción video 3',url:'https://www.youtube.com/watch?v=2HuBpVd52Gk&list=RDmA6BTv5C8ss&index=3&ab_channel=LosPasosdeJulion'}
];

var catalogoVideos=document.getElementById("catalogo");


function mostrarCatalogoVideos(videosMostrados) {
   catalogoVideos.innerHTML='';

   videosMostrados.forEach(function(indexVideo) {
      var divVideo=document.createElement('div');

      var col1Video=document.createElement('div');
      var urlVideo=document.createElement('video');

      divVideo.setAttribute('class','row mt-5');
      col1Video.setAttribute('class','col');

      urlVideo.setAttribute('src',indexVideo.url);
      urlVideo.setAttribute('width','400px');
      urlVideo.setAttribute('controls','');

      col1Video.appendChild(urlVideo);
      divVideo.appendChild(col1Video);

      var col2Titulo=document.createElement('div');
      var h4Titulo=document.createElement('h4');
      var h6Descripcion=document.createElement('h6');
      col2Titulo.setAttribute('class','col');

      h4Titulo.textContent=indexVideo.titulo;
      h6Descripcion.textContent=indexVideo.descripcion;

      col2Titulo.appendChild(h4Titulo);
      col2Titulo.appendChild(h6Descripcion);
      divVideo.appendChild(col2Titulo);


      catalogoVideos.appendChild(divVideo);
   });
}

function buscarVideos() {
   var contenidoBuscar= document.getElementById('buscar').value;
   var videosBuscados=listaVideos.filter(
      function (indexVideo){
         return indexVideo.titulo.toLocaleLowerCase().includes(contenidoBuscar);
      }
   );
   mostrarCatalogoVideos(videosBuscados);
}

mostrarCatalogoVideos(listaVideos);