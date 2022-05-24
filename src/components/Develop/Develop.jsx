import c from "./Develop.module.css";
import img from "../../images/Rectangle.png";
import vidImg from "../../images/Video.png";

const Develop = (props) => {
  return (
    <div className={c.develop}>
      <img className={c.img} src={img} alt="" />
      <img className={c.img2} src={vidImg} alt="" />
    </div>
  );
};

export default Develop;
