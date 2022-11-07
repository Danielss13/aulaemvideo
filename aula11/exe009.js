function calcular(){
let txtv = window.document.querySelector('input#txtvel');
let res = window.document.querySelector('div#res');
res.innerHTML += `<p> Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
if(vel > 60) {
   res.innerHTML += ` <p>Você está <strong>MULTADO</strong> Por excesso de velocidade</p>`
}
res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`

}