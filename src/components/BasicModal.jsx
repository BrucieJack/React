import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterById } from "@store/actions/characters";
import { getEpisodeById } from "@store/actions/episodes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    if (props.componentType === "Episodes") {
      dispatch(getCharacterById(props.data));
    }
    dispatch(getEpisodeById(props.data));
  };

  const handleClose = () => setOpen(false);
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={handleOpen}>
        {props.componentType === "Episodes"
          ? "Посмотреть персонажа"
          : "Посмотреть эпизод"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.config.map((item) => (
            <Typography id={item.id}>
              {
                // eslint-disable-next-line
                eval(item.data)
              }
            </Typography>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
