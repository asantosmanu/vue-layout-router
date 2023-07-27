<template>

    <div class="dica2">
    <p>Segundo Oliveira (2010), o evento que marcou o início da Revolução Francesa foi
a convocação dos Estados Gerais em 1789. Esse evento foi convocado pelo rei Luís XVI com o
objetivo de solucionar a crise financeira em que se encontrava o país. No entanto, a convocação
dos Estados Gerais foi acompanhada por uma série de protestos e manifestações populares que
expressavam o descontentamento da população francesa com a monarquia absolutista. Oliveira
(2010) destaca que a convocação dos Estados Gerais foi um ponto de inflexão na história da
França, que levou à formação da Assembleia Nacional Constituinte e à elaboração de uma nova
Constituição para o país. A Revolução Francesa teve um impacto profundo na história d o mundo
ocidental, e seus ideais de liberdade, igualdade e fraternidade continuam a influenciar o
pensamento político e social até os dias de hoje.</p>

    <img src="https://static.historiadomundo.com.br/2021/05/revolucao-francesa.jpg" alt="" class="img2">
    </div>

    <button class="bt" @click="$router.push({name: 'perguntas'})">Pergunta</button>
</template>

<style scoped>
.img2{
    width: 700px;
    height: 400px;
    display: flex;
    border-radius: 25px;
    }
 .bt{
    border-radius: 10%;
    
}
</style>