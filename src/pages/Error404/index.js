import { Link } from "react-router-dom"
import { ContainerMain } from "../Home/style"
import { Conteudo404, PikachuTriste, Button404, MessageError } from "./style"
import PikachuConfusoRoute from "../../assets/images/pikachu_404.png"

const Error404 = () => {
    return(
        <ContainerMain>
           <Conteudo404>
               <MessageError>Ops... ocorreu um erro, página não encontrada</MessageError>
               <PikachuTriste src={PikachuConfusoRoute}/>
               <Button404>
                   <Link to="/">Página principal</Link>
               </Button404>
           </Conteudo404>
        </ContainerMain>
    )
}
export default Error404