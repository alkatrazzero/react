const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you", like: 0 },
    { id: 2, message: "It is my first message", like: 0 },
  ],
  newPostText: " ",
};
const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state, posts: [...state.posts] };
  switch (action.type) {
    case ADD_POST:
      let text = state.newPostText;
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, { id: 5, message: text, like: 0 }],
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export default profileReducer;
