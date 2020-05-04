import { database } from "../database/config";

export function startAddingPost(post) {
  return (dispatch) => {
    return database
      .ref("post")
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function startLoadingPost() {
  return (dispatch) => {
    return database
      .ref("post")
      .once("value")
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((childSnapshot) => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadingPost(posts));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function startRemovingPost(index, id) {
  const updates = {
    [`post/${id}`]: null,
    [`comments/${id}`]: null,
  };

  return (dispatch) => {
    return database
      .ref()
      .update(updates)
      .then(() => {
        dispatch(removePost(index));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function startAddingComment(comment, postID) {
  return (dispatch) => {
    return database
      .ref(`comments/${postID}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, postID));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function startLoadingComment() {
  return (dispatch) => {
    return database
      .ref("comments")
      .once("value")
      .then((snapshot) => {
        let comments = {};
        snapshot.forEach((childSnapshot) => {
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        dispatch(loadingComment(comments));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function loadingComment(comments) {
  return {
    type: "LOAD_COMMENT",
    comments: comments,
  };
}

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index: index,
  };
}
export function addPost(post) {
  return {
    type: "ADD_POST",
    post: post,
  };
}

export function addComment(comment, postID) {
  return {
    type: "ADD_COMMENT",
    comment: comment,
    postID: postID,
  };
}

export function loadingPost(posts) {
  return {
    type: "LOAD_POST",
    posts: posts,
  };
}
