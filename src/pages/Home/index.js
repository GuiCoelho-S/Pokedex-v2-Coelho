import { ContainerGrid } from "../../components/Container";
import {
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

const Home = () => {
  const { pokemonData } = useNomePokemons();
  const [pokemonName, setPokemonName] = useState('pikachu');
  const [id, setId] = useState(1);
  //var pokemon = pokemonName.toLowerCase()
  var arr = [];
  arr.push(pokemonData);


  

  useEffect(() => {
    async function getID(){
    await api.get(`/pokemon/${pokemonName}`)
    .then((dados) => setId(dados.data))
  }
    getID()
  },[pokemonName])
  

  //console.log(id)

  return (
    <ContainerMain>
      <ConteudoMain>
        <Title>Saiba mais sobre seu pokemon favorito </Title>
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
          
          ><p>Procurar</p></Procurar>
        </article>
        <ContainerGrid>
          {arr.map((index) => {
            return <Card key={index} />;
          })}
        </ContainerGrid>
      </ConteudoMain>
    </ContainerMain>
  );
};
export default Home;
