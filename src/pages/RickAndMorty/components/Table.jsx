import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById } from "../../../store/actions/characters";
import { getEpisodeById } from "../../../store/actions/episodes";
import {
  episodesCategories,
  charactersCategories,
} from "@constants/categories";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const titles =
    props.contentType === "Episodes"
      ? episodesCategories
      : charactersCategories;
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const handleRowClick = () => {
    setOpen(!open);
    if (props.contentType === "Episodes") {
      dispatch(getEpisodeById(row.id));
    } else {
      dispatch(getCharacterById(row.id));
    }
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={handleRowClick}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="center">{row.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                More
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    {titles.map((title, index) => (
                      <TableCell align="center" key={index}>
                        {title}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row"></TableCell>
                    {props.contentType === "Characters" && (
                      <TableCell align="center">
                        <Box
                          component="img"
                          sx={{
                            height: 300,
                            width: 300,
                            maxHeight: { xs: 270, md: 300 },
                            maxWidth: { xs: 350, md: 300 },
                          }}
                          src={data.character.image}
                        />
                      </TableCell>
                    )}

                    <TableCell align="center">
                      {props.contentType === "Characters"
                        ? data.character.status
                        : data.episode.air_date}
                    </TableCell>
                    <TableCell align="center">
                      {}
                      {props.contentType === "Characters"
                        ? data.character.species
                        : data.episode.episode}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />

            <TableCell>ID</TableCell>
            <TableCell align="center">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <Row key={row.id} row={row} contentType={props.contentType} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
