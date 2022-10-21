import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CustomButton(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={props.handleClick}>
        {props.contentType}
      </Button>
    </Stack>
  );
}
