import ImageContext from "./ImageContext";
import React, { useState } from "react";

export default function ImageState(props) {
  let [blogImage, setBlogImage] = useState(false);
//   let [user, setUser] = useState(true)
  return (
    <ImageContext.Provider
      value={{ blogImage,setBlogImage }}
    >
      {props.children}
    </ImageContext.Provider>
  );
  }