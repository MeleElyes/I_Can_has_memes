import "./App.css";
import Header from "./Component/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import Meme from "./Component/Meme";
import MyDropzone from "./Component/Dropzone";

const App = () => {
  const [meme, setMeme] = useState([]);
  const [randommeme, setRandommeme] = useState("");
  const [generate, setGenerate] = useState(false);
  const [count, setCount] = useState(1);
  const [textTop, setTextTop] = useState("");
  const [textBottom, setTextBottom] = useState("");
  const [drop, setDrop] = useState(false);

  const fetchData = async () => {
    try {
      const callData = await axios.get("https://api.imgflip.com/get_memes");
      setMeme(callData.data.data.memes);
      RandomMeme();
    } catch (err) {
      console.log(err);
    }
  };

  const RandomMeme = () => {
    let randomIndex = Math.floor(Math.random() * 99);
    meme.length > 0 && setRandommeme(meme[randomIndex].url);
  };

  useEffect(() => {
    setDrop(false);
    fetchData();
  }, [count]);

  return (
    <div className="App">
      <Header
        count={count}
        setCount={setCount}
        setTextTop={setTextTop}
        setTextBottom={setTextBottom}
        setGenerate={setGenerate}
        generate={generate}
        setDrop={setDrop}
      />
      {drop && <MyDropzone setRandommeme={setRandommeme} setDrop={setDrop} />}
      {randommeme.length > 0 && (
        <Meme
          randommeme={randommeme}
          textTop={textTop}
          textBottom={textBottom}
        />
      )}
    </div>
  );
};

export default App;
