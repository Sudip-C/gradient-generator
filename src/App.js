import React from "react";

function App() {
  const [colors, setColors] = React.useState(["#FFD500", "#FF0040"]);
  const colorStops = colors.join(", ");
  const backgroundImage = `linear-gradient(${colorStops})`;

  const handleAdd = () => {
    const arr = [...colors, "#FFFF50"];
    setColors(arr);
  };

  const handleRemove = () => {
    if (colors.length > 1) {
      setColors(colors.slice(0, -1));
    }
  };

  const handleColorChange = (index, newColor) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  };
  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={handleRemove}>Remove color</button>
        <button onClick={() => handleAdd()}>Add color</button>
      </div>
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />
      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>Color {index + 1}:</label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  onChange={(e) => handleColorChange(index, e.target.value)}
                  type="color"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: "12rem" }}>
        <div>Expected output</div>
        <video src="gradient-tool-demo.mp4" autoPlay controls />
      </div>
    </div>
  );
}

export default App;
