import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../store/actions/characters";
import { getEpisodes } from "../../store/actions/episodes";
import CustomButton from "@components/CustomButton";
import Table from "@components/Table";
import { useMemo } from "react";
import { episodeTable, characterTable } from "@configs/tableConfig";
import { EpisodesAmount, CharactersAmount } from "@constants/pages";
import TablePagination from "@mui/material/TablePagination";

function createData(data) {
  return { episodes: data.episodes, characters: data.characters };
}

export const RickAndMorty = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [contentType, setContentType] = useState("Episodes");
  const [page, setPage] = useState(0);

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
          contentType={contentType}
          tableInfo={episodeTable}
        />
      ) : (
        <Table
          data={memoData.characters}
          contentType={contentType}
          tableInfo={characterTable}
        />
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
