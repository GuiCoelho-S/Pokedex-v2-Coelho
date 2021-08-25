import { ContainerMain } from "../Home/style"
import { Conteudo404, PikachuTriste,  MessageError } from "./style"
import PikachuConfusoRoute from "../../assets/images/pikachu_404.png"
import { Button } from "../../components/Button"

const Error404 = () => {
    return(
        <ContainerMain>
           <Conteudo404>
               <MessageError>Ops... ocorreu um erro, página não encontrada</MessageError>
               <PikachuTriste src={PikachuConfusoRoute}/>
               <Button to="/">Página Principal</Button>
           </Conteudo404>
        </ContainerMain>
    )
}
export default Error404