import { Link } from "react-router-dom"
import styled from "styled-components"

export const Button = styled(Link)`
background-color:white;
transition-property: background-color, font-size;
outline:none;
padding:20px;
text-decoration: none;
display:grid;
align-items:center;
justify-content:center;
* {
  color:red;
}
transition-duration: 0.9s;
  &:hover{
    background-color: red;
    color:white;
    scale:1;
    font-size:16px;   
    
    * {
      color:white;
    }
}`