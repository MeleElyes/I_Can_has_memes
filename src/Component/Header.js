import domtoimage from "dom-to-image";
import Logo from "../asset/My project-1 (1).png"


const Header = (props) => {
  const download = () => {
    const file = document.querySelector(".meme");
    var options = { quality: 1 };

    domtoimage.toJpeg(file, options).then((data) => {
      const link = document.createElement("a");
      link.download = "meme.jpeg";
      link.href = data;
      link.click();
    });
  };

  const generate = () => {
    const file = document.querySelector(".memedisplay");
    var options = { quality: 1 };

    domtoimage.toPng(file, options).then((data) => {
    const title = document.createElement("h3")
      const img = document.createElement("img");
      img.src = data
      title.innerHTML = "Right click and save your meme!" 
      title.className = "memeTodownload"
      img.className = "ImgmemeTodownload"
      file.appendChild(title)
      file.appendChild(img)
      props.setGenerate(true)
    });
  };

  const reset = () => {
    const child = document.querySelector(".memeTodownload");
    const childImg = document.querySelector(".ImgmemeTodownload");
    child.parentNode.removeChild(child)
    childImg.parentNode.removeChild(childImg)
      props.setGenerate(false)
    };
  

  return (
    <>
      <img src={Logo} width={"450px"} alt="logo" />
      <div className="inputSection">
         <input
         className="input"
          type="text"
          name="TextBottom"
          placeholder="Text top"
          onChange={(e) => props.setTextTop(e.target.value)}
        />
        <input
        className="input"
          type="text"
          name="TextTop"
          placeholder="Text bottom"
          onChange={(e) => props.setTextBottom(e.target.value)}
        />
      </div>
      <div className="button">
        <button
          onClick={() => props.setCount(props.count + 1)}
        >
          Get picture
        </button>
        <button
          onClick={() => props.setDrop(true)}
        >
          Import picture
        </button>
        <button
          onClick={() => download()}
        >
          Download picture
        </button>
        <button
        onClick={() => generate()}
        >
          Generate memes
        </button>

        {props.generate && <button className="buttonReset"
        onClick={() => reset()}
        >
          Reset memes 
        </button>}

      </div>
    </>
  );
};

export default Header;
