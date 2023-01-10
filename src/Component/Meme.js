const Meme = (props) => {

  return (
    <div className="memedisplay">
    <div className="meme">
      <h2 className="meme--text top">{props.textTop}</h2>
      <img className="meme--image" src={props.randommeme} width={"400px"} alt="meme" />
      <h2 className="meme--text bottom">{props.textBottom}</h2>
    </div>
    </div>
  );
};

export default Meme;
