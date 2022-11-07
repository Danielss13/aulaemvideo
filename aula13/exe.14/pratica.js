function carregar(){

let msg= document.getElementById("msg");
let img= document.getElementById("imagem");
let data = new Date();
let hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas`

if(hora >= 0 && hora < 12){
    alert (`Bom dia!}`);
    img.src = "fotomanha.png"
    document.body.style.background ='#C3B530'

}else if(hora >= 13 && hora < 18){
    alert (`Boa tarde!`);
    img.src = "fototarde.png"
    document.body.style.background ='#9A827F'

}else{
    alert (`Boa noite!`);
    img.src = "fotonoite.png"
    document.body.style.background = '#312A33'
}

}

