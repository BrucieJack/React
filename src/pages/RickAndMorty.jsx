import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "../store/actions/characters";

export const RickAndMorty = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return <div>Rick</div>;
};
