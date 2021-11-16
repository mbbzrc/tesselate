import React, { useState, useEffect } from "react";

import { Toolbar, Palette, Grid } from "./index";

import { templates } from "../templates";

export const App = () => {
  const [canvas, setCanvas] = useState(false);
  const [template, setTemplate] = useState({
    size: 144,
    style: { gridTemplateColumns: "repeat(12, 1fr)" },
  });
  const [brush, setBrush] = useState("");
  const [eraser, setEraser] = useState(false);

  useEffect(() => {
    if (!canvas) setEraser(false);
  }, [canvas]);

  useEffect(() => {
    if (eraser) setBrush("");
  }, [eraser]);

  const handleSelection = (e) => {
    const [selection] = templates.filter(
      (template) => template.name == e.target.value
    );
    setTemplate(selection);
  };

  const handleStart = (e) => {
    e.preventDefault();
    setCanvas(true);
  };

  return (
    <div id="app">
      <div id="logo">
        <img src="/assets/logo.png" />
        <h1>TESSELLATE</h1>
      </div>
      {canvas ? (
        <div id="workspace">
          <h2>{template.displayName}</h2>
          <Toolbar
            setCanvas={setCanvas}
            eraser={eraser}
            setEraser={setEraser}
          />
          <Palette setBrush={setBrush} eraser={eraser} />
          <Grid template={template} brush={brush} eraser={eraser} />
        </div>
      ) : (
        <div id="menu">
          <form>
            <select value={template.name} onChange={handleSelection}>
              {/* remove the none option once templates are complete */}
              {templates.map(({ name, displayName }) => (
                <option key={name} value={name}>
                  {displayName}
                </option>
              ))}
            </select>
            <input type="submit" value="OPEN" onClick={handleStart} />
          </form>
          <article>
            <h2>the coloring book app</h2>
            <p>Turn on some music, sit back, and relax with Tessellate.</p>
            <p>To get started, choose a piece of art from the menu above.</p>
          </article>
        </div>
      )}
      <footer>&copy; Tessellate</footer>
    </div>
  );
};
