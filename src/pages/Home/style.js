
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Container, Conteudo } from "../../components/Container";

export const ContainerMain = styled(Container)`
  background-color: pink;
`;
export const ConteudoMain = styled(Conteudo)`
  margin: 20px auto;
  flex-direction: column;
  width:1200px;
  height:120%;
  @media (max-width:1200px){
    width:100%;
  }
  article {
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    width:500px;

    @media (max-width:480px){
      width:94%;
      flex-direction:column;
      align-items:center;
    }
  }
`;


export const Title = styled.h3`
  color: #f00;
  font-size:30px;
  padding: 20px ;
  align-self: flex-start;
  align-self: center;
`;

export const ProcurarPokemon = styled.input`
width:320px;
height: 40px;
padding-left:20px;
border: 1px solid #f00;
border-radius: 15px;
font-size:14px;
outline: none;
`
export const Procurar = styled(Button)`
margin-top:5px;
width:120px;
height: 60px;
border-radius:18px;
`