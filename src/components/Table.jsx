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
import { useSelector } from "react-redux";

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
  const data = useSelector((state) => state);
  const handleRowClick = () => {
    props.handleClick(row.id);
    setOpen(!open);
    props.handleDispatch(props.id);
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
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {props.modalData.map((item, index) => (
                  <Grid key={index} xs={6}>
                    <Item>
                      <BasicModal
                        data={item.split("/").pop()}
                        componentType={props.contentType}
                        config={props.modalConfig}
                      />
                    </Item>
                  </Grid>
                ))}
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
              modalData={props.modal(row)} //KEK
              active={activeId}
              contentType={props.contentType}
              tableInfo={props.tableInfo}
              handleClick={handleClick}
              handleDispatch={props.handleDispatch}
              modalConfig={props.modalConfig}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
