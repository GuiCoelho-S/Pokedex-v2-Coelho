import styled from "styled-components";
import { Container} from "../Container";

export const ContainerRodape = styled(Container)`
  background-color: black;
  color: white;
  padding: 10px;
  
`;


export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:0px 20px;
  height: 100%;
 
  h4 {
      color:cyan;
  }

  @media (max-width:720px){
    h2 {
      font-size:20px;
    }
  }
`;

export const RedesSociais = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content: space-evenly;
height: 120px;
width:300px;

h3 {
  @media (max-width:720px){
    display:none;
  }
}
div {
    width:100%;
    padding: 0 20px;
    display:flex;
    justify-content: space-evenly;
    align-items:center;
    img {
        height: 50px;
        width: 50px;
    }
    @media (max-width:700px){
      h4 {
        font-size:18px;
      }
    }
    
}
`
export const Dev = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;

  
`;

export const Netlify = styled.a``;
export const Email = styled.a``;
export const GithubWhite = styled.a``;
export const Linkedin = styled.a``;