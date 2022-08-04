var elemento_video_foco;

function preview(elemento){
   elemento.play();
}

function stoppreview(elemento){
      elemento.pause();
  }

function repvid(elemento){
    var video_principal;
    var titulo_principal;
    if (elemento_video_foco != undefined && elemento_video_foco != null){
      if (elemento_video_foco != elemento){
           elemento_video_foco.style.border = "3px solid black"; }
    }
       video_principal = document.getElementById("playervideo");
       video_principal.src = elemento.src;
       titulo_principal = document.getElementById("playervideo_name");
       titulo_principal.innerText = elemento.title;
       elemento_video_foco = elemento;
       elemento_video_foco.style.border = "3px solid #9D0BFF"; 

  }
