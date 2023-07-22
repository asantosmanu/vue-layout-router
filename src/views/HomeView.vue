<script setup>

</script>

<template>
  <h1>Perguntas</h1>
  <div class="opcao">
     <h2>1)Qual foi o evento que desencadeou o início da Primeira Guerra Mundial?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> A) O assassinato do arquiduque Franz Ferdinand da Áustria em Sarajevo
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> B) A entrada dos Estados Unidos na guerra
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> C) A declaração de guerra da Alemanha à França
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> D) O bombardeio de Belgrado pelas forças austro-húngaras
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> E) A invasão alemã da Bélgica
        <button @click="$router.push({name: 'dica1'})">Dica</button>
        <hr>
        <h2>2)Qual foi o evento que marcou o início da Revolução Francesa?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) A queda da Bastilha
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) A execução do rei Luís XVI
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) A Declaração dos Direitos do Homem e do Cidadão
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> D) A convocação dos Estados Gerais
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) A eleição da Assembleia Nacional Constituinte
        <button @click="$router.push({name: 'dica2'})">Dica</button>
        <hr>
        <h2>3)Qual foi o principal conflito militar da Guerra Fria?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) A Guerra da Coreia
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) A Guerra do Vietnã
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) A Crise dos Mísseis de Cuba
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) A Guerra das Malvinas
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) A Invasão do Afeganistão
        <button @click="$router.push({name: 'dica3'})">Dica</button>
        <hr>
        <h2>4)Qual foi o principal objetivo dos Estados Unidos na Guerra do Vietnã?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) Proteger a independência do Vietnã do Sul
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) Combater o comunismo no sudeste asiático
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) Apoiar a reunificação pacífica do Vietnã
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) Estabelecer uma base militar permanente no Vietnã
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) Proteger os interesses econômicos dos Estados Unidos na região
        <button @click="$router.push({name: 'dica4'})">Dica</button>
        <hr>
        <h2>5)Qual foi a principal motivação dos europeus para a colonização das Américas?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) Expandir o cristianismo
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) Estabelecer bases para o comércio de especiarias
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) Encontrar novas rotas comerciais para a Ásia e ouro e prata
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) Expandir a religião e o mercado em busca de matérias primas, ouro e prata
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) Encontrar novas terras para a população europeia excedente
        <button @click="$router.push({name: 'dica5'})">Dica</button>
        <hr>
        <h2>6) Qual foi o papel da Igreja Católica na Idade Média?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) A Igreja exerceu um papel político significativo, controlando a maioria das nações
        europeias
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) A Igreja limitou-se a exercer uma função religiosa, sem influência política
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) A Igreja promoveu o avanço da ciência e da tecnologia na Europa medieval
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) A Igreja desencorajou a educação e a pesquisa científica na Idade Média
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) A Igreja foi responsável pela queda do Império Romano do Ocidente
        <button @click="$router.push({name: 'dica6'})">Dica</button>
        <hr>        
        <h2>7)Qual foi o impacto da Guerra dos Cem Anos na Europa Medieval?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) A guerra levou a uma ruptura na unidade política da Europa Medieval
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) A guerra consolidou a hegemonia francesa na Europa
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) A guerra levou a uma expansão territorial significativa para a Inglaterra
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) A guerra não teve impacto significativo na política europeia
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) A guerra foi responsável pelo surgimento de um sistema de governo
        representativo
        <button @click="$router.push({name: 'dica7'})">Dica</button>
        <hr>        
        <h2>8)Qual era a principal fonte de subsistência dos maias?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) Mineração
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) Pesca
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) Caça
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) Comércio
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) Agricultura
        <button @click="$router.push({name: 'dica8'})">Dica</button>
        <hr>        
        <h2>9)Qual era o deus mais importante da religião asteca?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) Tlaloc
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) Quetzalcóatl
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) Huitzilopochtli
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) Xipe Totec
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) Tezcatlipoca
        <button @click="$router.push({name: 'dica9'})">Dica</button>
        <hr>        
        <h2>10)Qual foi o imperador Inca responsável pela expansão máxima do Império Inca?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) Pachacuti
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) Tupac Amaru
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) Huayna Capac
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) Manco Inca
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) Atahualpa
        <button @click="$router.push({name: 'dica10'})">Dica</button>
        <hr>        
        <h2>11)Qual foi a principal causa da Revolução Russa de 1917?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) O descontentamento com o governo czarista e sua política autoritária
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) A crise econômica e a fome que assolavam o país
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) A influência dos ideais socialistas e a luta pela igualdade social
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) A participação russa na Primeira Guerra Mundial
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) Todas as alternativas acima
        <button @click="$router.push({name: 'dica11'})">Dica</button>
        <hr>        
        <h2>12)Qual foi a principal consequência da Revolução Russa de 1917?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) A abertura da economia russa ao capitalismo ocidental
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) A criação e desenvolvimento do Estado socialista soviético em outras partes do
        mundo
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) O fim da Primeira Guerra Mundial
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) O estabelecimento da monarquia czarista
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) Todas as alternativas anteriores estão incorretas
        <button @click="$router.push({name: 'dica12'})">Dica</button>
        <hr>        
        <h2>13)Qual foi a principal característica do Renascimento?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) A centralização do poder monárquico.
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) O surgimento da imprensa.
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) A valorização da cultura greco-romana.
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) A difusão da religião protestante.
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) A expansão marítima e comercial.
        <button @click="$router.push({name: 'dica13'})">Dica</button>
        <hr>       
        <h2>14)Qual foi a principal causa da queda do Império Romano?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) A invasão dos povos bárbaros.
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) A crise econômica, o aumento dos impostos e a invasão dos povos bárbaros.
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) A instabilidade política e a corrupção.
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) A propagação do cristianismo.
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) O enfraquecimento do exército romano.
        <button @click="$router.push({name: 'dica14'})">Dica</button>
        <hr>        
        <h2>15)Qual das seguintes dinastias não fez parte do Império Romano?</h2>
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        A) Dinastia Antonina
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        B) Dinastia Severa
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        C) Dinastia Han
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        D) Dinastia Julio-Claudiana
        <input class="border" type="radio" v-on:keypress="ok = false" v-model="h1" value="OPCOES" /> 
        E) Dinastia Tang
        <button @click="$router.push({name: 'dica15'})">Dica</button>
        <hr>
        <button @click="$router.push({name: 'about'})">Ir para sobre</button>
  </div>
</template>

<style scoped>
.opcao {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>

