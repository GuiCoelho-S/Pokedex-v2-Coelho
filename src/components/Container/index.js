import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 900px;
  min-width: auto;

  @media (max-width: 920px) {
    width: 100%;
  }
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const ContainerGrid = styled.main`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  margin-top: 20px;
  gap: 20px;
  width: 1200px;
  height: auto;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
