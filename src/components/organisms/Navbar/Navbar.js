import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import Button from "../../atoms/Button";
import AppContext from "../../../context/AppContext";

export default function Navbar() {
  let contextData = useContext(AuthContext);
  let contextAppData = useContext(AppContext);
  let navigate = useNavigate();
  console.log(contextData.loggedIn);

  const onClickHandler = () => {
    contextData.setLoggedIn(false);

    sessionStorage.clear("login");
    alert("logged out");
  };
  const showAllBlogs = () => {
    contextAppData.setMyBlogs(false);
  };
  const showMyBlogs = () => {
    contextAppData.setMyBlogs(true);
  };
  const addBlog = () => {
    navigate("/addBlog");
  };
  return (
    <div className="bg-slate-300 px-10 flex min-w-screen justify-between py-2">
      <div className="">
        <Link to="/allBlogs">
          <Button bg="inherit" text="black" onClickHandler={showAllBlogs}>
            All Blogs
          </Button>
        </Link>
        <Link to="/myBlogs">
          <Button
            bg="inherit"
            text="black"
            disabled={!contextData.loggedIn}
            onClickHandler={showMyBlogs}
          >
            My Blogs
          </Button>
        </Link>
        <Link to="/addBlog">
          <Button
            bg="inherit"
            text="black"
            disabled={!contextData.loggedIn}
            onClickHandler={addBlog}
          >
            Add Blog
          </Button>
        </Link>
      </div>
      <div>
        {contextData.loggedIn ? (
          <Button
            onClickHandler={() => {
              onClickHandler();
            }}
          >
            Logout
          </Button>
        ) : (
          <Link to="/auth">
            <Button bg="#404040" className="text-white">
              Login or Signup
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
