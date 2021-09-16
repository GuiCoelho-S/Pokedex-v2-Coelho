import { ContainerGrid } from "../../components/Container";
import {
  Aviso,
  ContainerMain,
  ConteudoMain,
  Procurar,
  ProcurarPokemon,
  Title,
} from "./style";
import Card from "../../components/Card";
import { useNomePokemons } from "../../hooks/usePokemon";
import { useState } from "react";
import api from "../../services/api";
import { useEffect } from "react";
import { FireworkSpinner } from "react-spinners-kit";
import { ContainerLoading } from "../Pokemon/style";
const Home = () => {
  const { pokemonData } = useNomePokemons();
  const [pokemonName, setPokemonName] = useState('pikachu');
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  var arr = [];
  arr.push(pokemonData);


  function loadingHidden() {
    setLoading(false);
  }

  useEffect(() => {
    var pokemon = pokemonName.toLowerCase();
    async function getID(){
    await api.get(`/pokemon/${pokemon}`)
    .then((dados) => setId(dados.data))
  }
    setTimeout(getID(), 1000)
    setTimeout(loadingHidden,2000);
  },[pokemonName])
  

  console.log(id)

  return (
    <ContainerMain>
      {
        loading ? (
          <ContainerLoading>
              <FireworkSpinner size={60} color="#f00" loading={loading} />
          </ContainerLoading>
          )
        : (
      <ConteudoMain>
        <Title><center>Saiba mais sobre seu pokemon favorito</center></Title>
        <article>
          <ProcurarPokemon
            type="text"
            placeholder="Digite aqui..."
            onMouseOut={(e) => {
              setPokemonName(e.target.value);
            }}
          />
          <Procurar
            to={`/pokemon/${id.id}`}
            onCLick={setTimeout(1000)}
          ><p>Procurar</p></Procurar>
        </article>
        <Aviso><p>Para que o programa funcione de forma correta, não utilize espaços para pesquisar o pokemon. Caso você esteja em um celular, após digitar, clique nessa box, depois clique no botão Procurar.
        Essa api funciona corretamente com os 190 primeiros pokemons, caso queira procurar outros pokemons, pode acontecer erros inesperados.</p></Aviso>
        <ContainerGrid>
          {arr.map((index) => {
            return <Card key={index} />;
          })}
        </ContainerGrid>
      </ConteudoMain>)
    }
    </ContainerMain>
  );
};
export default Home;
