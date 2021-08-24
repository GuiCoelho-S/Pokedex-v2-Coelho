import { Switch, Route } from "react-router";
import { Container } from "../../components/Container";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Home from "../Home";
import Error404 from "../Error404";
import Pokemon from "../Pokemon";
import PokemonProvider from "../../hooks/usePokemon";


const AppRouter = () => {
  return (
    <Container>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <PokemonProvider>
            <Home />
          </PokemonProvider>
        </Route>

        <Route path="/pokemon/:id">
          <Pokemon />
        </Route>

        <Route>
          <Error404 />
        </Route>
      </Switch>
      <Rodape />
    </Container>
  );
};

export default AppRouter;
