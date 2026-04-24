let favoriteGames = [
    {id: 1, title: "The Whitcher", genre: "RPG", year:"2015"},
    {id: 2, title: "Red Dead Remdemption", genre: "RPG", year:"2018"},
    {id: 3, title: "CS-GO", genre: "FPS", year:"2001"}
]


// Listando os itens
favoriteGames.forEach(game => {
    console.log(`Titulo: ${game.title}, Gênero: ${game.genre}, Ano: ${game.year}`)
})



// adicionando um item no final do array

console.log("\n\n\n");
favoriteGames.push({id: 4, title: "League of Legends", genre: "Moba", year:"2011"});

favoriteGames.forEach(game => {
    console.log(`Titulo: ${game.title}, Gênero: ${game.genre}, Ano: ${game.year}`)
})



//atualizando um item no array
console.log("\n\n\n");
let gameUpdate = favoriteGames.find(favoriteGames => favoriteGames.id === 3);

if(gameUpdate){
    gameUpdate.genre = "Tira em primeira pessoa";
    console.log(`Filme atualizado: ${gameUpdate.title}, gênero: ${gameUpdate.genre}`)
}

favoriteGames.forEach(game => {
    console.log(`Titulo: ${game.title}, Gênero: ${game.genre}, Ano: ${game.year}`)
})


//removendo um item do array

console.log("\n\n\n");

let index = favoriteGames.findIndex(favoriteGames => favoriteGames.id === 4);

if(index!== -1){
    favoriteGames.splice(index,1);
    console.log("game removido \n");
}

favoriteGames.forEach(game => {
    console.log(`Titulo: ${game.title}, Gênero: ${game.genre}, Ano: ${game.year}`)
})