import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  
`;

export const Conteudo = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 900px;


  @media (max-width: 920px) {
    width: 100%;
  }
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const ContainerGrid = styled.main`
padding:20px 0;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, auto));
  gap: 10px;
  width: 1200px;
  height: auto;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
