const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Carlos" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" }
]

for (let pos = 0; pos < participantes.length; pos++) {
    if(participantes[pos].nome === "Carlos"){
        console.log(`Galera... O ${participantes[pos].nome} está na posição ${pos + 1}, corre lá!`)
    }
    
}