import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from "@material-ui/core";
import React,{useState} from "react";
import { makeStyles } from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { styled, alpha } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {

  const [open,setOpen]=useState(false);
  const classes = useStyles({open});
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Tharun
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          sai
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="search" className={classes.input} />
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
          <Badge badgeContent={4} color="success" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="success" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
