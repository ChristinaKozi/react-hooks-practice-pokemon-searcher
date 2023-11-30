import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
      .then(r=>r.json())
      .then(data=>setPokemons(data))
  },[])

  function handleAddPoke(newPoke) {
    const updatedPokes = [...pokemons, newPoke]
    setPokemons(updatedPokes)
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value)
  }
  
  const displayedPokemon = pokemons.filter(p => p.name.includes(searchTerm.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPoke={handleAddPoke}/>
      <br />
      <Search handleSearch={handleSearch} searchTerm={searchTerm}/>
      <br />
      <PokemonCollection pokemons={displayedPokemon} />
    </Container>
  );
}

export default PokemonPage;
