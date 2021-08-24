import {
  ContainerRodape,
  Dev,
  Informacoes,
  RedesSociais,
  GithubWhite,
  Netlify,
  Email,
  Linkedin
} from "./style";

import { Conteudo } from "../Container";

import LinkedinImg from "../../assets/images/linkedin-color_icon.png";
import GithubImgWhite from "../../assets/images/github-white_icon.png";
import NetlifyImg from "../../assets/images/netlify-white_icon.png";
import EmailImg from "../../assets/images/email_icon.ico";

import DevImg from "../../assets/images/dev_perfil.png";
const Rodape = () => {
  return (
    <ContainerRodape>
      <Conteudo>
        <Dev src={DevImg} alt="desenvolvedor foto" />
        <Informacoes>
          <h2>
            <center>Guilherme Santos Coelho</center>
          </h2>
          <h3>
            <center>Front end developer</center>
          </h3>
          <h4>
            <center>Estudante de ciência da computação São Judas</center>
          </h4>
        </Informacoes>
        <RedesSociais>
          <h3>Minhas redes</h3>
          <div>
            <Linkedin href="https://www.linkedin.com/in/guilherme-santos-coelho-1b7036210/" target="_blank">
              <img src={LinkedinImg} alt="linkedin icon" />
            </Linkedin>
            <GithubWhite href="https://github.com/GuiCoelho-S" target="_blank" >
              <img src={GithubImgWhite} alt="github icon" />
            </GithubWhite>
            <Netlify href="https://app.netlify.com/teams/guicoelho-s/overview" target="_blank">
              <img src={NetlifyImg} alt="" />
            </Netlify>
            <Email href="mailto:gs.coelho_dev@outlook.com" >
              <img src={EmailImg} alt="" />
            </Email>
          </div>
        </RedesSociais>
      </Conteudo>
    </ContainerRodape>
  );
};

export default Rodape;
