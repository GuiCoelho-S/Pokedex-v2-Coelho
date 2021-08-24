import styled from "styled-components";
import { Button } from "../../components/Button";
import { ContainerMain } from "../Home/style";

export const ContainerLoading = styled.div`
width:100%; height:80vh;
display:grid;
align-items:center;
justify-content: center;
`
export const Container = styled.main`
  width: 100%;
  display:grid;
  align-items:center;
  justify-content: center;
  background: rgb(252,255,248);
  background: linear-gradient(250deg, rgba(252,255,248,1) 0%, rgba(129,133,212,0.4107678016919768) 0%, rgba(205,248,255,1) 39%);

`;

export const ContainerPokemon = styled(ContainerMain)`
  padding: 40px 0;
  width: auto;
  height: 100%;
  margin: 0 auto;
  height: auto;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border:none;
`;
export const Nome = styled.p`
  text-align: center;
  font-size: 20px;
`;
export const Informacoes = styled.header`
  width: 680px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  
 
  div {
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:space-evenly;
      @media (max-width:660px){
          flex-direction: column;
      }

    
  }
  @media (max-width:660px){
      width:100%;
      flex-direction: column;
  };

  @media (max-width:470px){
    flex-direction: column;
  }
`
export const ContainerButton = styled.div`
display:flex;
width:100%;
flex-direction: row;
justify-content: space-between;
`
export const ButtonId = styled(Button)`
width:50px;
height: 50px;
border-radius:50%;
display:flex;
justify-content: center;
align-items:center;
background-color: tomato;
font-size:16px;
outline:none;
border:none;
`
export const HomePage = styled(Button)`
width:70px;
border:none;
background-color:blue;
color:white;
align-self:flex-end;
text-decoration:none;
padding:10px 5px;
border-radius: 10px;
display: flex;
* {
  align-items:center;
}`
export const Imagem = styled.img`
  width: 220px;
  height: 220px;
  object-fit: contain;
`;
/*Estilização do container Informacoes*/

export const CaracteristicasGrid = styled.article`
  width: 400px;
  height: auto;
  display:flex;
  padding: 30px 0;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center;
  align-self: center;
  
  @media (max-width:660px){
      width:94%;
  }
`;
export const Type = styled.aside`
margin:0 auto;
display:flex;
flex-direction:column;
justify-content: space-evenly;
width:260px;
height:100px;

align-items:center;
div {
    width:96%;
    display:flex;
    flex-direction: row;
    justify-content: center;

    *{
      padding:5px;
    }

    p {
        font-size:14px;
        padding-left:6px;
        color:red;
    }

    @media (max-width: 650px){
      width:300px;
      flex-flex-direction:column;
      
    }
}


@media (max-width:660px){
    width:100px;
    height:100%;
    
}`

export const Geracao = styled.div`
background-color:grey;
padding:5px 10px;
color:white;
border-radius:13px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight:bold;`

export const Efeito = styled(Geracao)`
background-color: transparent;
color:black;
font-weight: 300;
width:95%;
display:flex;

div {
  width:100%;
  align-items:flex-start;
}

p {
  color:red;
  align-self: start;
}
`

export const Status = styled.aside`
padding:12px 0;
width:100%;
height:auto;
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
div {
  background-color: #f2cc84;
  border-radius:50%;
  display: flex;
  flex-direction: column;
  height:50px;
  width: 50px;
  align-items:center;
  p {
    color:black;
    font-size:12px;
  }
}`

export const Icon = styled.img`width:30px; height: 30px;`