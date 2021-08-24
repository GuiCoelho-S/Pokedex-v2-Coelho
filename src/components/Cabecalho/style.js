import styled from "styled-components";
import { Container } from "../Container";

export const ContainerCabecalho = styled(Container)`
  background-color: whitesmoke;
  margin: 0 auto;
`;

export const PokemonLogo = styled.img`
  width: 180px;
  

  @media (max-width: 720px) {
    display: none;
  }
`;
export const TitleContent = styled.div`
  div {
    display: flex;
    justify-content: center;
  }
`;
export const Title = styled.h1`
  padding-top: 10px;
  text-align: center;
`;

export const Turtwig = styled.img`
  width: 100px;
`;

export const PokemonIcon = styled.a`
  padding: 10px;
  img {
    width: 44px;
  }
`;

export const Github = styled.a`
  padding: 10px;
  img {
    width: 40px;
  }
`;
