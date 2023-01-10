import Draggable from "react-draggable";

const Meme = (props) => {

  return (
    <div className="memedisplay">
    <div className="meme">
    <Draggable bounds="parent">
      <h2 className="meme--text top">{props.textTop}</h2>
      </Draggable>
      <img className="meme--image" src={props.randommeme} width={"400px"} alt="meme" />
      <Draggable bounds="parent">
      <h2 className="meme--text bottom">{props.textBottom}</h2>
      </Draggable>
    </div>
    </div>
  );
};

export default Meme;
