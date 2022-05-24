import c from "./Box.module.css";
import img from "../../../images/iconProjects.png";

const Box = (props) => {
  return (
    <div className={c.box}>
      <div>
        <img src={img} alt="" />
        <h4>125</h4>
      </div>
      <p>Our projects</p>
    </div>
  );
};

export default Box;
