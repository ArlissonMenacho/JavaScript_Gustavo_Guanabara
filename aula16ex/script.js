function calcular(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('texto')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`Erro nos dados informados.`)
        res.innerHTML='Impossivel contar'
    }else{
        res.innerHTML =`Contando :`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(passo <= 0){
            window.alert('Passo Inválido! Considerado Passo 1')
            p=1;
        }

        if(i<f){
            for(let c=1; c <= f; c+= p){
                res.innerHTML +=`_${c}\u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
        else{
            for(let c=i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        
    }

   

/* 
while(inicio.value<=fim.value){
    inicio.value = inicio.value + passo.value;
    res.innerText = `A, ${passo.value}`;
} */

   
    

}