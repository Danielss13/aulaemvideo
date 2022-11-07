let idade = 70;
if (idade < 16){
    console.log('Não vota');
} else if (idade < 18 || idade > 65) {
    //se idade for maior ou igual a 16 e idade menor que 18. voto opcional 
        console.log('Voto opcional')
}else {
    console.log ('Voto obrigatorio')
}  