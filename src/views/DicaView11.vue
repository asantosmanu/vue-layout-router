<template>
    <div class="dica11">
    <p>Diversos estudiosos apontam a principal causa da Revolução Russa de 1917 como
sendo a insatisfação popular com o regime czarista, que se agravou com a participação da
Rússia na Primeira Guerra Mundial. Segundo Hobsbawm (1995), a participação da Rússia na
guerra aumentou a insatisfação popular com a situação econômica e social do país, levando a
uma série de protestos e manifestações.

De acordo com Fitzpatrick (1982), a crise econômica e social da Rússia também
contribuiu para a Revolução de 1917, visto que o país estava passando por uma fase de
recessão, escassez e desemprego. A autora destaca que a falta de apoio popular ao regime
czarista também foi uma questão relevante naquele momento histórico.</p>

    <img src="https://oestadodaarte.com.br/wp-content/uploads/2017/11/Poster.jpg?w=640" alt="" class="img11">
    </div>

    <button class="bt" @click="$router.push({name: 'perguntas'})">Pergunta</button>
</template>

<style scoped>
.img11{
    width: 700px;
    height: 400px;
    display: flex;
    border-radius: 25px;
    }
    .bt{
    border-radius: 10%;
    
}
</style>