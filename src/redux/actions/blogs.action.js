import { GET_ALL_BLOGS, STORE_ALL_BLOGS, GET_MY_BLOGS, STORE_MY_BLOGS } from "../actionType";

export const getAllBlogs = (id, userId) => async (dispatch) => {
  let apiUrl = `http://localhost:3000/blogs`;

  let response = await fetch(apiUrl);

  let data = await response.json();

  console.log(id)
  if( id === undefined ) {
    id = "allBlogs"
  }

  if( id === "allBlogs" ) {
    dispatch({
      type: GET_ALL_BLOGS,
  
      payload: data,
    });
  
    dispatch({
      type: STORE_ALL_BLOGS,
  
      payload: data,
    });
  }
  console.log( userId )
  if( id === "myBlogs" ) {
      data = data.filter(blog=>{
        console.log( blog.blogger_id )
        return(blog.blogger_id==parseInt(userId)) 
     })
    dispatch({
      type: GET_MY_BLOGS,
  
      payload: data,
    });
  
    dispatch({
      type: STORE_MY_BLOGS,
  
      payload: data,
    });
  }
};
