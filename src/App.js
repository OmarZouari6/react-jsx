import image from "../src/public.png";
import image1 from "../src/imageInSrc.jpg";
import video from "./video.mp4";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Omar Zouari</h1>
        <br />
        <img className="image1" src={image1} alt="" />
        <br />
        <img className="image2" src={image} alt="" />
      </div>
      <video width={320} height={240} controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
