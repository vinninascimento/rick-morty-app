import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { SearchContainer } from "./styles";

type SearchProps = {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  // updatePageNumber: Dispatch<SetStateAction<number>>;
};

export function Search({
  searchText,
  setSearchText,
  // updatePageNumber,
}: SearchProps): JSX.Element {
  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchText(value);
    // updatePageNumber(1);
  }

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Pesquisar personagem"
        value={searchText}
        onChange={handleChange}
      />
    </SearchContainer>
  );
}