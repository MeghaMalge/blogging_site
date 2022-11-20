import {combineReducers , createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import { blogReducer } from "./reducers/blogs.reducer";

const rootReducer=combineReducers({allBlogs:blogReducer})


const store = createStore(
    rootReducer,{},composeWithDevTools(applyMiddleware(thunk))
)

export default store

