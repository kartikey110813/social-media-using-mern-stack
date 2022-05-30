import React from "react";
import Post from "./Post/Post";
import useStyles from "./style";
const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <Post />
      <Post />
      <Post />
    </>
  );
};

export default Posts;
