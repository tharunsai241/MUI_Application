import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.myButton,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="text"
        startIcon={<PersonIcon />}
        className={classes.button}
      >
        Text
      </Button>
    </div>
  );
};
export default App;



//theme.js

import { createTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  myButton: {
    backgroundColor: "red",
    color: "white",
    border: "1px solid black",
  },
});