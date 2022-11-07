let pedacos = 8;
let comer = prompt('Deseja comer um pedaço de pizza ?');

do{
 pedacos > 0 && comer === "S" 
        pedacos--;
        comer = prompt('Deseja comer outro pedaço de pizza ?');
        alert(`Você tem ${pedacos} pedaços de pizza `);

        if(pedacos === 0){
            alert('Sua pizza acabou');
        }
}

while(comer === "N"){
    alert(`Restaram apenas ${pedacos} pedaços`)

}
