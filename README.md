<header>
    <center>
        <h1>Pokedex ReactJS</h1>
        <h2>🚧 Status: projeto finalizado ✅ </h2>
        <img src="./github/gif/eevee_md.gif" />
    </center>
</header>
<br>
<h2>Tecnologias utilizadas 💻 </h2>

* [Javascript](#https://www.javascript.com/)
* [HTML 5](#https://html.com/html5/)
* [CSS 3](#https://www.w3.org/Style/CSS/Overview.en.html)
* [ReactJS](#https://pt-br.reactjs.org/)
  
<h2>Bibliotecas usadas 🗂</h2>

* [React Router DOM](#https://www.npmjs.com/package/react-router-dom)
* [StyledComponents](#https://styled-components.com/)

<h2 align="center">Sumário</h2>


- <a href="#sobre" style="color:#2782dd"><h3>Sobre</h3></a>
- <a href="#rotas" style="color:#2782dd"><h3>Rotas</h3></a>
- <a href="#api" style="color:#2782dd"><h3>API</h3></a>
-  <a href="#requisitos" style="color:#2782dd"><h3>Requisitos</h3></a>
</br>
</br>
<h2 style="color:#ffe811">Metas</h2>


         [x] Entender como funciona a pokeAPI               ✅
         [x] Requisições assíncronas                        ✅
         [x] Ciclo de vida dos componentes no React         ✅
         [x] Renderização da página com useEffect           ✅
         [x] Componentes estilizados com styled components  ✅
         [x] Gerenciamento de rotas dentro do App           ✅   
<br>
<br>
<br>
<br>
<br>
<br>


## Sobre
<article>
Este projeto cosiste em criar uma pokedex, ou seja, uma listagem de pokemons com base na PokeAPI, que lista uma infinidade de dados para que seja possível mostrar a parte visual do projeto. Segue uma amostra divididas em duas partes de como a pokedex funciona:
<br>
<br>
<Strong>
<h4>Pokedex</h4>
<p>
A primeira parte, retorna 150 pokemons para o usuário poder ver informações gerais. Como o peso, altura e seus atributos:
</p>
<img src="./github/images/Amostra01.png" />
<br>

<br>Já a segunda página, retorna o pokemon específico digitado pelo usuário. Mostrando mais sobre o pokemon escolhido:
<br>
<img src="./github/images/Amostra02.png"/>

</strong>
</article>
</br>
</br>

## Rotas
Para que seja possível navegar em uma SPA (Single PAge Aplication) é necessário que tenha certos caminhos que o desenvolvedor deve fazer para retornar sempre uma única página. A biblioteca React Router DOM ajuda nesse processo, com o uso correto da ferramenta, é possívelindicar rotas que no fim gera uma página somente.<br> Abaixo, mostro o circuito de rotas que desenvolvi nessa aplicação:
</br>

<img src="./github/images/caminho_de_rotas.png" />


</br>
</br>
O app.js renderiza a árvore de componentes, o que aparece na tela. Pórem é o componente <strong>AppRouter</strong> que selecionará qual componente deve ser renderizado, a partir da url local, para navegar entre as páginas, basta usar um componente da prórpia biblioteca Router DOM chamado <.Link>. Para usá-lo basta inserí-lo dessa forma:
<br>
 < Link  to="/caminho_Page">Clique aqui<br / Link> </br>
</br>
</br>

## API

## Requisitos