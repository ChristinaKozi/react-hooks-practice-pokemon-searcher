import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const {name, hp, sprites} = pokemon
  const {front, back} = pokemon.sprites
  const [imageIsFront, setImageIsFront] = useState(true)

  function handleImageClick() {
    setImageIsFront(!imageIsFront)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleImageClick}>
          {imageIsFront ? 
            <img src={front} alt="name" /> :
            <img src={back} alt="name" />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
