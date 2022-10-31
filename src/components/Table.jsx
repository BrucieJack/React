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
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { episodeModal, characterModal } from "@configs/modalConfig";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById } from "@store/actions/characters";
import { getEpisodeById } from "@store/actions/episodes";
import BasicModal from "@components/BasicModal";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const handleRowClick = () => {
    props.handleClick(props.id);
    setOpen(!open);
    if (props.contentType === "Episodes") {
      dispatch(getEpisodeById(row.id));
    } else {
      dispatch(getCharacterById(row.id));
    }
  };
  React.useEffect(() => {
    if (props.active !== props.id) {
      setOpen(false);
    }
  }, [props.active]);
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
                    {props.contentType === "Characters" && (
                      <TableCell align="center">Image</TableCell>
                    )}
                    {props.tableInfo.map((item, index) => (
                      <TableCell align="center" key={index}>
                        {item.title}
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
                    {props.tableInfo.map((item, index) => (
                      <TableCell align="center" key={index}>
                        {
                          // eslint-disable-next-line
                          eval(item.data)
                        }
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
              <Typography variant="h6" gutterBottom component="div">
                {props.contentType === "Episodes" ? "Characters" : "Episodes"}
              </Typography>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {props.contentType === "Episodes"
                  ? row.characters.map((item, index) => (
                      <Grid key={index} xs={6}>
                        <Item>
                          <BasicModal
                            data={item.split("/").pop()}
                            componentType={props.contentType}
                            config={characterModal}
                          />
                        </Item>
                      </Grid>
                    ))
                  : row.episode.map((item, index) => (
                      <Grid key={index} xs={6}>
                        <Item>
                          <BasicModal
                            data={item.split("/").pop()}
                            componentType={props.contentType}
                            config={episodeModal}
                          />
                        </Item>
                      </Grid>
                    ))}
                {}
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props) {
  const [activeId, setActiveId] = React.useState(null);
  const handleClick = (id) => {
    setActiveId(id);
  };
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
            <Row
              id={row.id}
              key={row.id}
              row={row}
              active={activeId}
              contentType={props.contentType}
              tableInfo={props.tableInfo}
              handleClick={handleClick}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
