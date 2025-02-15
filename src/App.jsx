import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState("");

  function handleImageUpload(e) {
    const file = e.target.files[0];
    console.log(file);
  }

  return (
    <>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </>
  );
}

export default App;
