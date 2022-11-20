import { GET_ALL_BLOGS, STORE_ALL_BLOGS, GET_MY_BLOGS, STORE_MY_BLOGS } from "../actionType";

const InitialState = {
  allBlogs: [],
  allBlogs_loaded: false,
};

export const blogReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_ALL_BLOGS:
      return {
        ...state,
        allBlogs: action.payload,
      };
    case STORE_ALL_BLOGS:
      return {
        ...state,
        allBlogs: action.payload,
        allBlogs_loaded: false,
      };

      case GET_MY_BLOGS:
        return {
          ...state,
          allBlogs: action.payload,
          allBlogs_loaded:false
        }
        case STORE_MY_BLOGS:
          return {
            ...state,
            allBlogs: action.payload,
            allBlogs_loaded: false,
          };

    default:
      return state;
  }
};
