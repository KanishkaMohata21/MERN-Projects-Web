import React, { useState } from "react";
import { useEffect } from "react";

function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function createHexColor() {
    const hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
    let hexColor = "#";
    for(let i=0; i<6; i++) {
        hexColor += hex[Math.floor(Math.random() * 16)];
    } 
    setColor(hexColor);
  }

  function createRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") createRgbColor();
    else createHexColor();
  }, [typeOfColor]);
  

  return (
    <div className="rcg_container" style={{ width: "100%", height: "100vh", background: color }}>
      <div className="rcg_buttons">
        <button className="rcg_button" onClick={() => setTypeOfColor("hex")}>
          Hex
        </button>
        <button className="rcg_button" onClick={() => setTypeOfColor("rgb")}>
          RGB
        </button>
        <button className="rcg_button" onClick={typeOfColor === "hex" ? createHexColor : createRgbColor}>
          Generate
        </button>
      </div>
      <h1 className="rcg_margin">{typeOfColor}</h1>
      <h2>{color}</h2>
    </div>
  );
}

export default RandomColorGenerator;
