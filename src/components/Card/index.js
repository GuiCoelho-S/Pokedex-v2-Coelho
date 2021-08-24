import { useNomePokemons } from "../../hooks/usePokemon";
import {
  ContainerCard,
  Nome,
  ImagemPokemon,
  PokemonAltPeso,
  InfoPokemonBase,
  GridPokemon,
  Icon,
  DadosGerais,
} from "./style";

import AttackRoute from "../../assets/icons/attack_icon.svg";
import HeartRoute from "../../assets/icons/heart_icon.svg";
import ShieldRoute from "../../assets/icons/shield_icon.png";
import ThunderRoute from "../../assets/icons/thunder_icon.png";




const Card = () => {
  const { pokemonData } = useNomePokemons(); 
  
  return (
    <>
      {pokemonData.map((pokemon, index) => (
        <ContainerCard key={index}>
        <DadosGerais>
         <Nome>{pokemon.name}</Nome>
          <ImagemPokemon src={pokemon.sprites.other.dream_world.front_default}></ImagemPokemon>
          <PokemonAltPeso>
            <p>{`Altura: ${(pokemon.height)/10} m`}</p>
            <p>{`Peso: ${(pokemon.weight)/10} kg`}</p>
          </PokemonAltPeso>

          <InfoPokemonBase>
            <div>
              <GridPokemon>
                <div>
                  <Icon src={AttackRoute} />
                  <p>{pokemon.stats.[1].base_stat}</p>
                  <Icon src={HeartRoute} />
                  <p>{pokemon.stats.[0].base_stat}</p>
                </div>
                <div>
                  <Icon src={ThunderRoute} />
                  <p>{pokemon.stats.[5].base_stat}</p>
                  <Icon src={ShieldRoute} />
                  <p>{pokemon.stats.[2].base_stat}</p>
                  
                  
                </div>
              </GridPokemon>
              
              
            </div>
          </InfoPokemonBase>
            
          </DadosGerais>
          
        </ContainerCard>
      ))}
      </>
  
  );
};

export default Card;

/*pokemon.sprites.other.dream_world.front_default*/

