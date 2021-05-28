import FormData from "form-data";
import Axios from "axios";
import { useState } from "react";
function App() {
  const [pic, setPic] = useState();

  const upload = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("video", pic);
    Axios.post("https://132.145.174.217/emytNode/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      Hello World
      <input
        type="file"
        id="pic"
        onChange={(e) => {
          setPic(e.target.files[0]);
        }}
      />
      <button
        onClick={(e) => {
          upload(e);
        }}
      >
        Send
      </button>
    </div>
  );
}

export default App;
