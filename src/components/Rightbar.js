
 import { BrowserRouter } from "react-router-dom";
 import {
  Link,
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
  Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>

      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/6.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/7.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/8.jpg" />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>

      <ImageList rowHeight={100} cols={3} style={{ marginBottom: 20 }}>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=121&h=121&fit=crop&auto=format&dpr=2" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=121&h=121&fit=crop&auto=format&dpr=2" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=242&h=121&fit=crop&auto=format&dpr=2" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=242&h=242&fit=crop&auto=format&dpr=2" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=242&h=121&fit=crop&auto=format&dpr=2" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=242&h=121&fit=crop&auto=format&dpr=2" />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <BrowserRouter>
        <Link
          href="#"
          className={classes.link}
          style={{ textDecoration: "none" }}
          variant="body2"
        >
          Sport
        </Link>
        <Link
          href="#"
          className={classes.link}
          style={{ textDecoration: "none" }}
          variant="body2"
        >
          Food
        </Link>
        <Link
          href="#"
          className={classes.link}
          variant="body2"
          style={{ textDecoration: "none" }}
        >
          Movie
        </Link>
        <Link
          href="#"
          className={classes.link}
          variant="body2"
          style={{ textDecoration: "none" }}
        >
          Science
        </Link>
      </BrowserRouter>
    </Container>
  );
};
export default Rightbar;

