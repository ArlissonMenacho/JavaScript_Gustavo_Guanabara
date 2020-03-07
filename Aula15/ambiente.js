let num =[5,8,4] // vetor
num[3] = 6 // insere o valor 6 na prosição 3 do vetor
num.push(7) // insere um item o final do vetor
num.sort() // organiza os numeros em crescente
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} possições`)
console.log(`O primeiro valor do vetor é ${0}`)


for(let c=0; c < num.length;c++){
    console.log(`Posição ${c} tem o valor ${num[c]}.`)
}


for(let pos in num){ // for in = significa que para cada posição em num será escrito o console.log
    console.log(num[pos])
}

num.indexOf(7)
let pos = num.indexOf(4)
if(pos==-1){
    console.log('O valor não foi encontra!')
}else{
    console.log(`O valor está na prosição ${pos}`)
}