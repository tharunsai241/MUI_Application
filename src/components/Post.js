import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 media: {
  height: 250,
  [theme.breakpoints.down("sm")]:{
      height:150,
  }
  },
  card:{
      marginBottom: theme.spacing(5)
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/7263015/pexels-photo-7263015.jpeg?auto=compress&cs=tinysrbg&dpr=2&w=500"
          title="My post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">My First post</Typography>
          <Typography variant="body2">
            lorem is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
