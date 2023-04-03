import { createContext, ReactNode, useState } from "react";

type CharactersContextProviderProps = {
  children: ReactNode;
};

type Character = {
  id: number;
  image: string;
  name: string;
  species: string;
  type: string;
  gender: string;
};

type CharactersFilter = {
  characters: Character[];
};

type CharactersContextType = {
  charactersFilter: CharactersFilter | undefined;
  filterCharacters: (searchText: string) => Promise<void>;
};

export const CharactersContext = createContext<CharactersContextType>({
  charactersFilter: undefined,
  filterCharacters: async () => {},
});

export function CharactersContextProvider({
  children,
}: CharactersContextProviderProps) {
  const [charactersFilter, setCharactersFilter] =
    useState<CharactersFilter | undefined>(undefined);

  async function filterCharacters(searchText: string) {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchText}`
    );
    const data = await res.json();

    setCharactersFilter({ characters: data.results });
  }

  return (
    <CharactersContext.Provider value={{ charactersFilter, filterCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
}