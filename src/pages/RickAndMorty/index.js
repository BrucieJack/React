import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../store/actions/characters";
import { getEpisodes } from "../../store/actions/episodes";
import ChoiceButtons from "./components/ChoiceButtons";
import Table from "./components/Table";
import { useMemo } from "react";

function createData(data) {
  return { episodes: data.episodes, characters: data.characters };
}

export const RickAndMorty = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [contentType, setContentType] = useState("Episodes");

  const memoData = useMemo(() => createData(data), [data]);

  const handleClick = () => {
    if (contentType === "Episodes") {
      setContentType("Characters");
    } else {
      setContentType("Episodes");
    }
  };

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getEpisodes());
  }, [dispatch]);

  return (
    <div>
      <ChoiceButtons handleClick={handleClick} contentType={contentType} />
      {contentType === "Episodes" ? (
        <Table data={memoData.episodes} contentType={contentType} />
      ) : (
        <Table data={memoData.characters} contentType={contentType} />
      )}
    </div>
  );
};
