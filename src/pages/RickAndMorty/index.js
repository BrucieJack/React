import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../store/actions/characters";
import { getEpisodes } from "../../store/actions/episodes";
import CustomButton from "@components/CustomButton";
import Table from "@components/Table";
import { useMemo } from "react";
import { episodeTable, characterTable } from "@configs/tableConfig";
import { EpisodesAmount, CharactersAmount } from "@constants/pages";
import { getCharacterById } from "@store/actions/characters";
import { getEpisodeById } from "@store/actions/episodes";
import TablePagination from "@mui/material/TablePagination";
import { episodeModal, characterModal } from "@configs/modalConfig";

function createData(data) {
  return { episodes: data.episodes, characters: data.characters };
}

export const RickAndMorty = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [contentType, setContentType] = useState("Episodes");
  const [page, setPage] = useState(0);

  const modal = (row) => {
    if (contentType === "Episodes") {
      return row.characters;
    } else {
      return row.episode;
    }
  };

  const memoData = useMemo(() => createData(data), [data]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClick = () => {
    if (contentType === "Episodes") {
      setContentType("Characters");
      setPage(0);
    } else {
      setContentType("Episodes");
      setPage(0);
    }
  };

  const handleDispatch = (id) => {
    if (contentType === "Episodes") {
      dispatch(getEpisodeById(id));
    } else {
      dispatch(getCharacterById(id));
    }
  };

  useEffect(() => {
    dispatch(getCharacters(page + 1));
    dispatch(getEpisodes(page + 1));
  }, [dispatch, page]);

  return (
    <div>
      <CustomButton handleClick={handleClick} contentType={contentType} />
      {contentType === "Episodes" ? (
        <Table
          data={memoData.episodes}
          modalConfig={characterModal}
          contentType={contentType}
          modal={modal}
          tableInfo={episodeTable}
          handleDispatch={handleDispatch}
        />
      ) : (
        <Table
          data={memoData.characters}
          modalConfig={episodeModal}
          modal={modal}
          contentType={contentType}
          tableInfo={characterTable}
          handleDispatch={handleDispatch}
        ></Table>
      )}
      <TablePagination
        rowsPerPageOptions={[20]}
        component="div"
        count={contentType === "Episodes" ? EpisodesAmount : CharactersAmount}
        labelRowsPerPage={""}
        page={page}
        rowsPerPage={20}
        onPageChange={handleChangePage}
      />
    </div>
  );
};
