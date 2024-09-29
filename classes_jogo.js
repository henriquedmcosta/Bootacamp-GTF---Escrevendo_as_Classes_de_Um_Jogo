class personagem{
    constructor (nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

    
    atacar(){
        let ataque
        if (this.tipo === "maga"){
            ataque = "magia";
        } else if (this.tipo === "guerreiro"){
            ataque = "espada";
        } else if (this.tipo === "monge"){
            ataque = "artes marciais";
        } else if (this.tipo === "ninja"){
            ataque = "shuriken";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


let personagens = [
    new personagem("Noele", " 150 anos", "maga"),
    new personagem("Asta", "17 anos", "guerreiro"),
    new personagem("Satoro", "25 anos", "monge"),
    new personagem("Snake Ice", "18 anos", "ninja")
];


for (let personagem of personagens) {
    personagem.atacar();
}