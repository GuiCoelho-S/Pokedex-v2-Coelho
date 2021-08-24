import {
  ContainerCabecalho,
  PokemonLogo,
  TitleContent,
  Title,
  Github,
  PokemonIcon,
  Turtwig,
} from "./style";

import { Conteudo } from "../Container"
import PokemonLogoImg from "../../assets/images/pokemon_logo.png";
import TurtwigImg from "../../assets/images/turtwig.png";
import PokemonIconImg from "../../assets/images/pokemon_icon.png";
import GithubImg from "../../assets/images/github_logo.png";
const Cabecalho = () => {
  return (
    <ContainerCabecalho>
      <Conteudo>
        <PokemonLogo src={PokemonLogoImg} />
        <TitleContent>
          <Title>A sua pokedex em ReactJS</Title>
          <div>
            <Github href="https://github.com/GuiCoelho-S/PokedexReact-Coelho" target="_blank">
              <img src={GithubImg} alt="github icon" />
            </Github>
            <PokemonIcon href="https://pokeapi.co/docs/v2" target="_blank">
              <img src={PokemonIconImg} alt="linkedin icon" />
            </PokemonIcon>
          </div>
        </TitleContent>
        <Turtwig src={TurtwigImg} />
      </Conteudo>
    </ContainerCabecalho>
  );
};

export default Cabecalho;
