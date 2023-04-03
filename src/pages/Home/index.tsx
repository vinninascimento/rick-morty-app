import { useEffect, useState } from "react";
import api from "../../services/api";

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { HomeContainer, LoadingDiv, NotFoundDiv } from "./styles";
import heartImg from '../../assets/images/heart.svg';
import notFoundImg from '../../assets/images/not-found.png';

type Character = {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
}

export function Home(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    async function loadCharacters() {
      if (searchText === "") {
        await api.get('/character')
          .then((response) => {
            const data = response.data.results;

            setCharacters(data);
            setLoading(false);
            setNotFound(false);
          },
          (error) => {
            console.error(error);
            setNotFound(true);
          });
      } else {
        await api.get(`https://rickandmortyapi.com/api/character/?name=${searchText}`)
          .then((response) => {
            const data = response.data.results;

            setCharacters(data);
            setLoading(false);
            setNotFound(false);
          },(error) => {
            console.error(error);
            setNotFound(true);
          })
      }
    }

    loadCharacters();
  }, [searchText])

  return (
    <div>
      <Header imgButton={heartImg} toLink={"/home/favorites"}>
        Favoritos
      </Header>

      <HomeContainer>
        <Search searchText={searchText} setSearchText={setSearchText}/>
        {
          loading ? (
            <LoadingDiv>
              <p>Loading...</p>
            </LoadingDiv>
          ) : (
            notFound ? (
              <NotFoundDiv>
                <h3>Procuramos em todas as dimensões e não foi encontrado esse cara</h3>
                <img src={notFoundImg} alt="Rick e Morty procurando o personagem pelas dimensões" />
              </NotFoundDiv>
            ) : (
              <Card characters={characters} />
          ))
        }
      </HomeContainer>
      
      <Footer />
    </div>
  )
}