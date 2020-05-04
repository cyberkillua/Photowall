import _posts from "../data/posts";
import {combineReducers} from "redux";


function comments(state = {}, action) {

  switch (action.type) {
    case "ADD_COMMENT":
    if(!state[action.postID]){
      return {...state, [action.postID] : [action.comment] };
    }else {
      return {...state, [action.postID]: [...state[action.postID], action.comment]}
    }
     case "LOAD_COMMENT": return action.comments 
    default:
      return state;
  }
}

function posts(state = _posts, action) {

  switch (action.type) {
    case "REMOVE_POST":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "ADD_POST":
      return [...state, action.post];
    case "LOAD_POST": return action.posts 
    default:
      return state;
  }
}
const rootReducers = combineReducers({posts, comments});

export default rootReducers;
