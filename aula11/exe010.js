function naturalidade(){
    let n = window.document.querySelector('input#n');
    let res = window.document.querySelector('div#res');
    res.innerHTML += `<p> Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
    if(n != b) {
       res.innerHTML += ` <p>Você está <strong>MULTADO</strong> Por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
    
    }
