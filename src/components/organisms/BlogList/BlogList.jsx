import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAllBlogs } from '../../../redux/actions/blogs.action';
import Blog from '../../molecules/Blog/Blog';
import AddBlog from '../AddBlog/AddBlog';

export default function BlogList() {
    let {allBlogs,allBlogs_loaded} = useSelector(state=>state.allBlogs)
    let {id}=useParams()
    let dispatch = useDispatch();
    let userId=sessionStorage.getItem("user-id")
    useEffect(()=>{
        dispatch(getAllBlogs(id,userId))
    },[id])

    allBlogs?.sort(function(a, b) {
        let c = new Date(a.date);
        let d = new Date(b.date);
        return c-d;
    });
    allBlogs.reverse()

  return (
    <div className='p-5 border'>
        { ( id !== "addBlog") ?  
            allBlogs?.map(blog=>{
                return <Blog blog={blog} key={blog.id} />
            }):<AddBlog/>
        }
    </div>
  )
}
