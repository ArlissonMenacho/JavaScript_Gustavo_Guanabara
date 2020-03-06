function carregar(){
    var msg= window.document.getElementById("msg")
    var img= window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()    
    if(hora >= 0 && hora< 12){
        //Bom dia
        img.src = 'foto-manha.png'
        document.body.style.background ="#e2cd9f"
        msg.innerHTML = `Bom dia, agora são ${hora} horas.`
    }
    else if(hora>= 12 && hora < 18){
        //Boa Tarde
        img.src = 'foto-tarde.png'
        msg.innerHTML = `Bom Tarde, agora são ${hora} horas.`
        document.body.style.background="#b9846f"
    }
    else{
        //Boa Noite
        img.src='foto-noite.png'
        msg.innerHTML = `Bom Noite, agora são ${hora} horas.`
        document.body.style.background ="#515154"
    }
}