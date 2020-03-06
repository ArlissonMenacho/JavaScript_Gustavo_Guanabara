function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res =document.getElementById("res")
    if(fano.value.length == 0 || fano.value > ano ){
        window.alert('[ERRO] Confira os dados e tente novamente!')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if(fsex[0].checked){
           genero = 'Homem'
           if(idade < 12){
            // criança
            img.setAttribute('src', 'menino.png')
           }else if(idade > 12 && idade< 40){
            //Jovem / adulto
            img.setAttribute('src','homem.png')
           }else if(idade > 40 ){
            //Idoso
            img.setAttribute('src','idoso.png')
           }
        
       }else{
           genero = 'Mulher'
           if(idade < 12){
            //Criança
            img.setAttribute('src','menina.png')
        }else if(idade > 12 && idade<40){
            //Jovem / Adulta
            img.setAttribute('src','mulher.png')
        }else if(idade > 40 ){
            //Idosa
            img.setAttribute('src','idosa.png')
        }
       }       
      // window.alert(`Você é ${genero} com ${idade} anos.`)
      res.style.textAlign="center";
      res.innerHTML =`Você é ${genero} e tem ${idade} anos.`
      res.appendChild(img)
    }
}