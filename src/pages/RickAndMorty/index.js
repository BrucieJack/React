import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../store/actions/characters";
import { getEpisodes } from "../../store/actions/episodes";
import ChoiceButtons from "./components/ChoiceButtons";
import EpisodesTable from "./components/EpisodesTable";
import CharactersTable from "./components/CharactersTable";
import { useMemo } from "react";

function createData(data) {
  console.log(data);
  return { episodes: data.episodes, characters: data.characters };
}

export const RickAndMorty = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [contentType, setContentType] = useState("episodes");

  const memoData = useMemo(() => createData(data), [data]);

  const handleClick = () => {
    if (contentType === "episodes") {
      setContentType("characters");
    } else {
      setContentType("episodes");
    }
  };

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getEpisodes());
  }, [dispatch]);

  return (
    <div>
      <ChoiceButtons handleClick={handleClick} contentType={contentType} />
      {contentType === "episodes" ? <EpisodesTable episodes={memoData.episodes} /> : <CharactersTable characters={memoData.characters} />}
    </div>
  );
};
