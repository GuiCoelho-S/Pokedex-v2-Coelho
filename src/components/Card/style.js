import styled from "styled-components";
import { Button } from "../Button";

export const InfoPokemonBase = styled.div`
  display: none;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100px;
    width: 260px;
    align-items: center;
  }
`;

export const Nome = styled.h2``;
export const ImagemPokemon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: pink;
  object-fit:cover;
  transition-property: height,width;
  transition-duration: 0.4s;
`;
export const DadosGerais = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`



export const PokemonAltPeso = styled.div`
  display: flex;
  width: 250px;
  
  flex-direction: row;
  justify-content: space-between;
  
  p {
    padding: 10px;
  }
`;

export const GridPokemon = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Icon = styled.img`width:30px;`

export const ButtonInfo = styled(Button)`

`

export const ContainerCard = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: white;
  transition-property: height;
  transition-duration: 0.7s, 0.8s;
  z-index:10;
  &:hover ${InfoPokemonBase} {
    display: block;
  }
  
  &:hover {
    
    height:320px;
  }
  &:hover ${ImagemPokemon}{
    width:140px;
    height: 140px;
  }
  
`;