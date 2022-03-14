/*
    Quando clicar em outro pokemon, escondemos o pokemon aberto e mostramos o cartão do pokemon selecionado na lista

    Trabalhar com 2 elementos
    1 - Listagem
    2 - Cartão Pokemon

    precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

    Precisamos trabalhar com evento de click feito pelo usuário na listagem dos pokemons
    
    - remover a classe 'aberto' do pokemon que estava em aberto
    - Adicionar a classe 'aberto' do pokemon selecionado atráves do click da listagem, Pegando seu ID
    - Remover a classe 'ativo' que marca o pokemon selecionado
    - adicionar a classe 'ativo' no item da lista selecionado
*/

//precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard =document.querySelectorAll('.cartao-pokemon')

//Precisamos trabalhar com evento de click feito pelo usuário na listagem dos pokemons
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonSelecionado = document.getElementById(cartaoAbrir)
        cartaoPokemonSelecionado.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })

})