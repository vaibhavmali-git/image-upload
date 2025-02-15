import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState("");

  function handleImageUpload(e) {
    const file = e.target.files[0];
    console.log(file);

    if(file){
      const reader = new FileReader();
     reader.onload = () =>{
      setImage(reader.result)
     }

      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="container">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="uploaded" width={400}/>}
    </div>
  );
}

export default App;
