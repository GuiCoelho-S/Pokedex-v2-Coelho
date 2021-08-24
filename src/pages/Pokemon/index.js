import axios from "axios";
import {
  ContainerPokemon,
  Container,
  Informacoes,
  Imagem,
  CaracteristicasGrid,
  Type,
  Geracao,
  Efeito,
  Status,
  ContainerLoading,
  ContainerButton,
  ButtonId,
  Icon,
  HomePage
} from "./style";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Nome } from "../../components/Card/style";
import { FireworkSpinner } from "react-spinners-kit";
import LeftAngle from "../../assets/icons/angle-left-solid.svg"
import RightAngle from "../../assets/icons/angle-right-solid.svg"

const Pokemon = () => {
  var { id } = useParams();
  const idA = parseInt(id)
  const [idHandle, setIdHandle] = useState(idA)
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState([]);
  const [ability, setAbility] = useState([]);
  const [location, setLocation] = useState([]);

  

  function loadingHidden() {
    setLoading(false);
  }

  useEffect(() => {
    async function getData() {
      const requestOne = await api.get(`pokemon/${idHandle}`);
      const requestTwo = await api.get(`ability/${idHandle}`);
      const requestThree = await api.get(`location/${idHandle}`);
  
      axios.all([requestOne, requestTwo, requestThree]).then(
        axios.spread((...allData) => {
          const allDataDados = allData[0].data;
          const allDataAbility = allData[1].data;
          const allDataLocation = allData[2].data;
  
          setDados(allDataDados);
          setAbility(allDataAbility);
          setLocation(allDataLocation);
        })
      ).catch((err) => {
        return console.eror(`ops! ocorreu um erro  ${err}`)
      });
    }
    getData();
    setTimeout(loadingHidden,3000);
  }, [idHandle]);

  const inc = () => {setIdHandle(idHandle+1)}
  const dec = () => {setIdHandle(idHandle-1)}

  console.log(idHandle)
  return (
    <Container>
      {loading ? (
        <ContainerLoading>
            <FireworkSpinner size={60} color="#f00" loading={loading} />
        </ContainerLoading>
        
      ) : (
        <ContainerPokemon>
          <ContainerButton>
            <ButtonId onCLick={dec}><Icon src={LeftAngle}/></ButtonId>
            <ButtonId onClick={inc}><Icon src={RightAngle}/></ButtonId>
          </ContainerButton>
          <Informacoes>
            <div>
              <article>
                <Nome>
                  <center>{dados.name}</center>
                </Nome>
                <Imagem
                  src={
                       dados.sprites.length !== 0
                         ? dados.sprites.other.dream_world.front_default.length !== 0 ?
                        (dados.sprites.other.dream_world.front_default)
                         
                    : dados.sprites.front_default !==0 ? (dados.sprites.front_default) 
                      : (<>Image unavailable</>)
                    : (<>Image unavailable</>)
                  }
                />
              </article>
              <Type>
                <div>
                  <p>{`Height: ${dados.height / 10}m`}</p>
                  <p>{`Weight: ${dados.weight / 10}kg`}</p>
                </div>

                <div>
                  <p>City:</p>
                  {location.name}
                </div>
                <div>
                  <p>Region: </p>
                  { location.region !== null ? (location.region.name) : (<>Unknown data </>)}
                </div>
              </Type>
            </div>

            <CaracteristicasGrid>
              <Geracao>{ability.generation.name}</Geracao>
              <Status>
                <div>
                  <p>ATK </p>
                  {dados.stats[1].base_stat}
                </div>
                <div>
                  <p>HP</p>
                  {dados.stats[0].base_stat}
                </div>
                <div>
                  <p>VEL</p>
                  {dados.stats[0].base_stat}
                </div>
                <div>
                  <p>DEF</p>
                  {dados.stats[2].base_stat}
                </div>
              </Status>
              <Efeito>
                <div>
                  <p>Effect: </p>
                  {ability.effect_entries.length !== 0 ? (
                    ability.effect_entries[1].effect
                  ) : (
                    <>Unknown data </>
                  )}
                </div>
              </Efeito>
              <Efeito>
                <div>
                  <p>Short Effect: </p>
                  {ability.effect_entries.length !== 0 ? 
                    ability.effect_entries[0].short_effect !== 0 ?
                    (ability.effect_entries[0].short_effect)
                    :(<>Unknown data</>)
                   : (
                    <>Unknown data  </>
                  )}
                </div>
              </Efeito>
            </CaracteristicasGrid>
          </Informacoes>
          <HomePage to="/">Voltar</HomePage>
        </ContainerPokemon>
      )}
    </Container>
  );
};

export default Pokemon;
