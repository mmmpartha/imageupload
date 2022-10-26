import React from "react";
import { useState } from "react";

export default function Image() {
  const [state, setState] = useState()
  const [background, setBackground] = useState()
  function Handleimage(e) {
    setState(URL.createObjectURL(e.target.files[0]))
  }
  function Background(e) {
    setBackground(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <>
      <body>
        <div style={{ backgroundImage: `url(${background})` }}>
          <h1>Image Upload</h1>
          <input type="file" onChange={Handleimage} />
          <img src={state} id="profile" alt="profile" />
          <h1>Background Image</h1>
          <input type="file" onChange={Background} />
        </div>
      </body>
    </>
  )
}